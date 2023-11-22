import random

with open('tiles.txt', 'r') as file:
    string_list = file.readlines()
# Remove newline characters from each line
tiles = [line.strip() for line in string_list]


def randomize_tiles():
    tiles_copy = tiles.copy()
    random.shuffle(tiles_copy)
    return tiles_copy

player1_tiles = randomize_tiles()[0:14]
player2_tiles = randomize_tiles()[0:14]
player3_tiles = randomize_tiles()[0:14]
player4_tiles = randomize_tiles()[0:14]

player_tiles = [player1_tiles, player2_tiles, player3_tiles, player4_tiles]

for player in player_tiles:
    print(player)


