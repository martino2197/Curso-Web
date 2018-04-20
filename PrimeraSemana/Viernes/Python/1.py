#!/usr/bin/env python
# -*- coding: utf-8 -*-

numero = 1500
while (numero <= 2700):
   numero = numero + 1
   resto = numero % 5
   resto1 = numero % 7
   if (resto==0):
   		print("El numero "+str(numero)+" es multiplo de 5")

   if (resto1==0):
   		print("El numero "+str(numero)+" es divisible entre 7")	
print("Fin del programa")