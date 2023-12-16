import random

with open('./tiles.txt', 'r') as file:
    string_list = file.readlines()

# Remove newline characters from each line
tiles = [line.strip() for line in string_list]
random.shuffle(tiles)

player1_tiles = tiles[0:14]
player2_tiles = tiles[14:28]
player3_tiles = tiles[28:42]
player4_tiles = tiles[42:56]

player_tiles = [player1_tiles, player2_tiles, player3_tiles, player4_tiles]

for player in player_tiles:
    print(player)

with open('./randomTiles/remainTiles.txt', 'w') as file:
    # remove the tiles that have been distributed to players
    tiles = tiles[56:]
    print(len(tiles))
    for tile in tiles:
        file.write(tile + '\n')


