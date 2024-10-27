namespace SpriteKind {
    export const Door2 = SpriteKind.create()
    export const Door1 = SpriteKind.create()
    export const Door6 = SpriteKind.create()
    export const Door3 = SpriteKind.create()
    export const Door4 = SpriteKind.create()
    export const Door5 = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Door5, function (sprite, otherSprite) {
    sprites.destroy(doorTo2)
    sprites.destroy(doorTo6)
    scene.setBackgroundImage(assets.image`Room2`)
    doorTo1 = sprites.create(img`
        b b b b b b b b b b b b b b b b 
        b c b e 4 4 4 4 4 4 4 4 e b c b 
        b b e 4 4 4 4 4 4 4 4 4 4 e b b 
        b b 4 4 4 4 4 4 4 4 4 4 4 4 b b 
        b b 4 4 4 4 4 4 4 4 4 4 4 4 b b 
        b b 4 4 4 4 4 4 4 4 4 4 4 4 b b 
        b b 4 4 4 4 4 4 4 4 4 4 4 4 b b 
        b b 4 4 4 4 4 4 4 4 4 4 4 4 b b 
        b b d 4 4 4 4 4 4 4 4 4 4 d b b 
        b b d 4 4 4 4 4 4 4 4 4 4 d b b 
        b b 4 d 4 4 4 4 4 4 4 4 d 4 b b 
        b b 4 4 d d d d d d d d 4 4 b b 
        b b c 4 4 4 4 4 4 4 4 4 4 c b b 
        b b b c c c c c c c c c c b b b 
        b c b b b b b b b b b b b b c b 
        b b b b b b b b b b b b b b b b 
        `, SpriteKind.Door1)
    mySprite.setPosition(24, 62)
    doorTo1.setPosition(5, 60)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Door2, function (sprite, otherSprite) {
    sprites.destroy(doorTo2)
    sprites.destroy(doorTo6)
    scene.setBackgroundImage(assets.image`Room2`)
    doorTo1 = sprites.create(img`
        b b b b b b b b b b b b b b b b 
        b c b e 4 4 4 4 4 4 4 4 e b c b 
        b b e 4 4 4 4 4 4 4 4 4 4 e b b 
        b b 4 4 4 4 4 4 4 4 4 4 4 4 b b 
        b b 4 4 4 4 4 4 4 4 4 4 4 4 b b 
        b b 4 4 4 4 4 4 4 4 4 4 4 4 b b 
        b b 4 4 4 4 4 4 4 4 4 4 4 4 b b 
        b b 4 4 4 4 4 4 4 4 4 4 4 4 b b 
        b b d 4 4 4 4 4 4 4 4 4 4 d b b 
        b b d 4 4 4 4 4 4 4 4 4 4 d b b 
        b b 4 d 4 4 4 4 4 4 4 4 d 4 b b 
        b b 4 4 d d d d d d d d 4 4 b b 
        b b c 4 4 4 4 4 4 4 4 4 4 c b b 
        b b b c c c c c c c c c c b b b 
        b c b b b b b b b b b b b b c b 
        b b b b b b b b b b b b b b b b 
        `, SpriteKind.Door1)
    mySprite.setPosition(24, 62)
    doorTo1.setPosition(5, 60)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Door4, function (sprite, otherSprite) {
    sprites.destroy(doorTo2)
    sprites.destroy(doorTo6)
    scene.setBackgroundImage(assets.image`Room2`)
    doorTo1 = sprites.create(img`
        b b b b b b b b b b b b b b b b 
        b c b e 4 4 4 4 4 4 4 4 e b c b 
        b b e 4 4 4 4 4 4 4 4 4 4 e b b 
        b b 4 4 4 4 4 4 4 4 4 4 4 4 b b 
        b b 4 4 4 4 4 4 4 4 4 4 4 4 b b 
        b b 4 4 4 4 4 4 4 4 4 4 4 4 b b 
        b b 4 4 4 4 4 4 4 4 4 4 4 4 b b 
        b b 4 4 4 4 4 4 4 4 4 4 4 4 b b 
        b b d 4 4 4 4 4 4 4 4 4 4 d b b 
        b b d 4 4 4 4 4 4 4 4 4 4 d b b 
        b b 4 d 4 4 4 4 4 4 4 4 d 4 b b 
        b b 4 4 d d d d d d d d 4 4 b b 
        b b c 4 4 4 4 4 4 4 4 4 4 c b b 
        b b b c c c c c c c c c c b b b 
        b c b b b b b b b b b b b b c b 
        b b b b b b b b b b b b b b b b 
        `, SpriteKind.Door1)
    mySprite.setPosition(24, 62)
    doorTo1.setPosition(5, 60)
})
let doorTo1: Sprite = null
let doorTo6: Sprite = null
let doorTo2: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundImage(assets.image`Room 1`)
mySprite = sprites.create(img`
    ........................
    .....ffff...............
    ...fff22fff.............
    ..fff2222fff............
    .fffeeeeeefff...........
    .ffe222222eef...........
    .fe2ffffff2ef...........
    .ffffeeeeffff...........
    ffefbf44fbfeff..........
    fee41fddf14eef..........
    .ffffdddddeef...........
    fddddf444eef............
    fbbbbf2222f4e...........
    fbbbbf2222fd4...........
    .fccf45544f44...........
    ..ffffffff..............
    ....ff..ff..............
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Player)
mySprite.setStayInScreen(true)
controller.moveSprite(mySprite)
doorTo2 = sprites.create(img`
    b b b b b b b b b b b b b b b b 
    b c b e 4 4 4 4 4 4 4 4 e b c b 
    b b e 4 4 4 4 4 4 4 4 4 4 e b b 
    b b 4 4 4 4 4 4 4 4 4 4 4 4 b b 
    b b 4 4 4 4 4 4 4 4 4 4 4 4 b b 
    b b 4 4 4 4 4 4 4 4 4 4 4 4 b b 
    b b 4 4 4 4 4 4 4 4 4 4 4 4 b b 
    b b 4 4 4 4 4 4 4 4 4 4 4 4 b b 
    b b d 4 4 4 4 4 4 4 4 4 4 d b b 
    b b d 4 4 4 4 4 4 4 4 4 4 d b b 
    b b 4 d 4 4 4 4 4 4 4 4 d 4 b b 
    b b 4 4 d d d d d d d d 4 4 b b 
    b b c 4 4 4 4 4 4 4 4 4 4 c b b 
    b b b c c c c c c c c c c b b b 
    b c b b b b b b b b b b b b c b 
    b b b b b b b b b b b b b b b b 
    `, SpriteKind.Door2)
doorTo6 = sprites.create(img`
    b b b b b b b b b b b b b b b b 
    b c b e 4 4 4 4 4 4 4 4 e b c b 
    b b e 4 4 4 4 4 4 4 4 4 4 e b b 
    b b 4 4 4 4 4 4 4 4 4 4 4 4 b b 
    b b 4 4 4 4 4 4 4 4 4 4 4 4 b b 
    b b 4 4 4 4 4 4 4 4 4 4 4 4 b b 
    b b 4 4 4 4 4 4 4 4 4 4 4 4 b b 
    b b 4 4 4 4 4 4 4 4 4 4 4 4 b b 
    b b d 4 4 4 4 4 4 4 4 4 4 d b b 
    b b d 4 4 4 4 4 4 4 4 4 4 d b b 
    b b 4 d 4 4 4 4 4 4 4 4 d 4 b b 
    b b 4 4 d d d d d d d d 4 4 b b 
    b b c 4 4 4 4 4 4 4 4 4 4 c b b 
    b b b c c c c c c c c c c b b b 
    b c b b b b b b b b b b b b c b 
    b b b b b b b b b b b b b b b b 
    `, SpriteKind.Door6)
doorTo6.setPosition(80, 115)
doorTo2.setPosition(155, 60)
