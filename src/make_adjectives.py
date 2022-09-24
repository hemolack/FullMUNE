#!/usr/bin/python

import os 
import re

dir_path = os.path.dirname(os.path.realpath(__file__))

adjectives = []
adjective_definitions = {}

with open('data.adj') as file:
    lines = file.readlines()
    lines = [line.rstrip() for line in lines]
    for line in lines[29:]:
        index = line.index('|') + 2
        part = line.split(' ')
        word = part[4]
        word = re.sub('\(\w+\)', '', word)
        definition = line[index:]
        adjectives.append(word)
        adjective_definitions[word] = definition
    file.close()

with open(f'{dir_path}/services/adjectives.js', 'w') as output:
    output.write(f'let adjectives = {adjectives};')
    output.write(f'let adjective_definitions = {adjective_definitions};')
    output.close()