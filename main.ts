namespace SpriteKind {
    export const tamer = SpriteKind.create()
    export const egg = SpriteKind.create()
    export const house = SpriteKind.create()
    export const guard = SpriteKind.create()
    export const leader = SpriteKind.create()
    export const boss = SpriteKind.create()
    export const wild = SpriteKind.create()
    export const healer = SpriteKind.create()
    export const baby = SpriteKind.create()
}
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile1 = img`
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
`
    //% blockIdentity=images._tile
    export const tile2 = img`
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
`
    //% blockIdentity=images._tile
    export const tile3 = img`
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
`
    //% blockIdentity=images._tile
    export const tile4 = img`
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 2 f 5 5 5 5 5 5 5 5 5 5 f 2 6 
6 f 2 f 5 5 5 5 5 5 5 5 f 2 f 6 
6 5 f 2 6 5 5 5 5 5 5 6 2 f 5 6 
6 5 5 6 6 5 c 5 5 c 5 6 6 5 5 6 
6 5 5 5 5 c 5 5 5 5 c 5 5 5 5 6 
6 5 5 5 c 5 c 2 2 c 5 c 5 5 5 6 
6 5 5 5 5 5 2 6 6 2 5 5 5 5 5 6 
6 5 5 5 5 5 2 6 6 2 5 5 5 5 5 6 
6 5 5 5 c 5 c 2 2 c 5 c 5 5 5 6 
6 5 5 5 5 c 5 5 5 5 c 5 5 5 5 6 
6 5 5 6 6 5 c 5 5 c 5 6 6 5 5 6 
6 5 f 2 6 5 5 5 5 5 5 6 2 f 5 6 
6 f 2 f 5 5 5 5 5 5 5 5 f 2 f 6 
6 2 f 5 5 5 5 5 5 5 5 5 5 f 2 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
`
    //% blockIdentity=images._tile
    export const tile5 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile6 = img`
6 6 6 6 6 6 6 5 5 6 6 6 6 6 6 6 
6 2 5 5 5 5 5 5 5 5 5 5 5 5 2 6 
6 5 5 5 5 5 5 5 5 5 5 5 5 5 5 6 
6 5 5 5 5 5 5 5 5 5 5 5 5 5 5 6 
6 5 5 5 5 5 5 5 5 5 5 5 5 5 5 6 
6 5 5 5 5 5 5 5 5 5 5 5 5 5 5 6 
6 5 5 5 5 5 5 5 5 5 5 5 5 5 5 6 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
6 5 5 5 5 5 5 5 5 5 5 5 5 5 5 6 
6 5 5 5 5 5 5 5 5 5 5 5 5 5 5 6 
6 5 5 5 5 5 5 5 5 5 5 5 5 5 5 6 
6 5 5 5 5 5 5 5 5 5 5 5 5 5 5 6 
6 5 5 5 5 5 5 5 5 5 5 5 5 5 5 6 
6 2 5 5 5 5 5 5 5 5 5 5 5 5 2 6 
6 6 6 6 6 6 6 5 5 6 6 6 6 6 6 6 
`
}
sprites.onOverlap(SpriteKind.tamer, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (unhurtable == 0) {
        unhurtable = 1
        info.changeLifeBy(-1)
        music.pewPew.play()
        otherSprite.destroy()
        pause(2000)
        unhurtable = 0
    }
})
scene.onOverlapTile(SpriteKind.tamer, myTiles.tile6, function (sprite, location) {
    scene.cameraShake(2, 200)
    energy += 1
    tiles.setTileAt(location, myTiles.tile2)
    for (let value of tiles.getTilesByType(myTiles.tile4)) {
        bad_guy = sprites.create(img`
. . . . f f f f . . . f f . . . 
. . . f 5 5 f . . f f 5 5 f . . 
. . . f f f f f f 5 5 f f f f . 
. . . f 5 5 5 5 5 5 5 f . . . . 
. . f 5 5 5 5 5 5 f f 5 f . . . 
. . f f f f f 5 f f 5 5 f . . . 
. f 6 6 6 6 6 f 5 5 5 5 f . . . 
. f 6 6 6 6 6 6 f 5 5 5 f . . . 
. f 6 6 6 6 f f f 5 5 5 f . f . 
. . f 6 6 f 6 6 f 5 5 f . f c f 
. . . f f f f f f f f f . f c f 
. . f c c f 2 f c c c f f f c f 
. . f f f 2 2 2 f f f f 5 5 f . 
. . . f 2 f f f 2 2 f 5 5 5 f . 
. . . f 2 2 2 2 2 2 2 f 5 f . . 
. . . . f f f f f f f f f . . . 
`, SpriteKind.Enemy)
        tiles.placeOnTile(bad_guy, value)
        bad_guy.follow(mySprite, 25)
        tiles.setTileAt(value, sprites.castle.tileGrass1)
    }
})
function createEnemies () {
	
}
function placeMovingPlatforms () {
	
}
function placeMovingTraps () {
	
}
function placeTraps () {
	
}
function animateTamer () {
    let tamerDirection = ""
    let tamerState = ""
    if (tamerState == "walking") {
        if (mySprite.x % 2 == 0) {
            mySprite.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . f f f f f f . . . . . 
. . . f f e e e e f 2 f . . . . 
. . f f e e e e f 2 2 2 f . . . 
. . f e e e f f e e e e f . . . 
. . f f f f e e 2 2 2 2 e f . . 
. . f e 2 2 2 f f f f e 2 f . . 
. f f f f f f f e e e f f f . . 
. f f e 4 4 e b f 4 4 e e f . . 
. f e e 4 d 4 1 f d d e f . . . 
. . f e e e e e d d d f . . . . 
. . . . f 4 d d e 4 e f . . . . 
. . . . f e d d e 2 2 f . . . . 
. . . f f f e e f 5 5 f f . . . 
. . . f f f f f f f f f f . . . 
. . . . f f . . . f f f . . . . 
`)
        } else {
            mySprite.setImage(img`
. . . . . . f f f f f f . . . . 
. . . . f f e e e e f 2 f . . . 
. . . f f e e e e f 2 2 2 f . . 
. . . f e e e f f e e e e f . . 
. . . f f f f e e 2 2 2 2 e f . 
. . . f e 2 2 2 f f f f e 2 f . 
. . f f f f f f f e e e f f f . 
. . f f e 4 4 e b f 4 4 e e f . 
. . f e e 4 d 4 1 f d d e f . . 
. . . f e e e 4 d d d d f . . . 
. . . . f f e e 4 4 4 e f . . . 
. . . . . 4 d d e 2 2 2 f . . . 
. . . . . e d d e 2 2 2 f . . . 
. . . . . f e e f 4 5 5 f . . . 
. . . . . . f f f f f f . . . . 
. . . . . . . f f f . . . . . . 
`)
        }
    }
    if (tamerState == "attacking") {
        mySprite.setImage(img`
. . . . . . . f f . . . . . . . . . . . 
. . . . f f f f 2 f f . . . . . . . . . 
. . f f e e e e f 2 f f . . . . . . . . 
. f f e e e e e f 2 2 f f . . . . . . . 
. f e e e e f f e e e e f . . . . . . . 
. f f f f f e e 2 2 2 2 e f . . . . . . 
f f f e 2 2 2 f f f f e 2 f . . . . . . 
f f f f f f f f e e e f f f . . . . . . 
f e f e 4 4 e b f 4 4 e e f . . . . . . 
. f e e 4 d 4 b f d d e f . . . . . . . 
. . f e e e 4 d d d e e . c . . . . . . 
. . . f 2 2 2 2 e e d d e c c c c c c c 
. . . f 4 4 4 e 4 4 d d e c d d d d d . 
. . . f f f f f e e e e . c c c c c . . 
. . f f f f f f f f . . . c . . . . . . 
. . f f f . . f f . . . . . . . . . . . 
`)
    }
    if (tamerState == "defending") {
        mySprite.setImage(img`
. . . . . . . f f . . . . . . . . . . . 
. . . . f f f f 2 f f . . . . . . . . . 
. . f f e e e e f 2 f f . . . . . . . . 
. f f e e e e e f 2 2 f f . . . . . . . 
. f e e e e f f e e e e f . . . . . . . 
. f f f f f e e 2 2 2 2 e f . . . . . . 
f f f e 2 2 2 f f f f e 2 f . . . . . . 
f f f f f f f f e e e f f f . . . . . . 
f e f e 4 4 e b f 4 4 e e f . . . . . . 
. f e e 4 d 4 b f d d e f f f . . . . . 
. . f e e e 4 d d d e e f d d f . . . . 
. . . f 2 2 2 2 e e d d e b b f . . . . 
. . . f 4 4 4 e 4 4 d d e b b f . . . . 
. . . f f f f f e e e e f b f . . . . . 
. . f f f f f f f f . . f f . . . . . . 
. . f f f . . f f . . . . . . . . . . . 
`)
    }
    if (tamerDirection == "left") {
        mySprite.image.flipX()
    }
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
function end_game () {
    info.setScore(0)
    game.over(true, effects.confetti)
}
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Projectile, function (sprite, otherSprite) {
    sprite.destroy()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (energy >= 1) {
        projectile = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. 2 . . . . . . . . . . 7 . . . 
. . . . . . 7 . . 7 . . . . 2 . 
. . . 7 . . . . . . . . . . . . 
. . . . . . . . . . 2 . . . . . 
. . . . . . . . . . . . . . . . 
. . . . 2 . . 7 . . . . 7 . . . 
. . . . . . . . . . . . . . . . 
. . . 7 . . . . . . 2 . . . 2 . 
. . . . . . . . 2 . . . . . . . 
. . . . . . . . . . . . 7 . . . 
. . 2 . . . . . . . . . . . . . 
. . . . . 7 . . . 2 . . . 2 . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, mySprite, horizontal * 300, vertiall * -300)
        projectile.setKind(SpriteKind.Projectile)
        projectile.startEffect(effects.warmRadial)
    }
    energy += -1
})
function initializeLevel () {
    let level = 0
    if (level == 1) {
        tiles.setTilemap(tiles.createTilemap(
            hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`,
            img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,
            [myTiles.tile0,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6],
            TileScale.Sixteen
        ))
    } else {
        if (level == 2) {
            tiles.setTilemap(tiles.createTilemap(
            hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`,
            img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,
            [myTiles.tile0,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6],
            TileScale.Sixteen
        ))
        }
    }
    placeTraps()
    placeMovingTraps()
    placeMovingPlatforms()
    createEnemies()
}
function start () {
    if (start_game == 1) {
        scene.setBackgroundColor(9)
        tiles.setTilemap(tiles.createTilemap(
            hex`24000800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000050000000500000000000500000000000005000000000000000000050000000000050000070404040404040704040404040404040704040404070404040404040404040704040704040404070404040404040704040704040404070404040404070404040704040404040404`,
            img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,myTiles.tile1,myTiles.tile2,myTiles.tile3,sprites.castle.tileGrass1,sprites.builtin.forestTiles0,sprites.castle.tilePath9,sprites.castle.tileGrass2,sprites.dungeon.collectibleBlueCrystal,sprites.dungeon.collectibleRedCrystal,sprites.dungeon.collectibleInsignia,myTiles.tile4,myTiles.tile5,myTiles.tile6],
            TileScale.Sixteen
        ))
        mySprite = sprites.create(img`
. . . . . . f f f f . . . . . . 
. . . . f f f 2 2 f f f . . . . 
. . . f f f 2 2 2 2 f f f . . . 
. . f f f e e e e e e f f f . . 
. . f f e 2 2 2 2 2 2 e e f . . 
. . f e 2 f f f f f f 2 e f . . 
. . f f f f e e e e f f f f . . 
. f f e f b f 4 4 f b f e f f . 
. f e e 4 1 f d d f 1 4 e e f . 
. . f e e d d d d d d e e f . . 
. . . f e e 4 4 4 4 e e f . . . 
. . e 4 f 2 2 2 2 2 2 f 4 e . . 
. . 4 d f 2 2 2 2 2 2 f d 4 . . 
. . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
. . . . . f f f f f f . . . . . 
. . . . . f f . . f f . . . . . 
`, SpriteKind.tamer)
        info.setLife(3)
        energy = 10
        attacking = 0
        horizontal = 1
        scene.cameraFollowSprite(mySprite)
        controller.moveSprite(mySprite)
    }
}
info.onLifeZero(function () {
    music.powerDown.play()
    pause(2000)
    if (game.ask("continue?")) {
        start()
    } else {
        game.over(false, effects.dissolve)
    }
})
let attacking = 0
let vertiall = 0
let horizontal = 0
let projectile: Sprite = null
let mySprite: Sprite = null
let bad_guy: Sprite = null
let energy = 0
let unhurtable = 0
let start_game = 0
start_game = 1
start()
game.onUpdate(function () {
    if (mySprite.vx > 0) {
        vertiall = 0
        horizontal = 1
    } else if (mySprite.vx < 0) {
        vertiall = 0
        horizontal = -1
    }
    if (mySprite.vx != 0) {
        if (horizontal == -1) {
            mySprite.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . f f f f f f . . . . . . 
. . . f 2 f e e e e f f . . . . 
. . f 2 2 2 f e e e e f f . . . 
. . f e e e e f f e e e f . . . 
. f e 2 2 2 2 e e f f f f . . . 
. f 2 e f f f f 2 2 2 e f . . . 
. f f f e e e f f f f f f f . . 
. f e e 4 4 f b e 4 4 e f f . . 
. . f e d d f 1 4 d 4 e e f . . 
. . . f d d d e e e e e f . . . 
. . . f e 4 e d d 4 f . . . . . 
. . . f 2 2 e d d e f . . . . . 
. . f f 5 5 f e e f f f . . . . 
. . f f f f f f f f f f . . . . 
. . . f f f . . . f f . . . . . 
`)
        } else {
            mySprite.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . f f f f f f . . . . . 
. . . f f e e e e f 2 f . . . . 
. . f f e e e e f 2 2 2 f . . . 
. . f e e e f f e e e e f . . . 
. . f f f f e e 2 2 2 2 e f . . 
. . f e 2 2 2 f f f f e 2 f . . 
. f f f f f f f e e e f f f . . 
. f f e 4 4 e b f 4 4 e e f . . 
. f e e 4 d 4 1 f d d e f . . . 
. . f e e e e e d d d f . . . . 
. . . . f 4 d d e 4 e f . . . . 
. . . . f e d d e 2 2 f . . . . 
. . . f f f e e f 5 5 f f . . . 
. . . f f f f f f f f f f . . . 
. . . . f f . . . f f f . . . . 
`)
        }
    }
    if (mySprite.vy < 0) {
        horizontal = 0
        vertiall = 1
    } else if (mySprite.vy > 0) {
        horizontal = 0
        vertiall = -1
    }
    if (mySprite.vy != 0) {
        if (vertiall != -1) {
            mySprite.setImage(img`
. . . . . . f f f f . . . . . . 
. . . . f f e e e e f f . . . . 
. . . f e e e f f e e e f . . . 
. . f f f f f 2 2 f f f f f . . 
. . f f e 2 e 2 2 e 2 e f f . . 
. . f e 2 f 2 f f 2 f 2 e f . . 
. . f f f 2 2 e e 2 2 f f f . . 
. f f e f 2 f e e f 2 f e f f . 
. f e e f f e e e e f e e e f . 
. . f e e e e e e e e e e f . . 
. . . f e e e e e e e e f . . . 
. . e 4 f f f f f f f f 4 e . . 
. . 4 d f 2 2 2 2 2 2 f d 4 . . 
. . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
. . . . . f f f f f f . . . . . 
. . . . . f f . . f f . . . . . 
`)
        } else {
            mySprite.setImage(img`
. . . . . . f f f f . . . . . . 
. . . . f f f 2 2 f f f . . . . 
. . . f f f 2 2 2 2 f f f . . . 
. . f f f e e e e e e f f f . . 
. . f f e 2 2 2 2 2 2 e e f . . 
. . f e 2 f f f f f f 2 e f . . 
. . f f f f e e e e f f f f . . 
. f f e f b f 4 4 f b f e f f . 
. f e e 4 1 f d d f 1 4 e e f . 
. . f e e d d d d d d e e f . . 
. . . f e e 4 4 4 4 e e f . . . 
. . e 4 f 2 2 2 2 2 2 f 4 e . . 
. . 4 d f 2 2 2 2 2 2 f d 4 . . 
. . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
. . . . . f f f f f f . . . . . 
. . . . . f f . . f f . . . . . 
`)
        }
    }
})
