?`SETUP Version 5.31  
Copyright 1986-1991, The Periscope Company, Inc.  All rights reserved.
$??r ??????0?!??<rn?t??!?p ??r^?? ?j?v?Bs??= tG???B?M?!?
?t??t??t5?+
?t<2t#??<r<v????????G???? L?!R?8Z?/?L?!?, 3??
?u??
?u?FF?ά
?u?N??;?r	<\t<:u?FF???+?.?>x??3???6x?>v???:t
NN??!A?:??Њ<\t??@?\?V???G?!^2??t
??????E?\?O??
?u?O???	 ???v3ɴN?!þ? ?'???]???6x???x ?
?!?| t?Z?lFF?< t?<?u?Q?>? u?"?<u?>? t?????>z<ar<zw4 ??:u	<\tP?\?X?બ< w???:u??? ??O?e???\u?}?:tO?>~2???z?9?!?;?!s	???? ?U?O??? ???z3ɴN?!r3?z? =?!r(??|??? ???!?>?!?D
=1t???? ??!<u??6z???:u	?Ѐ?A??!???	 ?' ??? ? ??r ?z?>~?$?d ? ?Z?[ Ë>~W???z?A?!_2???.?&?.????? K?!.??.?&?Ë|???????????J?!?, ???ȣ?????ô	?!?PSQ???!P$?? ?!3????l???C?3?B? ??B?a??? ? ?a? ???aX?!?Y[X?&?? &;t?ü?
<?<?        ?  \   l     -o PERI.PGM \PS.COM C:\PERI \PS1.COM \PSHELP.TXT CONFIG.COM DOS 3.00 or later required.
$Error 240 - File PERI.PGM not found.  Please put the Periscope diskette
into drive A and type 'A:SETUP'.
$
Install Periscope into which directory [C:\PERI\]: $
Error 241 - Invalid drive or directory specified.  Please try again.
$
Another version of Periscope is installed in that directory.  To backup
that directory, press Ctrl-Break, back it up, and restart SETUP later.
To replace the existing copy of Periscope, press Enter.
$Error 242 - Not enough memory
$Error 243 - Unexpected error during self-extract program
$Error 244 - Disk error
$
Please add the following to AUTOEXEC.BAT: set PS=$
This program is used to install Periscope on your computer.  To use, place
the Periscope diskette into drive A and type 'A:SETUP'.

You can specify where to install Periscope by typing 'A:SETUP [path]'.  If
you do not specify where to install Periscope, SETUP will prompt you for a
target directory.

SETUP does not modify AUTOEXEC.BAT or CONFIG.SYS.
$?