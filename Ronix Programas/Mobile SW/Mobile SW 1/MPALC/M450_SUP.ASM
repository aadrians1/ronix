LIST P=16C84	;for mobira (cityman 450) nnnnnnn,M,48,M,off,on,49#
;
COMWRIN		EQU 	B'10101100'	;block 6
COMRDIN		EQU	B'10101101'	;-\\-
ADDRIN		EQU	B'00000000'

COMWROUT	EQU	B'10101100'	;block 6
ADDRi1		EQU	B'00010000'	;10h
ADDRi2		EQU	B'00010001'
ADDRi3		EQU	B'00010010'
ADDRi4		EQU	B'00010011'

ADDR1		EQU	B'10101101'	;ABh
ADDR2		EQU	B'10101110'
ADDR3		EQU	B'10101111'
ADDR4		EQU	B'10110000'

STATUS		EQU	03h
PORTB		EQU	06h
TRISB		EQU	06h

WRB		EQU	0Ch
REB		EQU	0Dh
CNTCIKL		EQU	0Eh
TIME		EQU	0Fh
TIME2		EQU	10H

DATA1		EQU	11h
DATA2		EQU	12h
DATA3		EQU	13h
DATA4		EQU	14h
;
	ORG	0
	CLRF	PORTB
	CALL	CLDRESE
	CALL	TMLONG

	CALL	START
	MOVLW	COMWRIN
	MOVWF	WRB
	CALL	OUTI2C
	MOVLW	ADDRIN
	MOVWF	WRB
	CALL	OUTI2C
	CALL	START
	MOVLW	COMRDIN
	MOVWF	WRB
	CALL	OUTI2C
	CALL	INI2C
	MOVF	REB,0
	MOVWF	DATA1
	CALL	INI2C
	MOVF	REB,0
	MOVWF	DATA2
	CALL	INI2C
	MOVF	REB,0
	MOVWF	DATA3
	CALL	INI2C
	MOVF	REB,0
	MOVWF	DATA4
	CALL	STOP
	
	CALL 	TMM

	CALL	START	
	MOVLW	COMWROUT		
	MOVWF	WRB
	CALL	OUTI2C
	MOVLW	ADDR1
	MOVWF	WRB
	CALL	OUTI2C
	MOVF	DATA1,0
	MOVWF	WRB
	CALL	OUTI2C
	CALL	STOP

	CALL	TMM

	CALL	START
	MOVLW	COMWROUT		
	MOVWF	WRB
	CALL	OUTI2C
	MOVLW	ADDR2
	MOVWF	WRB
	CALL	OUTI2C
	MOVF	DATA2,0
	MOVWF	WRB
	CALL	OUTI2C
	CALL	STOP

	CALL	TMM

	CALL	START
	MOVLW	COMWROUT		
	MOVWF	WRB
	CALL	OUTI2C
	MOVLW	ADDR3
	MOVWF	WRB
	CALL	OUTI2C
	MOVF	DATA3,0
	MOVWF	WRB
	CALL	OUTI2C
	CALL	STOP
	
	CALL	TMM

	CALL	START
	MOVLW	COMWROUT		
	MOVWF	WRB
	CALL	OUTI2C
	MOVLW	ADDR4
	MOVWF	WRB
	CALL	OUTI2C
	MOVF	DATA4,0
	MOVWF	WRB
	CALL	OUTI2C
	CALL	STOP
;
	CALL	TMM

	CALL	START
	MOVLW	COMWROUT		
	MOVWF	WRB
	CALL	OUTI2C
	MOVLW	ADDRi1
	MOVWF	WRB
	CALL	OUTI2C
	MOVF	DATA1,0
	MOVWF	WRB
	CALL	OUTI2C
	CALL	STOP

	CALL	TMM

	CALL	START
	MOVLW	COMWROUT		
	MOVWF	WRB
	CALL	OUTI2C
	MOVLW	ADDRi2
	MOVWF	WRB
	CALL	OUTI2C
	MOVF	DATA2,0
	MOVWF	WRB
	CALL	OUTI2C
	CALL	STOP

	CALL	TMM

	CALL	START
	MOVLW	COMWROUT		
	MOVWF	WRB
	CALL	OUTI2C
	MOVLW	ADDRi3
	MOVWF	WRB
	CALL	OUTI2C
	MOVF	DATA3,0
	MOVWF	WRB
	CALL	OUTI2C
	CALL	STOP
	
	CALL	TMM

	CALL	START
	MOVLW	COMWROUT		
	MOVWF	WRB
	CALL	OUTI2C
	MOVLW	ADDRi4
	MOVWF	WRB
	CALL	OUTI2C
	MOVF	DATA4,0
	MOVWF	WRB
	CALL	OUTI2C
	CALL	STOP
	
	CALL 	TMM

	CALL	START
	MOVLW	COMWROUT		
	MOVWF	WRB
	CALL	OUTI2C
	MOVLW	ADDR1
	MOVWF	WRB
	CALL	OUTI2C
	MOVF	DATA1,0
	MOVWF	WRB
	CALL	OUTI2C
	CALL	STOP
	CALL	TMLONG
	CALL	SETRESE
	
	GOTO	$

;--------------------------------------------------------------MAIN

OUTI2C	MOVLW	8
	MOVWF	CNTCIKL
CONOUT	BTFSC	WRB,7
	CALL	SETDAT
	CALL	TM
	CALL	SETSTR
	CALL	TM	
	CALL	CLDSTR
	CALL	TM
	CALL	CLDDAT
	RLF	WRB,1
	DECFSZ	CNTCIKL,1
	GOTO	CONOUT
	
	CALL	SETDAT
	CALL	TM
	CALL	SETSTR
	CALL	TM	
	CALL	CLDSTR
	CALL	TM
	CALL	CLDDAT
	CALL	TM
	RETURN
;--------OUT-------------------------------------------------OUT----------
INI2C	CLRF	REB
	MOVLW	8
	MOVWF	CNTCIKL
	CALL	SETDAT
	CALL	TM
	
CONIN	RLF	REB,1
	CALL	SETSTR
	CALL	TM
	BTFSC	PORTB,0
	BSF	REB,0		;WRITE LOW BIT TO REB
	CALL	CLDSTR
	CALL	TM
	DECFSZ	CNTCIKL,1
	GOTO	CONIN
	CALL	CLDDAT
	CALL	TM
	CALL	SETSTR	
	CALL	TM
	CALL	CLDSTR
	CALL	TM
	RETURN
;----------------IN------------------------------------------------IN-------
SETSTR	MOVLW	32
	MOVWF	STATUS
	BSF	TRISB,1
	MOVLW	0
	MOVWF	STATUS
	RETURN

CLDSTR	MOVLW	32
	MOVWF	STATUS
	BCF	TRISB,1
	MOVLW	0
	MOVWF	STATUS
	RETURN

SETDAT	MOVLW	32
	MOVWF	STATUS
	BSF	TRISB,0
	MOVLW	0
	MOVWF	STATUS
	RETURN

CLDDAT	MOVLW	32
	MOVWF	STATUS
	BCF	TRISB,0
	MOVLW	0
	MOVWF	STATUS
	RETURN

SETRESE	MOVLW	32
	MOVWF	STATUS
	BSF	TRISB,3
	MOVLW	0
	MOVWF	STATUS
	RETURN

CLDRESE	MOVLW	32
	MOVWF	STATUS
	BCF	TRISB,3
	MOVLW	0
	MOVWF	STATUS
	RETURN
;-----------------PORT-------------------------------------------------------
;BEGIN	CALL	CLDRESE
;	CALL	TMLONG
;	CALL	TMLONG
;	CALL	TMLONG
;	CALL	TMLONG
;	CALL	TMLONG
;	CALL	TMLONG
;	CALL	TMLONG
;	CALL	TMLONG
;	CALL	TMLONG
;BEGI	CALL	TMLONG
;	MOVLW	0FFh
;	MOVWF	CNTCIKL
;CONBEG	CALL	TMM
;	CALL	TMM
;	CALL	TMM
;	CALL	TMM
;
;	BTFSC	PORTB,2
;	GOTO	BEGI
;	DECFSZ	CNTCIKL,1
;	GOTO	CONBEG
;	CALL	TMLONG
;	CALL 	TMLONG
;	CALL	TMLONG
;	RETURN
;-------------------BEGIN----------------------------------------------------
START	CALL	SETDAT
	CALL	TM
	CALL	SETSTR
	CALL	TM
	CALL	CLDDAT
	CALL	TM
	CALL	CLDSTR
	CALL	TM
	RETURN
;-------------------START---------------------------------------------------
STOP	CALL	SETSTR
	CALL	TM
	CALL	SETDAT
	CALL	TM
	RETURN
;---------------------STOP---------------------------------------------------	
TM	MOVLW	0AFh
	MOVWF	TIME
LL3	DECFSZ	TIME,1
	GOTO	LL3
	RETURN
;----------------------
TMM	MOVLW	0FFh
	MOVWF	TIME
LL3D	DECFSZ	TIME,1
	GOTO	LL3D
	RETURN

;----------------------TM----------------------------------------------------


TMLONG	MOVLW	0FFH
	MOVWF	TIME
LL1	MOVLW	0FFH
	MOVWF	TIME2
LL2	DECFSZ	TIME2,1
	GOTO	LL2	

	DECFSZ	TIME,1
	GOTO	LL1
	RETURN	
;----------------------TMLONG-----------------------------------------------
end
;          
