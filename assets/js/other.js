export function randomizeTiles(tile_eles, playerTiles_eles) {
    for (var i = 0; i < 14; i++) {
        var randomnum = Math.floor(Math.random() * tile_eles.length);
        var randomtile = tile_eles.splice(randomnum, 1)[0];
        if (randomtile == undefined) {
            console.log("randomtile is undefined");
            return;
        }
        playerTiles_eles.push(randomtile);
    }
}