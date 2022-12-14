p486
code	segment	use16
	assume	cs:code,ds:code,es:code,ss:code,gs:code,fs:code

	org	100h

begin:	jmp	main

fname1	db	'comp1',0
fname2	db	'comp2',0
fname3	db	'comp',0
handle1	dw	?
handle2	dw	?
handle3	dw	?
orec	db	?
cm1	db	?
cm2	db	?
cntadr	dw	0
er	db	?
sizee1	dd	?
sizee2	dd	?
messa	db	'error$'

main:	call	open1
	call	open2
	call	lenf1
	call	lenf2
	call	close
	call	open1
	call	open2
	call	crefi
	cmp	sizee1,0
	jz	exit
	cmp	sizee2,0
	jz	exit

cikl:	call	read1
	call	read2
	mov	al,cm2
	cmp	cm1,al
	jz	con1
	mov	ax,cntadr
	mov	orec,ah
	call	rec
	mov	ax,cntadr
	mov	orec,al
	call	rec
	mov	al,cm1
	mov	orec,al
	call	rec
	mov	al,cm2
	mov	orec,al
	call	rec

con1:	inc	cntadr
	dec	sizee1
	dec	sizee2
	cmp	sizee1,0
	jz	exit
	cmp	sizee2,0
	jz	exit
	jmp	cikl
exit:	call	close
	ret
error:	call	print
	call	close
	ret

;		*** open file 1 ***
;		-----------------

open1:	mov	ah,3dh
	mov	al,0
	lea	dx,fname1
	int	21h
	mov	handle1,ax
	ret

;		*** open file 2 ***
;		-----------------

open2:	mov	ah,3dh
	mov	al,0
	lea	dx,fname2
	int	21h
	mov	handle2,ax
	ret

;		*** read file 1 ***
;		-------------------

read1:	mov	ah,3fh
	mov	bx,handle1
	mov	cx,1
	lea	dx,cm1
	int	21h
	ret
;		*** read file 2 ***
;		-------------------

read2:	mov	ah,3fh
	mov	bx,handle2
	mov	cx,1
	lea	dx,cm2
	int	21h
	ret

;		*** creat file ***
;		------------------
crefi:	mov	ah,3ch
	mov	cx,00
	lea	dx,fname3
	int	21h
	mov	handle3,ax
	ret

;		*** rec file ***
;		----------------
	
rec:	mov	ah,40h
	mov	bx,handle3
	mov	cx,1
	lea	dx,orec
	int	21h
	ret
;		*** close file ***
;		------------------

close:	mov	ah,3eh		
	mov	bx,handle3 
	int	21h	
	mov	ah,3eh		
	mov	bx,handle2 
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

lenf1:	mov	ah,42h
	mov	al,2
	mov	bx,handle1
	mov	cx,0
	mov	dx,0
	int	21h
	shl	edx,16
	and	edx,0ffff0000h
	and	eax,0000ffffh
	or	eax,edx
	mov	sizee1,eax
	ret

lenf2:	mov	ah,42h
	mov	al,2
	mov	bx,handle2
	mov	cx,0
	mov	dx,0
	int	21h
	shl	edx,16
	and	edx,0ffff0000h
	and	eax,0000ffffh
	or	eax,edx
	mov	sizee2,eax
	ret

code	ends
	end	begin 
