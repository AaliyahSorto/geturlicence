namespace SpriteKind {
    export const Crashpart = SpriteKind.create()
    export const power = SpriteKind.create()
    export const Powerups = SpriteKind.create()
    export const Part = SpriteKind.create()
}
function whattheFunction (numParts: number) {
    daLocations2 = tiles.getTilesByType(assets.tile`myTile3`)
    if (numParts > daLocations2.length) {
        numParts = 0
    }
    for (let index = 0; index < numParts; index++) {
        partsss2 = sprites.create(crashParts._pickRandom(), SpriteKind.Powerups)
        tiles.placeOnTile(partsss2, daLocations2.removeAt(randint(0, daLocations2.length)))
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    if (info.score() == 0) {
        info.changeScoreBy(1)
    } else {
        info.changeScoreBy(-1)
    }
    scene.cameraShake(4, 1000)
    pause(1000)
    music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.UntilDone)
    sprites.destroy(otherSprite)
    whattheFunction(1)
})
function areCoinsOnMap () {
    return sprites.allOfKind(SpriteKind.Food).length > 0
}
function coinplacement () {
    for (let value3 of tiles.getTilesByType(assets.tile`myTile2`)) {
        tiles.placeOnTile(coin, value3)
        coin = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 4 4 4 . . . . . . . 
            . . . . . d d 5 d d 4 . . . . . 
            . . . . 4 5 1 1 1 5 4 . . . . . 
            . . . . 2 5 d 1 5 1 5 . . . . . 
            . . . . . 4 d 5 5 d 4 . . . . . 
            . . . . . 2 2 4 4 2 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Food)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    info.changeScoreBy(1)
})
function Quickintro () {
    story.printCharacterText("Collect the coins and watch out for the cars!Hope you enjoy GetURLicense :)", "Welcome to GetURLicense")
    pause(1000)
    game.splash("Are you ready?")
    story.showPlayerChoices("Yes", "Maybe")
    if (story.checkLastAnswer("Yes")) {
        game.splash("Ok, here we go")
        info.startCountdown(30)
    } else if (story.checkLastAnswer("Maybe")) {
        game.splash("Get ready!!!")
        game.splash("3")
        game.splash("2")
        game.splash("1")
        info.startCountdown(30)
    }
}
let movingroadside2: Sprite = null
let movingroadside: Sprite = null
let crashcar1: Sprite = null
let coin: Sprite = null
let partsss2: Sprite = null
let numParts = 0
let daLocations2: tiles.Location[] = []
let crashParts: Image[] = []
let playerscar = sprites.create(img`
    . . . . . . a a c c a a . . . . 
    . . . . . a 3 3 3 3 3 3 a . . . 
    . . . . 3 c 3 3 3 3 3 3 c 3 . . 
    . . . a 3 c d 3 3 3 3 3 c 3 a . 
    . . . f 3 3 d 3 3 3 3 3 c 3 f . 
    . . . f 3 3 d 3 3 3 3 3 3 3 f . 
    . . . f 3 3 d 3 3 3 3 3 3 3 f . 
    . . . f 3 c 3 d d 3 3 3 c 3 f . 
    . . . a 3 c a c c c c a c 3 a . 
    . . . a 3 a c b b b b c a 3 a . 
    . . . a 3 a b b b b b b a 3 a . 
    . . . a a a a a a a a a a a a . 
    . . . f a d a a a a a a d a f . 
    . . . f a 3 d a a a a d 3 a f . 
    . . . f f a a a a a a a a f f . 
    . . . . f f . . . . . . f f . . 
    `, SpriteKind.Player)
playerscar.setPosition(56, 95)
playerscar.setStayInScreen(true)
controller.moveSprite(playerscar, 100, 100)
crashParts = [img`
    . . . . . . . . . . . . . . . . 
    . . . d d d d . . . . . . . . . 
    . . d d b b d d . . . . . . . . 
    . . d b b b b d d d . . . . . . 
    . . d b b b b b b d d d . . . . 
    . . d b b b b b b b b d . . . . 
    . . d b b b b b b b b d . . . . 
    . . d b b b b b b b b d d . . . 
    . . d d b b b b b b b b d . . . 
    . . . d d b b b b b b b d . . . 
    . . . . d d d b b b b b d . . . 
    . . . . . . d b b b b b d . . . 
    . . . . . . d d d d b b d . . . 
    . . . . . . . . . d d d d . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, img`
    . . . . . . . . . . . . . . . . 
    . . . 8 8 8 8 . . . . . . . . . 
    . . 8 8 6 6 8 8 . . . . . . . . 
    . . 8 6 6 6 6 8 8 8 . . . . . . 
    . . 8 6 6 6 6 6 6 8 8 8 . . . . 
    . . 8 6 6 6 6 6 6 6 6 8 . . . . 
    . . 8 6 6 6 6 6 6 6 6 8 . . . . 
    . . 8 6 6 6 6 6 6 6 6 8 8 . . . 
    . . 8 8 6 6 6 6 6 6 6 6 8 . . . 
    . . . 8 8 6 6 6 6 6 6 6 8 . . . 
    . . . . 8 8 8 6 6 6 6 6 8 . . . 
    . . . . . . 8 6 6 6 6 6 8 . . . 
    . . . . . . 8 8 8 8 6 6 8 . . . 
    . . . . . . . . . 8 8 8 8 . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, img`
    . . . . . . . . . . . . . . . . 
    . . . 4 4 4 4 . . . . . . . . . 
    . . 4 4 2 2 4 4 . . . . . . . . 
    . . 4 2 2 2 2 4 4 4 . . . . . . 
    . . 4 2 2 2 2 2 2 4 4 4 . . . . 
    . . 4 2 2 2 2 2 2 2 2 4 . . . . 
    . . 4 2 2 2 2 2 2 2 2 4 . . . . 
    . . 4 2 2 2 2 2 2 2 2 4 4 . . . 
    . . 4 4 2 2 2 2 2 2 2 2 4 . . . 
    . . . 4 4 2 2 2 2 2 2 2 4 . . . 
    . . . . 4 4 4 2 2 2 2 2 4 . . . 
    . . . . . . 4 2 2 2 2 2 4 . . . 
    . . . . . . 4 4 4 4 2 2 4 . . . 
    . . . . . . . . . 4 4 4 4 . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `]
tiles.setCurrentTilemap(tilemap`level6`)
info.setScore(0)
Quickintro()
coinplacement()
game.onUpdateInterval(12000, function () {
    crashcar1 = sprites.createProjectileFromSide(img`
        . . . . . . 8 8 c c 8 8 . . . . 
        . . . . . 8 6 6 6 6 6 6 8 . . . 
        . . . . 6 c 6 6 6 6 6 6 c 6 . . 
        . . . 8 6 c 9 6 6 6 6 6 c 6 8 . 
        . . . f 6 6 9 6 6 6 6 6 c 6 f . 
        . . . f 6 6 9 6 6 6 6 6 6 6 f . 
        . . . f 6 6 9 6 6 6 6 6 6 6 f . 
        . . . f 6 c 6 9 9 6 6 6 c 6 f . 
        . . . 8 6 c 8 c c c c 8 c 6 8 . 
        . . . 8 6 8 c b b b b c 8 6 8 . 
        . . . 8 6 8 b b b b b b 8 6 8 . 
        . . . 8 8 8 8 8 8 8 8 8 8 8 8 . 
        . . . f 8 d 8 8 8 8 8 8 d 8 f . 
        . . . f 8 6 d 8 8 8 8 d 6 8 f . 
        . . . f f 8 8 8 8 8 8 8 8 f f . 
        . . . . f f . . . . . . f f . . 
        `, 0, 50)
    crashcar1.setPosition(75, -5)
    crashcar1.setVelocity(0, 30)
})
game.onUpdateInterval(85, function () {
    movingroadside = sprites.createProjectileFromSide(img`
        ddddddddddddbbbbbbbbdddddddbddddbbbbbbddddddddddddbbbbbbddddddddddddddbbbbbdddddddddd
        ddddddddddddbbbbbbbbdddddddbbdbbbbbbbbdddddddddddbbbbbbbdbbbbbbbbbbbddbbbbbdddddddddd
        dddddddddddbbbbbbbbbdddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddbdbbbbbbdddddddddd
        ddddddddbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbdddddddbbbbbbbbbbbdddddddddddbbbbbbbbdddddddddd
        ddddddbbbbbbbbbbbbbbbddddddbbbbbbbbbbbdddddddbbbbbbbbbbbdddddddddbbbbbbbbbbdddddddddd
        ddddddbbbbbbbbbbbddbdddddddbbbbbbbbbdbbbbbbbbbbbbbbbbbbddddddddbbbbbbbbbbbbdddddddddd
        ddddddbbbbbbbbbbdddddddddddbbbbbbbbdddddbbbbbbbbbbbbbdbbbbbbbddbbbbbbbbbbbbdddddddddd
        ddddddbbbbbbbbbbdddddbbbbddbbbbbbbddbbbbdddbbbbbbbbbdddddddddbbbbbbbbbbbbdddddddddddd
        ddddddbbbbbbdddbbbdbbdddbbbbbbbbdbbbbbbbbbbdbbbbbbbdddddddddddbbbbbbbbbdddddddddddddd
        ddddddbbbbbdddddddbddddddddbbbbbbbbdddddddddbbbbbdbbddddddddddbbbbbbbdddddddddddddddd
        `, 0, 100)
    movingroadside2 = sprites.createProjectileFromSide(img`
        ddddddddddddbbbbbbbbdddddddbddddbbbbbbddddddddddddbbbbbbddddddddddddddbbbbbdddddddddd
        ddddddddddddbbbbbbbbdddddddbbdbbbbbbbbdddddddddddbbbbbbbdbbbbbbbbbbbddbbbbbdddddddddd
        dddddddddddbbbbbbbbbdddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddbdbbbbbbdddddddddd
        ddddddddbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbdddddddbbbbbbbbbbbdddddddddddbbbbbbbbdddddddddd
        ddddddbbbbbbbbbbbbbbbddddddbbbbbbbbbbbdddddddbbbbbbbbbbbdddddddddbbbbbbbbbbdddddddddd
        ddddddbbbbbbbbbbbddbdddddddbbbbbbbbbdbbbbbbbbbbbbbbbbbbddddddddbbbbbbbbbbbbdddddddddd
        ddddddbbbbbbbbbbdddddddddddbbbbbbbbdddddbbbbbbbbbbbbbdbbbbbbbddbbbbbbbbbbbbdddddddddd
        ddddddbbbbbbbbbbdddddbbbbddbbbbbbbddbbbbdddbbbbbbbbbdddddddddbbbbbbbbbbbbdddddddddddd
        ddddddbbbbbbdddbbbdbbdddbbbbbbbbdbbbbbbbbbbdbbbbbbbdddddddddddbbbbbbbbbdddddddddddddd
        ddddddbbbbbdddddddbddddddddbbbbbbbbdddddddddbbbbbdbbddddddddddbbbbbbbdddddddddddddddd
        `, 0, 100)
    movingroadside2.right = 200
    movingroadside.left = -40
})
game.onUpdateInterval(4000, function () {
    crashcar1 = sprites.createProjectileFromSide(img`
        . . . . . . 8 8 c c 8 8 . . . . 
        . . . . . 8 6 6 6 6 6 6 8 . . . 
        . . . . 6 c 6 6 6 6 6 6 c 6 . . 
        . . . 8 6 c 9 6 6 6 6 6 c 6 8 . 
        . . . f 6 6 9 6 6 6 6 6 c 6 f . 
        . . . f 6 6 9 6 6 6 6 6 6 6 f . 
        . . . f 6 6 9 6 6 6 6 6 6 6 f . 
        . . . f 6 c 6 9 9 6 6 6 c 6 f . 
        . . . 8 6 c 8 c c c c 8 c 6 8 . 
        . . . 8 6 8 c b b b b c 8 6 8 . 
        . . . 8 6 8 b b b b b b 8 6 8 . 
        . . . 8 8 8 8 8 8 8 8 8 8 8 8 . 
        . . . f 8 d 8 8 8 8 8 8 d 8 f . 
        . . . f 8 6 d 8 8 8 8 d 6 8 f . 
        . . . f f 8 8 8 8 8 8 8 8 f f . 
        . . . . f f . . . . . . f f . . 
        `, 0, 50)
    crashcar1.setPosition(60, 49)
    crashcar1.setVelocity(0, 30)
})
forever(function () {
    if (!(areCoinsOnMap())) {
        coinplacement()
    }
})
game.onUpdateInterval(10000, function () {
    crashcar1 = sprites.createProjectileFromSide(img`
        . . . . . . 8 8 c c 8 8 . . . . 
        . . . . . 8 6 6 6 6 6 6 8 . . . 
        . . . . 6 c 6 6 6 6 6 6 c 6 . . 
        . . . 8 6 c 9 6 6 6 6 6 c 6 8 . 
        . . . f 6 6 9 6 6 6 6 6 c 6 f . 
        . . . f 6 6 9 6 6 6 6 6 6 6 f . 
        . . . f 6 6 9 6 6 6 6 6 6 6 f . 
        . . . f 6 c 6 9 9 6 6 6 c 6 f . 
        . . . 8 6 c 8 c c c c 8 c 6 8 . 
        . . . 8 6 8 c b b b b c 8 6 8 . 
        . . . 8 6 8 b b b b b b 8 6 8 . 
        . . . 8 8 8 8 8 8 8 8 8 8 8 8 . 
        . . . f 8 d 8 8 8 8 8 8 d 8 f . 
        . . . f 8 6 d 8 8 8 8 d 6 8 f . 
        . . . f f 8 8 8 8 8 8 8 8 f f . 
        . . . . f f . . . . . . f f . . 
        `, 0, 50)
    crashcar1.setPosition(100, 30)
    crashcar1.setVelocity(0, 30)
})
game.onUpdateInterval(10000, function () {
    crashcar1 = sprites.createProjectileFromSide(img`
        . . . . . . 8 8 c c 8 8 . . . . 
        . . . . . 8 6 6 6 6 6 6 8 . . . 
        . . . . 6 c 6 6 6 6 6 6 c 6 . . 
        . . . 8 6 c 9 6 6 6 6 6 c 6 8 . 
        . . . f 6 6 9 6 6 6 6 6 c 6 f . 
        . . . f 6 6 9 6 6 6 6 6 6 6 f . 
        . . . f 6 6 9 6 6 6 6 6 6 6 f . 
        . . . f 6 c 6 9 9 6 6 6 c 6 f . 
        . . . 8 6 c 8 c c c c 8 c 6 8 . 
        . . . 8 6 8 c b b b b c 8 6 8 . 
        . . . 8 6 8 b b b b b b 8 6 8 . 
        . . . 8 8 8 8 8 8 8 8 8 8 8 8 . 
        . . . f 8 d 8 8 8 8 8 8 d 8 f . 
        . . . f 8 6 d 8 8 8 8 d 6 8 f . 
        . . . f f 8 8 8 8 8 8 8 8 f f . 
        . . . . f f . . . . . . f f . . 
        `, 0, 50)
    crashcar1.setPosition(100, 80)
    crashcar1.setVelocity(0, 30)
})
game.onUpdateInterval(10000, function () {
    crashcar1 = sprites.createProjectileFromSide(img`
        . . . . . . 8 8 c c 8 8 . . . . 
        . . . . . 8 6 6 6 6 6 6 8 . . . 
        . . . . 6 c 6 6 6 6 6 6 c 6 . . 
        . . . 8 6 c 9 6 6 6 6 6 c 6 8 . 
        . . . f 6 6 9 6 6 6 6 6 c 6 f . 
        . . . f 6 6 9 6 6 6 6 6 6 6 f . 
        . . . f 6 6 9 6 6 6 6 6 6 6 f . 
        . . . f 6 c 6 9 9 6 6 6 c 6 f . 
        . . . 8 6 c 8 c c c c 8 c 6 8 . 
        . . . 8 6 8 c b b b b c 8 6 8 . 
        . . . 8 6 8 b b b b b b 8 6 8 . 
        . . . 8 8 8 8 8 8 8 8 8 8 8 8 . 
        . . . f 8 d 8 8 8 8 8 8 d 8 f . 
        . . . f 8 6 d 8 8 8 8 d 6 8 f . 
        . . . f f 8 8 8 8 8 8 8 8 f f . 
        . . . . f f . . . . . . f f . . 
        `, 0, 50)
    crashcar1.setPosition(60, 49)
    crashcar1.setVelocity(0, 30)
})
game.onUpdateInterval(10000, function () {
    crashcar1 = sprites.createProjectileFromSide(img`
        . . . . . . 8 8 c c 8 8 . . . . 
        . . . . . 8 6 6 6 6 6 6 8 . . . 
        . . . . 6 c 6 6 6 6 6 6 c 6 . . 
        . . . 8 6 c 9 6 6 6 6 6 c 6 8 . 
        . . . f 6 6 9 6 6 6 6 6 c 6 f . 
        . . . f 6 6 9 6 6 6 6 6 6 6 f . 
        . . . f 6 6 9 6 6 6 6 6 6 6 f . 
        . . . f 6 c 6 9 9 6 6 6 c 6 f . 
        . . . 8 6 c 8 c c c c 8 c 6 8 . 
        . . . 8 6 8 c b b b b c 8 6 8 . 
        . . . 8 6 8 b b b b b b 8 6 8 . 
        . . . 8 8 8 8 8 8 8 8 8 8 8 8 . 
        . . . f 8 d 8 8 8 8 8 8 d 8 f . 
        . . . f 8 6 d 8 8 8 8 d 6 8 f . 
        . . . f f 8 8 8 8 8 8 8 8 f f . 
        . . . . f f . . . . . . f f . . 
        `, 0, 50)
    crashcar1.setPosition(60, 0)
    crashcar1.setVelocity(0, 30)
})
