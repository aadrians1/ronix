LIST P=16C84		;load\save with reset for N-450 THF-7	(SIS)

DT1		EQU	0h
DT2		EQU	0h
DT3		EQU	0h
DT4		EQU	0h
DT5		EQU	0h
DT6		EQU	0h
DT7		EQU	0h
DT8		EQU	0h
DT9		EQU	0h
DTA		EQU	0h
DTB		EQU	0h
DTC		EQU	0h

COMWRIN		EQU 	B'10100000'
COMRDIN		EQU	B'10100001'
COMWROUT	EQU	B'10100000'

ADRIN1		EQU	0Dh
ADRIN0		EQU	0A2h

ADDR1H		EQU	11h
ADDR1L		EQU	88h
ADDR2H		EQU	11h
ADDR2L		EQU	89h
ADDR3H		EQU	11h
ADDR3L		EQU	8Ah
ADDR4H		EQU	11h
ADDR4L		EQU	8Bh
ADDR5H		EQU	11h
ADDR5L		EQU	8Ch
ADDR6H		EQU	11h
ADDR6L		EQU	8Dh
ADDR7H		EQU	11h
ADDR7L		EQU	8Eh
ADDR8H		EQU	11h
ADDR8L		EQU	8Fh
ADDR9H		EQU	11h
ADDR9L		EQU	90h
ADDRAH		EQU	11h
ADDRAL		EQU	91h
ADDRBH		EQU	11h
ADDRBL		EQU	92h
ADDRCH		EQU	11h
ADDRCL		EQU	93h

ADRN1H		EQU	0Fh
ADRN1L		EQU	90h
ADRN2H		EQU	0Fh
ADRN2L		EQU	91h
ADRN3H		EQU	0Fh
ADRN3L		EQU	92h
ADRN4H		EQU	0Fh
ADRN4L		EQU	93h
ADRN5H		EQU	0Fh
ADRN5L		EQU	94h
ADRN6H		EQU	0Fh
ADRN6L		EQU	95h

STATUS		EQU	03h
PORTB		EQU	06h
TRISB		EQU	06h

WRB		EQU	0Ch
REB		EQU	0Dh
CNTCIKL		EQU	0Eh
TIME		EQU	0Fh
TIME2		EQU	10h

DATA1		EQU	11h
DATA2		EQU	12h
DATA3		EQU	13h
DATA4		EQU	14h
DATA5		EQU	15h
DATA6		EQU	16h
TMPD		EQU	17h

	ORG	0
	CLRF	PORTB
	CALL	CLDRESE
	CALL	TM5
	CALL	TM5
	CALL	START
	MOVLW	COMWRIN
	MOVWF	WRB
	CALL	OUTI2C
	MOVLW	ADRIN1
	MOVWF	WRB
	CALL	OUTI2C
	MOVLW	ADRIN0
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
	CALL	INI2C
	MOVF	REB,0
	MOVWF	DATA6
	CALL	STOP
	CALL	TM5

	MOVFW	DATA4
	ANDLW	0Fh
	MOVWF	DATA5
	MOVFW	DATA4
	ANDLW	0F0h
	MOVWF	DATA4

	CALL	TM5
	CALL	START
	MOVLW	COMWROUT		
	MOVWF	WRB
	CALL	OUTI2C
	MOVLW	ADDR2H
	MOVWF	WRB
	CALL	OUTI2C
	MOVLW	ADDR2L
	MOVWF	WRB
	CALL	OUTI2C
	SWAPF	DATA1,0
	ADDLW	DT2
	ANDLW	0Fh
	MOVWF	WRB
	CALL	OUTI2C
	CALL	STOP
	CALL	TM5

	CALL	START
	MOVLW	COMWROUT		
	MOVWF	WRB
	CALL	OUTI2C
	MOVLW	ADDR1H
	MOVWF	WRB
	CALL	OUTI2C
	MOVLW	ADDR1L
	MOVWF	WRB
	CALL	OUTI2C
	MOVFW	DATA1
	ADDLW	DT1
	ANDLW	0Fh
	MOVWF	WRB
	CALL	OUTI2C
	CALL	STOP
	CALL	TM5

	CALL	START
	MOVLW	COMWROUT		
	MOVWF	WRB
	CALL	OUTI2C
	MOVLW	ADDR4H
	MOVWF	WRB
	CALL	OUTI2C
	MOVLW	ADDR4L
	MOVWF	WRB
	CALL	OUTI2C
	SWAPF	DATA2,0
	ADDLW	DT4
	ANDLW	0Fh
	MOVWF	WRB
	CALL	OUTI2C
	CALL	STOP
	CALL	TM5

	CALL	START
	MOVLW	COMWROUT		
	MOVWF	WRB
	CALL	OUTI2C
	MOVLW	ADDR3H
	MOVWF	WRB
	CALL	OUTI2C
	MOVLW	ADDR3L
	MOVWF	WRB
	CALL	OUTI2C
	MOVFW	DATA2
	ADDLW	DT3
	ANDLW	0Fh
	MOVWF	WRB
	CALL	OUTI2C
	CALL	STOP
	CALL	TM5

	CALL	START
	MOVLW	COMWROUT		
	MOVWF	WRB
	CALL	OUTI2C
	MOVLW	ADDR6H
	MOVWF	WRB
	CALL	OUTI2C
	MOVLW	ADDR6L
	MOVWF	WRB
	CALL	OUTI2C
	SWAPF	DATA3,0
	ADDLW	DT6
	ANDLW	0Fh
	MOVWF	WRB
	CALL	OUTI2C
	CALL	STOP
	CALL	TM5

	CALL	START
	MOVLW	COMWROUT		
	MOVWF	WRB
	CALL	OUTI2C
	MOVLW	ADDR5H
	MOVWF	WRB
	CALL	OUTI2C
	MOVLW	ADDR5L
	MOVWF	WRB
	CALL	OUTI2C
	MOVFW	DATA3
	ADDLW	DT5
	ANDLW	0Fh
	MOVWF	WRB
	CALL	OUTI2C
	CALL	STOP
	CALL	TM5

	CALL	START
	MOVLW	COMWROUT		
	MOVWF	WRB
	CALL	OUTI2C
	MOVLW	ADDR8H
	MOVWF	WRB
	CALL	OUTI2C
	MOVLW	ADDR8L
	MOVWF	WRB
	CALL	OUTI2C
	SWAPF	DATA4,0
	ADDLW	DT8
	ANDLW	0Fh
	MOVWF	WRB
	CALL	OUTI2C
	CALL	STOP
	CALL	TM5

	CALL	START
	MOVLW	COMWROUT		
	MOVWF	WRB
	CALL	OUTI2C
	MOVLW	ADDR7H
	MOVWF	WRB
	CALL	OUTI2C
	MOVLW	ADDR7L
	MOVWF	WRB
	CALL	OUTI2C
	MOVFW	DATA4
	ADDLW	DT7
	ANDLW	0Fh
	MOVWF	WRB
	CALL	OUTI2C
	CALL	STOP
	CALL	TM5

	CALL	START
	MOVLW	COMWROUT		
	MOVWF	WRB
	CALL	OUTI2C
	MOVLW	ADDRAH
	MOVWF	WRB
	CALL	OUTI2C
	MOVLW	ADDRAL
	MOVWF	WRB
	CALL	OUTI2C
	SWAPF	DATA5,0
	ADDLW	DTA
	ANDLW	0Fh
	MOVWF	WRB
	CALL	OUTI2C
	CALL	STOP
	CALL	TM5

	CALL	START
	MOVLW	COMWROUT		
	MOVWF	WRB
	CALL	OUTI2C
	MOVLW	ADDR9H
	MOVWF	WRB
	CALL	OUTI2C
	MOVLW	ADDR9L
	MOVWF	WRB
	CALL	OUTI2C
	MOVFW	DATA5
	ADDLW	DT9
	ANDLW	0Fh
	MOVWF	WRB
	CALL	OUTI2C
	CALL	STOP
	CALL	TM5

	CALL	START
	MOVLW	COMWROUT		
	MOVWF	WRB
	CALL	OUTI2C
	MOVLW	ADDRCH
	MOVWF	WRB
	CALL	OUTI2C
	MOVLW	ADDRCL
	MOVWF	WRB
	CALL	OUTI2C
	SWAPF	DATA6,0
	ADDLW	DTC
	ANDLW	0Fh
	MOVWF	WRB
	CALL	OUTI2C
	CALL	STOP
	CALL	TM5

	CALL	START
	MOVLW	COMWROUT		
	MOVWF	WRB
	CALL	OUTI2C
	MOVLW	ADDRBH
	MOVWF	WRB
	CALL	OUTI2C
	MOVLW	ADDRBL
	MOVWF	WRB
	CALL	OUTI2C
	MOVFW	DATA6
	ADDLW	DTB
	ANDLW	0Fh
	MOVWF	WRB
	CALL	OUTI2C
	CALL	STOP
	CALL	TM5

NOMER
	CALL	START
	MOVLW	COMWROUT		
	MOVWF	WRB
	CALL	OUTI2C
	MOVLW	ADRN1H
	MOVWF	WRB
	CALL	OUTI2C
	MOVLW	ADRN1L
	MOVWF	WRB
	CALL	OUTI2C
	MOVFW	DATA1
	XORLW	0AAh
	MOVWF	WRB
	CALL	OUTI2C
	CALL	STOP
	CALL	TM5

	CALL	START
	MOVLW	COMWROUT		
	MOVWF	WRB
	CALL	OUTI2C
	MOVLW	ADRN2H
	MOVWF	WRB
	CALL	OUTI2C
	MOVLW	ADRN2L
	MOVWF	WRB
	CALL	OUTI2C
	MOVFW	DATA2
	XORLW	0AAh
	MOVWF	WRB
	CALL	OUTI2C
	CALL	STOP
	CALL	TM5

	CALL	START
	MOVLW	COMWROUT		
	MOVWF	WRB
	CALL	OUTI2C
	MOVLW	ADRN3H
	MOVWF	WRB
	CALL	OUTI2C
	MOVLW	ADRN3L
	MOVWF	WRB
	CALL	OUTI2C
	MOVFW	DATA3
	XORLW	0AAh
	MOVWF	WRB
	CALL	OUTI2C
	CALL	STOP
	CALL	TM5

	CALL	START
	MOVLW	COMWROUT		
	MOVWF	WRB
	CALL	OUTI2C
	MOVLW	ADRN4H
	MOVWF	WRB
	CALL	OUTI2C
	MOVLW	ADRN4L
	MOVWF	WRB
	CALL	OUTI2C
	MOVFW	DATA4
	XORLW	0AAh
	MOVWF	WRB
	CALL	OUTI2C
	CALL	STOP
	CALL	TM5

	CALL	START
	MOVLW	COMWROUT		
	MOVWF	WRB
	CALL	OUTI2C
	MOVLW	ADRN5H
	MOVWF	WRB
	CALL	OUTI2C
	MOVLW	ADRN5L
	MOVWF	WRB
	CALL	OUTI2C
	MOVFW	DATA5
	XORLW	0AAh
	MOVWF	WRB
	CALL	OUTI2C
	CALL	STOP
	CALL	TM5

	CALL	START
	MOVLW	COMWROUT		
	MOVWF	WRB
	CALL	OUTI2C
	MOVLW	ADRN6H
	MOVWF	WRB
	CALL	OUTI2C
	MOVLW	ADRN6L
	MOVWF	WRB
	CALL	OUTI2C
	MOVFW	DATA6
	XORLW	0AAh
	MOVWF	WRB
	CALL	OUTI2C
	CALL	STOP
	CALL	TM5

	CALL	TM5
	CALL	START
	MOVLW	COMWROUT		
	MOVWF	WRB
	CALL	OUTI2C
	MOVLW	ADDR2H
	MOVWF	WRB
	CALL	OUTI2C
	MOVLW	ADDR2L
	MOVWF	WRB
	CALL	OUTI2C
	SWAPF	DATA1,0
	ADDLW	DT2
	ANDLW	0Fh
	MOVWF	WRB
	CALL	OUTI2C
	CALL	STOP
	CALL	TM5

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
	BTFSC	PORTB,2
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
	BSF	TRISB,2
	MOVLW	0
	MOVWF	STATUS
	RETURN

CLDDAT	MOVLW	32
	MOVWF	STATUS
	BCF	TRISB,2
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
TM	MOVLW	03Fh
	MOVWF	TIME
LL3	DECFSZ	TIME,1
	GOTO	LL3
	RETURN
;----------------------TM----------------------------------------------------


TM5	MOVLW	7H
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
