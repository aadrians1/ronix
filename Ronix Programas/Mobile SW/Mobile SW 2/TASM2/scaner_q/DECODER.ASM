code	segment
	assume	cs:code,ds:code,es:code,ss:code
	org	100h

begin:	jmp	main

fname	db	'scan.inp',0
fname1	db	'dec_bit.prn',0
handle	dw	?
handle1	dw	?
indexi	dw	0		;cnt index for grafic string
indexo	dw	0
recnt	db	?
value	db	?
grafic	db	?
qwant	dw	?
messa	db	'ok$'
orec	db	?
sizee	dw	?
end_fil	db	0
cnt	dw	?
bclk	db	?
bres	db	?
dat	db	?

endf:	call	close
	ret

main:	call	open
	call	crefi
	call	lenf

real:	call	nextre
	cmp	end_fil,1
	jz	endf
	test	value,10h	;if Vpp=0
	jz	real

	test	value,08h
	jz	no_res
	cmp	bres,1
	jz	no_br1
	mov	bres,1
	mov	orec,'/'
	call	rec
	mov	orec,0dh
	call	rec
	mov	orec,0ah
	call	rec	
	jmp	no_br1

no_res:	cmp	bres,0
	jz	no_br1
	mov	bres,0
	mov	orec,'\'
	call	rec
	mov	orec,0dh
	call	rec
	mov	orec,0ah
	call	rec	

no_br1:	test	value,20h
	jnz	y_clk
	mov	bclk,0
	jmp	real

y_clk:	cmp	bclk,1
	jz	real
	mov	bclk,1
	call	an_rec
	jmp	real

an_rec:	test	value,40h
	jz	an_1
	mov	orec,31h
	call	rec
	ret
an_1:	mov	orec,30h
	call	rec
	ret


nextre:	call	read
	mov	al,dat
	xor	al,11111111b
	mov	value,al
	inc	cnt
	mov	cx,cnt
	cmp	cx,sizee
	jz	end_f
	call	read
	mov	cx,cnt
	cmp	cx,sizee
	jz	end_f
	call	read
	mov	cx,cnt
	cmp	cx,sizee
	jz	end_f
	ret
end_f:	mov	end_fil,1
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
	lea	dx,dat
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
	mov	ah,3eh
	mov	bx,handle1
	int	21h
	ret

print:	mov	ah,09
	lea	dx,messa
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

;strout	db	486 dup	  (?)	;grafic string for prn
;strin	db	21561 dup (?)

code	ends
	end	begin 
