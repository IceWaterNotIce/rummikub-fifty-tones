import random

with open('./randomTiles/remainTiles.txt', 'r') as file:
    string_list = file.readlines()
# Remove newline characters from each line
tiles = [line.strip() for line in string_list]

print(tiles[0])
tiles = tiles[1:]

print(len(tiles))
with open('./randomTiles/remainTiles.txt', 'w') as file:
    for tile in tiles:
        file.write(tile + '\n')


