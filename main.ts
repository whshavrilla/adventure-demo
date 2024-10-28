namespace SpriteKind {
    export const Door2 = SpriteKind.create()
    export const Door1 = SpriteKind.create()
    export const Door6 = SpriteKind.create()
    export const Door3 = SpriteKind.create()
    export const Door4 = SpriteKind.create()
    export const Door7 = SpriteKind.create()
    export const Door8 = SpriteKind.create()
}
function destroyAllDoors () {
    sprites.destroy(doorTo1)
    sprites.destroy(doorTo2)
    sprites.destroy(doorTo3)
    sprites.destroy(doorTo4)
    sprites.destroy(doorTo6)
    sprites.destroy(doorTo7)
    sprites.destroy(doorTo8)
    sprites.destroy(doorTo1)
    sprites.destroy(doorTo1)
    sprites.destroy(doorTo1)
    sprites.destroy(doorTo1)
    sprites.destroy(doorTo1)
    sprites.destroy(doorTo1)
    sprites.destroy(doorTo1)
    sprites.destroy(doorTo1)
    sprites.destroy(doorTo1)
    sprites.destroy(doorTo1)
    sprites.destroy(doorTo1)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Door1, function (sprite, otherSprite) {
    destroyAllDoors()
    scene.setBackgroundImage(assets.image`Room 1`)
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
    mySprite.setPosition(135, 59)
    doorTo2.setPosition(155, 60)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Door3, function (sprite, otherSprite) {
    destroyAllDoors()
    scene.setBackgroundImage(assets.image`room3`)
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
    doorTo4 = sprites.create(img`
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
        `, SpriteKind.Door4)
    doorTo8 = sprites.create(img`
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
        `, SpriteKind.Door8)
    mySprite.setPosition(24, 62)
    doorTo2.setPosition(5, 60)
    doorTo8.setPosition(80, 115)
    doorTo4.setPosition(155, 60)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Door2, function (sprite, otherSprite) {
    destroyAllDoors()
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
    doorTo7 = sprites.create(img`
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
        `, SpriteKind.Door7)
    doorTo3 = sprites.create(img`
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
        `, SpriteKind.Door3)
    mySprite.setPosition(24, 62)
    doorTo1.setPosition(5, 60)
    doorTo7.setPosition(80, 115)
    doorTo3.setPosition(155, 60)
})
// Bottom: 80,115
// Right: 155,60
// Left: 5,60
let doorTo8: Sprite = null
let doorTo7: Sprite = null
let doorTo4: Sprite = null
let doorTo3: Sprite = null
let doorTo1: Sprite = null
let doorTo6: Sprite = null
let doorTo2: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundImage(assets.image`Room 1`)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . b 5 5 b . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . b b b b b 5 5 5 5 5 5 5 b . . 
    . b d 5 b 5 5 5 5 5 5 5 5 b . . 
    . . b 5 5 b 5 d 1 f 5 d 4 f . . 
    . . b d 5 5 b 1 f f 5 4 4 c . . 
    b b d b 5 5 5 d f b 4 4 4 4 b . 
    b d d c d 5 5 b 5 4 4 4 4 4 4 b 
    c d d d c c b 5 5 5 5 5 5 5 b . 
    c b d d d d d 5 5 5 5 5 5 5 b . 
    . c d d d d d d 5 5 5 5 5 d b . 
    . . c b d d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
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
