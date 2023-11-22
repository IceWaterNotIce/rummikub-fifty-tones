vowel = ["a", "i" , "u", "e", "o"]
consonant = ["","k", "s", "t", "n", "h", "m", "y", "r", "w"]
fiftysounds = []
a = []

for i in range(5):
    a = []
    for j in range(10):
        a.append(consonant[j] + vowel[i])
    fiftysounds.append(a)

print(fiftysounds)
fiftysounds = [[sound for sound in row if sound not in ["yi", "ye","wi", "wu", "we"]] for row in fiftysounds]

fiftysounds.append(["nn"])

for i in fiftysounds:
    for j in i:
        print(j, end=" ")
    print()

print(sum(len(x) for x in fiftysounds)*4 +20)

tiles = []
for i in fiftysounds:
    for j in i:
        for k in range(4):
            tiles.append(j) 
for k in range(4):
    tiles.append("°") 
for k in range(4):
    tiles.append("joker")
for m in range(12):
    tiles.append('"') 



for i in tiles:
    for j in i:
        print(j, end=" ")
    print()

