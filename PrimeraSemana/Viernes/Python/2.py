#!/usr/bin/env python
# -*- coding: utf-8 -*-
import os

 

def menu():


	os.system('clear') 

	print ("Selecciona una opción")

	print ("\t1 - De Celsius a Farenheit")

	print ("\t2 - De Farenheit a Celsius")

	print ("\t9 - salir")
 

while True:

	menu()


	opcionMenu = input("inserta un numero valor >> ")

	if opcionMenu=="1":

		print ("")

		Cel = float(input("ingresa los grados Celsius >> "))

		Far = (9/5*Cel)+32.0

		print ("Los grados en Farenheit son: ",Far)

		input("\npulsa una tecla para continuar")

	elif opcionMenu=="2":

		print ("")

		Far = float(input("ingresa los grados Farenheit >> "))

		Cel = (Far-32)*5/9

		print ("Los grados en Celsius son: ",Cel)

		input("\npulsa una tecla para continuar")


	elif opcionMenu=="9":

		break

	else:

		print ("")

		input("No has pulsado ninguna opción correcta...\npulsa una tecla para continuar")