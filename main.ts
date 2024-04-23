function scoreee () {
	
}
function Crashchecker (playerscar: Sprite, questions: number[]) {
    if (playerscar.overlapsWith(crashcar1)) {
        q1 = questions[0]
        story.showPlayerChoices("red", "blue ", "rando")
    }
}
function DLquestions (questions: any[]) {
    if (questions.length == 0) {
        game.splash("Wow, you're amazing there are more questions left in the question bank, keep collecting coins until time runs out")
    }
    randomIndex = Math.randomRange(0, questions.length - 1)
    randomQuestion = questions[randomIndex]
    return randomQuestion
}
function coinplacement () {
    for (let value of tiles.getTilesByType(assets.tile`myTile2`)) {
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
        tiles.placeOnTile(coin, value)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    info.changeScoreBy(1)
})
let movingroadside2: Sprite = null
let movingroadside: Sprite = null
let coin: Sprite = null
let randomQuestion = 0
let randomIndex = 0
let q1 = 0
let crashcar1: Sprite = null
music.play(music.stringPlayable("A G F A F A G B ", 120), music.PlaybackMode.UntilDone)
info.startCountdown(300)
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
tiles.setCurrentTilemap(tilemap`level6`)
let questions = [
"What is the shape of a stop sign?",
"When ",
"What should you do when you get into a car crash ",
"",
"",
"",
"",
"",
""
]
let question1 = questions[0]
let question2 = questions[1]
info.setScore(0)
coinplacement()
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
    if (info.score() == 12) {
        coinplacement()
    }
    if (info.score() == 24) {
        coinplacement()
    }
    if (info.score() == 36) {
        coinplacement()
    }
    if (info.score() == 48) {
        coinplacement()
    }
    if (info.score() == 60) {
        coinplacement()
    }
    if (info.score() == 72) {
        coinplacement()
    }
    if (info.score() == 84) {
        coinplacement()
    }
    if (info.score() == 96) {
        coinplacement()
    }
    if (info.score() == 108) {
        coinplacement()
    }
    if (info.score() == 120) {
        coinplacement()
    }
    if (info.score() == 132) {
        coinplacement()
    }
    if (info.score() == 144) {
        coinplacement()
    }
    if (info.score() == 156) {
        coinplacement()
    }
    if (info.score() == 168) {
        coinplacement()
    }
    if (info.score() == 180) {
        coinplacement()
    }
    if (info.score() == 192) {
        coinplacement()
        coinplacement()
        coinplacement()
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
