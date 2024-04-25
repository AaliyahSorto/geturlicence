namespace SpriteKind {
    export const Crashpart = SpriteKind.create()
}
function doSomething () {
    for (let value of tiles.getTilesByType(assets.tile`myTile2`)) {
        if (true) {
            tiles.replaceAllTiles(assets.tile`myTile2`, assets.tile`myTile0`)
        }
    }
}
function Askquestionandcheckanswer (questionnumber: number) {
    screenText = ""
    correctAnswer = 0
    if (questionnumber == 1) {
        questionText = questions[0]
    }
    if (questionnumber == 2) {
        questionText = questions[1]
    }
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
function C () {
    if (playerscar.overlapsWith(crashcar1)) {
        Askquestionandcheckanswer(Currentquestion)
    }
}
function Quickintro () {
    story.printCharacterText("Collect the coins and watch out for the cars! If you crash try to answer questions quickly before the time runs out.", "Welcome to GetURLicense")
    game.splash("Are you ready?")
    pause(200)
    story.showPlayerChoices("Yes", "Maybe")
    if (story.checkLastAnswer("Yes")) {
        game.splash("Ok, here we go")
        info.startCountdown(30)
    } else if (story.checkLastAnswer("Maybe")) {
        game.splash("Get ready!!!")
        info.startCountdown(30)
    }
}
let movingroadside2: Sprite = null
let movingroadside: Sprite = null
let crashcar1: Sprite = null
let coin: Sprite = null
let questionText: string[] = []
let correctAnswer = 0
let screenText = ""
let questions: string[][] = []
let Currentquestion = 0
let playerscar: Sprite = null
music.play(music.stringPlayable("- - - - - - - - ", 120), music.PlaybackMode.UntilDone)
playerscar = sprites.create(img`
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
Currentquestion = 0
questions = [
[
"A stop sign is shaped like a(n):",
"Rectangle",
"Circle",
"Octagon"
],
[
"What should you do when driving in fog?",
"Use your low beams",
"Use your parking lights",
"Use your high beams"
],
[
"When making a right turn, what should you NOT do?",
"Signal to other drivers",
"Swing to wide for your lane",
"Slow down"
],
[
"If an officer is directing traffic, what should you do?",
"Follow the directions indicated by the traffic light",
"Follow the instructions given by the officer",
"Check to see what the other cars are doing"
],
[
"Who can use the shared lanes?",
"Bicyclists",
"Truck drivers",
"Motorcyclist"
],
[
"When should you allow a larger space cushion than usual when stopping?",
"On an incline",
"At a stop sign",
"At an intersection"
],
[
"Unless posted otherwise, what is the speed limit of an alley?",
"15 mph",
"30 mph",
"45 mph"
],
[
"What is hardest to see at night while driving?",
"Road signs",
"Street lights",
"Pedestrians"
],
[
"How often must motor vehicles be inspected?",
"Once every year",
"Once every four years",
"Once every three years"
],
[
"What is the most common color of warning signs?",
"Yellow",
"Green",
"Red"
]
]
info.setScore(0)
C()
Quickintro()
coinplacement()
let crashProduct = [img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . d d d . . . . 
    . . . . . . . d d d d d . . . . 
    . . . . . d d d d d d d . . . . 
    . . . . d d d d d d d . . . . . 
    . . . d d d d d d d . . . . . . 
    . . . d d d d d d . . . . . . . 
    . . . d d d d d . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . e e . . . . 
    . . . . . . . . e e e e . . . . 
    . . . . . . . e e e e e . . . . 
    . . . . . . . e e e e e . . . . 
    . . . . . . e e e e e e . . . . 
    . . . . . e e e e e e e e . . . 
    . . . . . e e e e e e e e . . . 
    . . . . e e e e e e e e . . . . 
    . . . e e e e e e e . . . . . . 
    . . . e e e e e e . . . . . . . 
    . . . e e e . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `]
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
    }
})
forever(function () {
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
