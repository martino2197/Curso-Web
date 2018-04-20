#!/usr/bin/env python
# -*- coding: utf-8 -*-

alto=int(input("Introduce la altura:"))
largo=int(input("ahora la anchura:"))
for a in range(alto):
  if (a is not 0) and (a != alto - 1):
    for l in range(largo):
        if (l is not 0) and (l != largo - 1):
            print("-", end='')
        else:
            print("*",end="")
  else:
    for l in range(largo):
        print("*",end="")
  print('')