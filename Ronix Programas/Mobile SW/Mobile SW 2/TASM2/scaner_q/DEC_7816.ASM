code	segment
	assume	cs:code,ds:code,es:code,ss:code

	org	100h

begin:	jmp	main

adr_lpt	=	378h
fname	db	'dec_bit.prn',0
fname1	db	'dec_bit2.prn',0
handle	dw	?
handle1	dw	?
addr	dw	0		;cnt index for grafic string	
cnt	db	?
orec	db	?
dta	db	?
cntf	dw	0
sizee	dw	0
port_	db	0
flag	db	0

main:	call	crefi
	call	open
	call	lenf

nextb:	call	read
	inc	cntf
	mov	ax,cntf
	cmp	ax,sizee
	jz	endf
	cmp	dta,'r'
	jz	readb1
	mov	flag,1
	cmp	dta,'/'
	jz	res_up
	cmp	dta,'\'
	jz	res_do
	cmp	dta,31h
	jz	dat_up
	cmp	dta,30h
	jz	dat_do
;	cmp	dta,'m'
;	jz	strres
;	cmp	dta,'n'
;	jz	strwr
	cmp	dta,33h
	jz	datl_up
	cmp	dta,32h
	jz	datl_do

	jmp	nextb
strres:	jmp	str_res
strwr:	jmp	str_wr
readb1:	jmp	readb	
	
endf:	call	close
	call	close1
	ret

res_up:	or	port_,00000100b
	call	outp_
	jmp	nextb

res_do:	and	port_,11111011b
	call	outp_
	jmp	nextb

dat_up:	or	port_,00010000b
	call	outp_
	or	port_,00000010b
	call	outp_
	and	port_,11111101b
	call	outp_
	jmp	nextb

dat_do:	and	port_,11101111b
	call	outp_
	or	port_,00000010b
	call	outp_
	and	port_,11111101b
	call	outp_
	or	port_,00010000b
	call	outp_
	jmp	nextb


datl_up:or	port_,00010000b
	call	outp_
	or	port_,00000010b
	call	outpl
	and	port_,11111101b
	call	outp_
	jmp	nextb

datl_do:and	port_,11101111b
	call	outp_
	or	port_,00000010b
	call	outpl
	and	port_,11111101b
	call	outp_
	or	port_,00010000b
	call	outp_
	jmp	nextb

outpl:	mov	dx,adr_lpt
	mov	al,port_
	out	dx,al
	call	tml
	ret


readb:	or	port_,00010000b
	call	outp_
	or	port_,00000010b
	call	outp_
	call	in_p	
	and	port_,11111101b
	call	outp_
	jmp	nextb
str_res:
	and	port_,11111111b
	call	outp_
	or	port_,00000100b
	call	outp_
	and	port_,11111011b
	or	port_,00010010b
	call	outp_
	call	tm
	call	tm
	jmp	nextb

str_wr:	
	and	port_,11101001b	;d
	call	outp_
	or	port_,00000100b	;r
	call	outp_
	and	port_,11111011b
	call	outp_
	or	port_,00010010b
	call	outp_
	call	tml
	call	tml
	and	port_,11111101b
	call	outp_
	or	port_,00000100b	;r
	call	outp_
	and	port_,11111011b
	call	outp_
	or	port_,00010010b
	call	outp_
	call	tml
	call	tml
	and	port_,11111101b
	call	outp_
	jmp	nextb

outp_:	mov	dx,adr_lpt
	mov	al,port_
	out	dx,al
	call	tm
	ret
	
in_p:	test	flag,1
	jz	con2
	mov	flag,0
	mov	orec,0dh
	call	rec
	mov	orec,0ah
	call	rec
con2:	mov	dx,adr_lpt+1
	in	al,dx
	test	al,80h
	jnz	no_zer
	mov	orec,31h
	call	rec
	jmp	con1
no_zer:	mov	orec,30h
	call	rec
con1:	ret

tm:	mov	cx,2fffh
as3:	loop	as3
	ret

tml:	mov	cx,0ffffh
as1:	mov	ax,3fh
as2:	dec	ax
	cmp	ax,0
	jnz	as2
	loop	as1
	ret

;		*** open file ***
;		-----------------

open:	mov	ah,3dh
	mov	al,0
	lea	dx,fname
	int	21h
	mov	handle,ax
	ret

;		*** read file ***
;		-----------------

read:	mov	ah,3fh
	mov	bx,handle
	mov	cx,1
	lea	dx,dta
	int	21h
	ret

;		*** creat file ***
;		------------------
crefi:	mov	ah,3ch
	mov	cx,00
	lea	dx,fname1
	int	21h
	mov	handle1,ax
	ret
;               *** rec file ***
;		----------------

rec:	mov	ah,40h
	mov	bx,handle1
	mov	cx,1
	lea	dx,orec
	int	21h
	ret
;		*** close file ***
;		------------------

close:	mov	ah,3eh
	mov	bx,handle
	int	21h
	ret

close1:	mov	ah,3eh
	mov	bx,handle1
	int	21h
	ret


;		*** len file ***
;		----------------

lenf:	mov	ah,42h
	mov	al,2
	mov	bx,handle
	mov	cx,0
	mov	dx,0
	int	21h
	mov	sizee,ax

	mov	ah,42h
	mov	al,0
	mov	cx,0
	mov	dx,0
	int	21h
	ret

code	ends
	end	begin 
