with open('tiles.txt', 'r') as f:
    string_list = f.readlines()

# Remove newline characters from each line
tiles = [line.strip() for line in string_list]

with open('tilesIndex.txt', 'w') as f:
    for i in range(len(tiles)):
        if i % 4 == 0:
            f.write(tiles[i] + '\n')
