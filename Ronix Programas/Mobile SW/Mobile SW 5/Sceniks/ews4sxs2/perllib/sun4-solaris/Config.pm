package Config;
require Exporter;
@ISA = (Exporter);
@EXPORT = qw(%Config);

$] == 5.001 or die sprintf
    "Perl lib version (5.001) doesn't match executable version (%.3f)\n", $];

# This file was created by configpm when Perl was built. Any changes
# made to this file will be lost the next time perl is built.

##
## This file was produced by running the Configure script. It holds all the
## definitions figured out by Configure. Should you modify one of these values,
## do not forget to propagate your changes by running "Configure -der". You may
## instead choose to run each of the .SH files by yourself, or "Configure -S".
##
#
## Configuration time: Wed Apr  5 04:43:58 PDT 1995
## Configured by: picklock
## Target system: sunos rodan 5.4 generic sun4m sparc 
#

$config_sh=<<'!END!OF!CONFIG!';
archlib='/usr/local/lib/perl5/sun4-solaris'
ccflags=''
cppflags=''
dynamic_ext='Fcntl NDBM_File POSIX SDBM_File Socket'
extensions='Fcntl NDBM_File POSIX SDBM_File Socket'
intsize='4'
libpth='/lib /usr/lib /usr/ccs/lib /usr/local/lib'
osname='solaris'
osvers='2.4'
sharpbang='#!'
shsharp='true'
sig_name='ZERO HUP INT QUIT ILL TRAP ABRT EMT FPE KILL BUS SEGV SYS PIPE ALRM TERM USR1 USR2 CHLD PWR WINCH URG POLL STOP TSTP CONT TTIN TTOU VTALRM PROF XCPU XFSZ WAITING LWP FREEZE THAW'
so='so'
startsh='#!/bin/sh'
static_ext=''
Author=''
CONFIG='true'
Date='$Date'
Header=''
Id='$Id'
Locker=''
Log='$Log'
Mcc='Mcc'
PATCHLEVEL='1'
RCSfile='$RCSfile'
Revision='$Revision'
Source=''
State=''
afs='false'
alignbytes='8'
aphostname=''
archlibexp='/usr/local/lib/perl5/sun4-solaris'
archname='sun4-solaris'
awk='awk'
baserev='5.0'
bash=''
bin='/usr/local/bin'
binexp='/usr/local/bin'
bison=''
byacc='byacc'
byteorder='4321'
c='\c'
castflags='0'
cat='cat'
cc='gcc'
cccdlflags='-fpic'
ccdlflags=''
cf_by='picklock'
cf_time='Wed Apr  5 04:43:58 PDT 1995'
chgrp=''
chmod=''
chown=''
clocktype='clock_t'
comm='comm'
compress=''
contains='grep'
cp='cp'
cpio=''
cpp='cpp'
cpp_stuff='42'
cpplast='-'
cppminus='-'
cpprun='gcc -E'
cppstdin='gcc -E'
cryptlib=''
csh='csh'
d_Gconvert='gconvert((x),(n),(t),(b))'
d_access='define'
d_alarm='define'
d_archlib='define'
d_attribut='define'
d_bcmp='undef'
d_bcopy='undef'
d_bsd='undef'
d_bsdpgrp='undef'
d_byacc='undef'
d_bzero='undef'
d_casti32='define'
d_castneg='define'
d_charvspr='undef'
d_chown='define'
d_chroot='define'
d_chsize='undef'
d_closedir='define'
d_const='define'
d_crypt='define'
d_csh='define'
d_cuserid='define'
d_dbl_dig='define'
d_difftime='define'
d_dirnamlen='undef'
d_dlerror='define'
d_dlopen='define'
d_dlsymun='undef'
d_dosuid='undef'
d_drem='undef'
d_dup2='define'
d_eunice='undef'
d_fchmod='define'
d_fchown='define'
d_fcntl='define'
d_fd_macros='define'
d_fd_set='define'
d_fds_bits='define'
d_fgetpos='define'
d_flexfnam='define'
d_flock='undef'
d_fmod='define'
d_fork='define'
d_fpathconf='define'
d_fsetpos='define'
d_getgrps='define'
d_gethent='define'
d_gethname='undef'
d_getlogin='define'
d_getpgrp2='undef'
d_getpgrp='define'
d_getppid='define'
d_getprior='undef'
d_htonl='define'
d_index='undef'
d_isascii='define'
d_killpg='undef'
d_link='define'
d_linuxstd='undef'
d_locconv='define'
d_lockf='define'
d_lstat='define'
d_mblen='define'
d_mbstowcs='define'
d_mbtowc='define'
d_memcmp='define'
d_memcpy='define'
d_memmove='define'
d_memset='define'
d_mkdir='define'
d_mkfifo='define'
d_mktime='define'
d_msg='define'
d_msgctl='define'
d_msgget='define'
d_msgrcv='define'
d_msgsnd='define'
d_mymalloc='define'
d_nice='define'
d_oldsock='undef'
d_open3='define'
d_pathconf='define'
d_pause='define'
d_phostname='undef'
d_pipe='define'
d_portable='define'
d_pwage='define'
d_pwchange='undef'
d_pwclass='undef'
d_pwcomment='define'
d_pwexpire='undef'
d_pwquota='undef'
d_readdir='define'
d_readlink='define'
d_rename='define'
d_rewinddir='define'
d_rmdir='define'
d_safebcpy='undef'
d_safemcpy='undef'
d_seekdir='define'
d_select='define'
d_sem='define'
d_semctl='define'
d_semget='define'
d_semop='define'
d_setegid='define'
d_seteuid='define'
d_setlinebuf='undef'
d_setlocale='define'
d_setpgid='define'
d_setpgrp2='undef'
d_setpgrp='define'
d_setprior='undef'
d_setregid='undef'
d_setresgid='undef'
d_setresuid='undef'
d_setreuid='undef'
d_setrgid='undef'
d_setruid='undef'
d_setsid='define'
d_shm='define'
d_shmat='define'
d_shmatprototype='define'
d_shmctl='define'
d_shmdt='define'
d_shmget='define'
d_shrplib='undef'
d_socket='define'
d_sockpair='define'
d_statblks='define'
d_stdstdio='define'
d_strchr='define'
d_strcoll='define'
d_strctcpy='define'
d_strerrm='strerror(e)'
d_strerror='define'
d_strxfrm='define'
d_suidsafe='define'
d_symlink='define'
d_syscall='define'
d_sysconf='define'
d_sysernlst=''
d_syserrlst='define'
d_system='define'
d_tcgetpgrp='define'
d_tcsetpgrp='define'
d_telldir='define'
d_time='define'
d_times='define'
d_truncate='define'
d_tzname='define'
d_umask='define'
d_uname='define'
d_vfork='undef'
d_void_closedir='undef'
d_voidsig='define'
d_voidtty=''
d_volatile='define'
d_vprintf='define'
d_wait4='undef'
d_waitpid='define'
d_wcstombs='define'
d_wctomb='define'
d_xenix='undef'
date='date'
db_hashtype='int'
db_prefixtype='int'
defvoidused='15'
direntrytype='struct dirent'
dlext='so'
dlsrc='dl_dlopen.xs'
echo='echo'
egrep='egrep'
emacs=''
eunicefix=':'
expr='expr'
find='find'
flex=''
fpostype='fpos_t'
freetype='void'
full_csh='/usr/bin/csh'
full_sed='/usr/bin/sed'
gcc=''
gccversion='2.6.3'
gidtype='gid_t'
glibpth='/usr/shlib /lib/pa1.1 /usr/lib/large /lib /usr/lib /usr/lib/386 /lib/386 /lib/large /usr/lib/small /lib/small /usr/ccs/lib /usr/local/lib'
grep='grep'
groupcat=''
groupstype='gid_t'
h_fcntl='true'
h_sysfile='false'
hint='recommended'
hostcat=''
huge=''
i_bsdioctl=''
i_db='undef'
i_dbm='undef'
i_dirent='define'
i_dld='undef'
i_dlfcn='define'
i_fcntl='define'
i_float='define'
i_gdbm='undef'
i_grp='define'
i_limits='define'
i_malloc='define'
i_math='define'
i_memory='undef'
i_ndbm='define'
i_neterrno='undef'
i_niin='define'
i_pwd='define'
i_sgtty='undef'
i_stdarg='define'
i_stddef='define'
i_stdlib='define'
i_string='define'
i_sysdir='undef'
i_sysfile='undef'
i_sysfilio='define'
i_sysin='undef'
i_sysioctl='define'
i_sysndir='undef'
i_sysparam='define'
i_sysselct='define'
i_syssockio=''
i_sysstat='define'
i_systime='define'
i_systimek='undef'
i_systimes='define'
i_systypes='define'
i_termio='undef'
i_termios='define'
i_time='undef'
i_unistd='define'
i_utime='define'
i_varargs='undef'
i_varhdr='stdarg.h'
i_vfork='undef'
incpath=''
inews=''
installarchlib='/usr/local/lib/perl5/sun4-solaris'
installbin='/usr/local/bin'
installmansrc='/usr/local/man/man1'
installprivlib='/usr/local/lib/perl5'
installscript='/usr/local/bin'
known_extensions='DB_File Fcntl GDBM_File NDBM_File ODBM_File POSIX SDBM_File Socket'
ksh=''
large=''
lddlflags='-G'
ldflags=''
less=''
libc='/usr/lib/libc.so'
libs='-lsocket -lnsl -ldl -lm -lc -lcrypt'
libswanted='net socket inet nsl nm ndbm gdbm dbm db dl dld sun m c cposix posix ndir dir crypt bsd BSD PW x'
line='line'
lint=''
lkflags=''
ln='ln'
lns='/usr/bin/ln -s'
lp=''
lpr=''
ls='ls'
lseektype='off_t'
mail=''
mailx=''
make=''
mallocobj='malloc.o'
mallocsrc='malloc.c'
malloctype='void *'
manext='1'
mansrc='/usr/local/man/man1'
mansrcexp='/usr/local/man/man1'
medium=''
mips=''
mips_type=''
mkdir='mkdir'
models='none'
modetype='mode_t'
more=''
mv=''
myarchname='sun4-solaris'
mydomain=''
myhostname='rodan'
myuname='sunos rodan 5.4 generic sun4m sparc '
n=''
nm_opt='-p'
nroff='nroff'
optimize='-O'
orderlib='false'
package='perl5'
passcat=''
patchlevel='1'
perl='perl'
pg=''
phostname='hostname'
plibpth=''
pmake=''
pr=''
prefix='/usr/local'
prefixexp='/usr/local'
privlib='/usr/local/lib/perl5'
privlibexp='/usr/local/lib/perl5'
prototype='define'
randbits='15'
ranlib=':'
rm='rm'
rmail=''
runnm='true'
scriptdir='/usr/local/bin'
scriptdirexp='/usr/local/bin'
sed='sed'
selecttype='fd_set *'
sendmail=''
sh=''
shar=''
shmattype='void *'
shrpdir='none'
signal_t='void'
sizetype='size_t'
sleep=''
smail=''
small=''
sockethdr=''
socketlib=''
sort='sort'
spackage='Perl5'
spitshell='cat'
split=''
ssizetype='ssize_t'
stdchar='unsigned char'
strings='/usr/include/string.h'
submit=''
sysman='/usr/man/man1'
tail=''
tar=''
tbl=''
test='test'
timeincl='/usr/include/sys/time.h '
timetype='time_t'
touch='touch'
tr='tr'
troff=''
uidtype='uid_t'
uname='uname'
uniq='uniq'
usedl='define'
usemymalloc='y'
usenm='true'
useposix='true'
usevfork='false'
usrinc='/usr/include'
uuname=''
vi=''
voidflags='15'
xlibpth='/usr/lib/386 /lib/386'
zcat=''
!END!OF!CONFIG!


tie %Config, Config;
sub TIEHASH { bless {} }
sub FETCH { 
    # check for cached value (which maybe undef so we use exists not defined)
    return $_[0]->{$_[1]} if (exists $_[0]->{$_[1]});
 
    my($value); # search for the item in the big $config_sh string
    return undef unless (($value) = $config_sh =~ m/^$_[1]='(.*)'\s*$/m);
 
    $value = undef if $value eq 'undef'; # So we can say "if $Config{'foo'}".
    $_[0]->{$_[1]} = $value; # cache it
    return $value;
}
 
sub FIRSTKEY {
    $prevpos = 0;
    my $key;
    ($key) = $config_sh =~ m/^(.*)=/;
    $key;
}

sub NEXTKEY {
    my ($pos, $len);
    $pos = $prevpos;
    $pos = index( $config_sh, "\n", $pos) + 1;
    $prevpos = $pos;
    $len = index( $config_sh, "=", $pos) - $pos;
    $len > 0 ? substr( $config_sh, $pos, $len) : undef;
}

sub EXISTS{ 
     exists($_[0]->{$_[1]})  or  $config_sh =~ m/^$_[1]=/m; 
}

sub readonly { die "\%Config::Config is read-only\n" }

sub myconfig {
	my($output);
	
	$output = <<'END';
Summary of my $package (patchlevel $PATCHLEVEL) configuration:
  Platform:
    osname=$osname, osver=$osvers, archname=$archname
    uname='$myuname'
    hint=$hint
  Compiler:
    cc='$cc', optimize='$optimize'
    cppflags='$cppflags'
    ccflags ='$ccflags'
    ldflags ='$ldflags'
    stdchar='$stdchar', d_stdstdio=$d_stdstdio, usevfork=$usevfork
    voidflags=$voidflags, castflags=$castflags, d_casti32=$d_casti32, d_castneg=$d_castneg
    intsize=$intsize, alignbytes=$alignbytes, usemymalloc=$usemymalloc, randbits=$randbits
  Libraries:
    so=$so
    libpth=$libpth
    libs=$libs
    libc=$libc
  Dynamic Linking:
    dlsrc=$dlsrc, dlext=$dlext, d_dlsymun=$d_dlsymun
    cccdlflags='$cccdlflags', ccdlflags='$ccdlflags', lddlflags='$lddlflags'

END
	$output =~ s/\$(\w+)/$Config{$1}/ge;
	$output;
}

sub STORE { &readonly }
sub DELETE{ &readonly }
sub CLEAR { &readonly }


1;
