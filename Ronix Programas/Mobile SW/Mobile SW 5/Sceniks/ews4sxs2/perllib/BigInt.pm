package BigInt;

%OVERLOAD = ( 
				# Anonymous subroutines:
'+'	=>	sub {new BigInt &badd},
'-'	=>	sub {new BigInt
		       $_[2]? bsub($_[1],${$_[0]}) : bsub(${$_[0]},$_[1])},
'<=>'	=>	sub {new BigInt
		       $_[2]? bcmp($_[1],${$_[0]}) : bcmp(${$_[0]},$_[1])},
'cmp'	=>	sub {new BigInt
		       $_[2]? ($_[1] cmp ${$_[0]}) : (${$_[0]} cmp $_[1])},
'*'	=>	sub {new BigInt &bmul},
'/'	=>	sub {new BigInt 
		       $_[2]? scalar bdiv($_[1],${$_[0]}) :
			 scalar bdiv(${$_[0]},$_[1])},
'%'	=>	sub {new BigInt
		       $_[2]? bmod($_[1],${$_[0]}) : bmod(${$_[0]},$_[1])},
'**'	=>	sub {new BigInt
		       $_[2]? bpow($_[1],${$_[0]}) : bpow(${$_[0]},$_[1])},
'neg'	=>	sub {new BigInt &bneg},
'abs'	=>	sub {new BigInt &babs},

qw(
""	stringify
0+	numify)			# Order of arguments unsignificant
);

sub new {
  my $foo = bnorm($_[1]);
  die "Not a number initialized to BigInt" if $foo eq "NaN";
  bless \$foo;
}
sub stringify { "${$_[0]}" }
sub numify { 0 + "${$_[0]}" }	# Not needed, additional overhead
				# comparing to direct compilation based on
				# stringify

# arbitrary size integer math package
#
# by Mark Biggar
#
# Canonical Big integer value are strings of the form
#       /^[+-]\d+$/ with leading zeros suppressed
# Input values to these routines may be strings of the form
#       /^\s*[+-]?[\d\s]+$/.
# Examples:
#   '+0'                            canonical zero value
#   '   -123 123 123'               canonical value '-123123123'
#   '1 23 456 7890'                 canonical value '+1234567890'
# Output values always always in canonical form
#
# Actual math is done in an internal format consisting of an array
#   whose first element is the sign (/^[+-]$/) and whose remaining 
#   elements are base 100000 digits with the least significant digit first.
# The string 'NaN' is used to represent the result when input arguments 
#   are not numbers, as well as the result of dividing by zero
#
# routines provided are:
#
#   bneg(BINT) return BINT              negation
#   babs(BINT) return BINT              absolute value
#   bcmp(BINT,BINT) return CODE         compare numbers (undef,<0,=0,>0)
#   badd(BINT,BINT) return BINT         addition
#   bsub(BINT,BINT) return BINT         subtraction
#   bmul(BINT,BINT) return BINT         multiplication
#   bdiv(BINT,BINT) return (BINT,BINT)  division (quo,rem) just quo if scalar
#   bmod(BINT,BINT) return BINT         modulus
#   bgcd(BINT,BINT) return BINT         greatest common divisor
#   bnorm(BINT) return BINT             normalization
#

$zero = 0;


# normalize string form of number.   Strip leading zeros.  Strip any
#   white space and add a sign, if missing.
# Strings that are not numbers result the value 'NaN'.

sub bnorm { #(num_str) return num_str
    local($_) = @_;
    s/\s+//g;                           # strip white space
    if (s/^([+-]?)0*(\d+)$/$1$2/) {     # test if number
	substr($_,$[,0) = '+' unless $1; # Add missing sign
	s/^-0/+0/;
	$_;
    } else {
	'NaN';
    }
}

# Convert a number from string format to internal base 100000 format.
#   Assumes normalized value as input.
sub internal { #(num_str) return int_num_array
    local($d) = @_;
    ($is,$il) = (substr($d,$[,1),length($d)-2);
    substr($d,$[,1) = '';
    ($is, reverse(unpack("a" . ($il%5+1) . ("a5" x ($il/5)), $d)));
}

# Convert a number from internal base 100000 format to string format.
#   This routine scribbles all over input array.
sub external { #(int_num_array) return num_str
    $es = shift;
    grep($_ > 9999 || ($_ = substr('0000'.$_,-5)), @_);   # zero pad
    &bnorm(join('', $es, reverse(@_)));    # reverse concat and normalize
}

# Negate input value.
sub bneg { #(num_str) return num_str
    local($_) = &bnorm(@_);
    vec($_,0,8) ^= ord('+') ^ ord('-') unless $_ eq '+0';
    s/^H/N/;
    $_;
}

# Returns the absolute value of the input.
sub babs { #(num_str) return num_str
    &abs(&bnorm(@_));
}

sub abs { # post-normalized abs for internal use
    local($_) = @_;
    s/^-/+/;
    $_;
}

# Compares 2 values.  Returns one of undef, <0, =0, >0. (suitable for sort)
sub bcmp { #(num_str, num_str) return cond_code
    local($x,$y) = (&bnorm($_[$[]),&bnorm($_[$[+1]));
    if ($x eq 'NaN') {
	undef;
    } elsif ($y eq 'NaN') {
	undef;
    } else {
	&cmp($x,$y);
    }
}

sub cmp { # post-normalized compare for internal use
    local($cx, $cy) = @_;
    $cx cmp $cy
    &&
    (
	ord($cy) <=> ord($cx)
	||
	($cx cmp ',') * (length($cy) <=> length($cx) || $cy cmp $cx)
    );
}

sub badd { #(num_str, num_str) return num_str
    local(*x, *y); ($x, $y) = (&bnorm($_[$[]),&bnorm($_[$[+1]));
    if ($x eq 'NaN') {
	'NaN';
    } elsif ($y eq 'NaN') {
	'NaN';
    } else {
	@x = &internal($x);             # convert to internal form
	@y = &internal($y);
	local($sx, $sy) = (shift @x, shift @y); # get signs
	if ($sx eq $sy) {
	    &external($sx, &add(*x, *y)); # if same sign add
	} else {
	    ($x, $y) = (&abs($x),&abs($y)); # make abs
	    if (&cmp($y,$x) > 0) {
		&external($sy, &sub(*y, *x));
	    } else {
		&external($sx, &sub(*x, *y));
	    }
	}
    }
}

sub bsub { #(num_str, num_str) return num_str
    &badd($_[$[],&bneg($_[$[+1]));    
}

# GCD -- Euclids algorithm Knuth Vol 2 pg 296
sub bgcd { #(num_str, num_str) return num_str
    local($x,$y) = (&bnorm($_[$[]),&bnorm($_[$[+1]));
    if ($x eq 'NaN' || $y eq 'NaN') {
	'NaN';
    } else {
	($x, $y) = ($y,&bmod($x,$y)) while $y ne '+0';
	$x;
    }
}

# routine to add two base 1e5 numbers
#   stolen from Knuth Vol 2 Algorithm A pg 231
#   there are separate routines to add and sub as per Kunth pg 233
sub add { #(int_num_array, int_num_array) return int_num_array
    local(*x, *y) = @_;
    $car = 0;
    for $x (@x) {
	last unless @y || $car;
	$x -= 1e5 if $car = (($x += shift(@y) + $car) >= 1e5);
    }
    for $y (@y) {
	last unless $car;
	$y -= 1e5 if $car = (($y += $car) >= 1e5);
    }
    (@x, @y, $car);
}

# subtract base 1e5 numbers -- stolen from Knuth Vol 2 pg 232, $x > $y
sub sub { #(int_num_array, int_num_array) return int_num_array
    local(*sx, *sy) = @_;
    $bar = 0;
    for $sx (@sx) {
	last unless @y || $bar;
	$sx += 1e5 if $bar = (($sx -= shift(@sy) + $bar) < 0);
    }
    @sx;
}

# multiply two numbers -- stolen from Knuth Vol 2 pg 233
sub bmul { #(num_str, num_str) return num_str
    local(*x, *y); ($x, $y) = (&bnorm($_[$[]), &bnorm($_[$[+1]));
    if ($x eq 'NaN') {
	'NaN';
    } elsif ($y eq 'NaN') {
	'NaN';
    } else {
	@x = &internal($x);
	@y = &internal($y);
	&external(&mul(*x,*y));
    }
}

# multiply two numbers in internal representation
# destroys the arguments, supposes that two arguments are different
sub mul { #(*int_num_array, *int_num_array) return int_num_array
    local(*x, *y) = (shift, shift);
    local($signr) = (shift @x ne shift @y) ? '-' : '+';
    @prod = ();
    for $x (@x) {
      ($car, $cty) = (0, $[);
      for $y (@y) {
	$prod = $x * $y + $prod[$cty] + $car;
	$prod[$cty++] =
	  $prod - ($car = int($prod * 1e-5)) * 1e5;
      }
      $prod[$cty] += $car if $car;
      $x = shift @prod;
    }
    ($signr, @x, @prod);
}

# modulus
sub bmod { #(num_str, num_str) return num_str
    (&bdiv(@_))[$[+1];
}

sub bdiv { #(dividend: num_str, divisor: num_str) return num_str
    local (*x, *y); ($x, $y) = (&bnorm($_[$[]), &bnorm($_[$[+1]));
    return wantarray ? ('NaN','NaN') : 'NaN'
	if ($x eq 'NaN' || $y eq 'NaN' || $y eq '+0');
    return wantarray ? ('+0',$x) : '+0' if (&cmp(&abs($x),&abs($y)) < 0);
    @x = &internal($x); @y = &internal($y);
    $srem = $y[$[];
    $sr = (shift @x ne shift @y) ? '-' : '+';
    $car = $bar = $prd = 0;
    if (($dd = int(1e5/($y[$#y]+1))) != 1) {
	for $x (@x) {
	    $x = $x * $dd + $car;
	    $x -= ($car = int($x * 1e-5)) * 1e5;
	}
	push(@x, $car); $car = 0;
	for $y (@y) {
	    $y = $y * $dd + $car;
	    $y -= ($car = int($y * 1e-5)) * 1e5;
	}
    }
    else {
	push(@x, 0);
    }
    @q = (); ($v2,$v1) = @y[-2,-1];
    while ($#x > $#y) {
	($u2,$u1,$u0) = @x[-3..-1];
	$q = (($u0 == $v1) ? 99999 : int(($u0*1e5+$u1)/$v1));
	--$q while ($v2*$q > ($u0*1e5+$u1-$q*$v1)*1e5+$u2);
	if ($q) {
	    ($car, $bar) = (0,0);
	    for ($y = $[, $x = $#x-$#y+$[-1; $y <= $#y; ++$y,++$x) {
		$prd = $q * $y[$y] + $car;
		$prd -= ($car = int($prd * 1e-5)) * 1e5;
		$x[$x] += 1e5 if ($bar = (($x[$x] -= $prd + $bar) < 0));
	    }
	    if ($x[$#x] < $car + $bar) {
		$car = 0; --$q;
		for ($y = $[, $x = $#x-$#y+$[-1; $y <= $#y; ++$y,++$x) {
		    $x[$x] -= 1e5
			if ($car = (($x[$x] += $y[$y] + $car) > 1e5));
		}
	    }   
	}
	pop(@x); unshift(@q, $q);
    }
    if (wantarray) {
	@d = ();
	if ($dd != 1) {
	    $car = 0;
	    for $x (reverse @x) {
		$prd = $car * 1e5 + $x;
		$car = $prd - ($tmp = int($prd / $dd)) * $dd;
		unshift(@d, $tmp);
	    }
	}
	else {
	    @d = @x;
	}
	(&external($sr, @q), &external($srem, @d, $zero));
    } else {
	&external($sr, @q);
    }
}

# compute power of two numbers -- stolen from Knuth Vol 2 pg 233
sub bpow { #(num_str, num_str) return num_str
    local(*x, *y); ($x, $y) = (&bnorm($_[$[]), &bnorm($_[$[+1]));
    if ($x eq 'NaN') {
	'NaN';
    } elsif ($y eq 'NaN') {
	'NaN';
    } elsif ($x eq '+1') {
	'+1';
    } elsif ($x eq '-1') {
	&bmod($x,2) ? '-1': '+1';
    } elsif ($y =~ /^-/) {
	'NaN';
    } elsif ($x eq '+0' && $y eq '+0') {
	'NaN';
    } else {
	@x = &internal($x);
	local(@pow2)=@x;
	local(@pow)=&internal("+1");
	local($y1,$res,@tmp1,@tmp2)=(1); # need tmp to send to mul
	while ($y ne '+0') {
	  ($y,$res)=&bdiv($y,2);
	  if ($res ne '+0') {@tmp=@pow2; @pow=&mul(*pow,*tmp);}
	  if ($y ne '+0') {@tmp=@pow2;@pow2=&mul(*pow2,*tmp);}
	}
	&external(@pow);
    }
}

1;
