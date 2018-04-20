#!/usr/bin/env python
# -*- coding: utf-8 -*-
import random  
   
print("adivina el numero,ingresa un numero del 1 al 9")  

nm=random.randrange(1,10)

n=0; 

while n != nm: 
       
	n = int(input("tu numero: ")) 

	if n == nm: 

		print("has acertado!!") 

	if n > nm: 

		print("Tu numero es mayor") 

	if n < nm:

		print("Tu numero es menor")

print("Felicidades !!!") 