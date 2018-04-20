#!/usr/bin/env python
# -*- coding: utf-8 -*-

datalist = [1452, 11.23, 1 + 2j, True, 'w3resource', (0, -1), [5, 12], {"clase": 'V', 'section': 'A'} ]
print("Recorrer lista por Indices")
for elemento in range(0,len(datalist)):
    print(datalist[elemento])
print(type(datalist[elemento]))