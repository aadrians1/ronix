?8TXT2COM Conversion utility. Vers 1.1
Copyright 1987 by Keith P. Graham
This file cannot be distributed for SALE without
express written permission from Keith P. Graham
238 Germonds Road, W. Nyack, NY 10994, (914) 623-4161
To view the contents of this file
enter the name of the file from the DOS prompt.
?s  ?>~u?6??H?M?????'???? ?P ?w?ֲ QR??  ??<tE<
tA<~u)?<~t#?<0|?<f?<9~?<A|?<F~?<a|???ˬ?	? ? ???ZY?????ZYÃ.u?>u }	?u  ???u??d??u?>u?|??u????u  ?s  ???u  ?{- ?s??:?? ?s?? ?-??>s t?.s?? ???>s u???.s?@?s???>}?1?w ??????{= ???- 9s|????s???s?????>}?1?w ????????? "^4??? ? ??  ????	?!?n?
?!?>o?z??o? Ƈp ??p? <?  ?!s?p??=?!s?Q??ش@?y??!?>?!?<??>s }?s  á{= ~- 9s~?s???s  ù ?s?w QC9{Y?KS???>}?1?>u t?u?<t	<
t?????[CY?w??ô ??č>?
 ???u???
?ً?K??ô? ? ?O?>???  ??  ??6#?P ?  Q??	? ? ???մ?  ?EY??ù
 ?s@?  ????0???  ????0???  ????0???  ????0???  ?
 ?u@?  ????0??  ????0? ?  ????0???  ? ??  ??6??P ? Q??	? ? ???մ?  ?EY??ô?? ?O?>??ô?? ?O?>??À<0|[?<fV?<9~?<A|L?<F~?<a|B?|0|<?|f6?|9~?|A|*?|F~?|a|?<9~,$????ج<9~,$؈??  If you want to write to a file enter the file name.
  If you want to print the file enter LPT1 or LPT2

  ENTER: $@                                                                   Esc=Quit, T=write text, Keys=,,,,PgUp,PgDn,Home,End   Line=0000  Column=000                      KMGOIQPH                                                                                       E	> ?README.TXT                                                       12-20-96 CDC

For SatPro 430 Toshiba Access Panel (TAP)
=====================================================

This archive contains the following files.  These files must all be
present in the default directory in order to proceed.

README.TXT      This file
README.COM      Self-reading version of this file
430TAP1.PRG     Disk 1 image of 430 TAP (in DiskXpress format)
430TAP2.PRG     Disk 2 image of 430 TAP (in DiskXpress format)
430TAP3.PRG     Disk 3 image of 430 TAP User Guide (in DiskXpress format)
430TAP4.PRG     Disk 4 image of 430 TAP User Guide (in DiskXpress format)
MAKEDISK.BAT    Batch file for making installation disk


======================================================
INSTALLATION

Please use the MAKEDISK.BAT file to make the installation diskettes.  You
can execute MAKEDISK.BAT from the command prompt or by double-clicking 
MAKEDISK.BAT in Win95 Explorer.

The diskette image format requires that you have 4 formatted 1.44MB high
density diskettes ready.  The batch file will inform you of this as well.

MAKEDISK.BAT expects to find the diskette image files, 430TAP1.PRG,
430TAP2.PRG, 430TAP3.PRG, and 430TAP4.PRG in the current default directory
(usually the same directory as MAKEDISK.BAT).

Once you have made the installation diskettes, run the SETUP program on the
diskette by one of the following methods:

Windows 95

        From Win95 Explorer, explore A: drive
        Double-click SETUP.EXE

or

        Click on the Start button
        Click on Run
        Enter A:\SETUP in the command field, then click "OK"


=====================================================
Additional Information

MAKEDISK.BAT follows the following procedure, and can be edited to suit your 
specific needs.  Most users will have no need to modify it.

  o  The user is informed of the formatted diskette requirement
  o  User either aborts with Ctrl-C or presses a key to continue
  o  Checks for the existence of the 430TAP?.PRG files, and continues
     if found.  Execution is aborted with a message if the file is not found
  o  Renames 430TAP?.PRG to 430TAP?.EXE
  o  Extracts disk images to diskettes in A:
  o  If extraction was successful, a message is displayed.  If not,
     the program aborts with a message.

???24y??? 	@	?	?	
O
Q
S
?
?
?
?
/PR???.z???#%13b??????<TV???%g??%S???