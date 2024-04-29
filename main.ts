namespace SpriteKind {
    export const Crashpart = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    scene.cameraShake(4, 1000)
    pause(1000)
    music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.UntilDone)
    sprites.destroy(otherSprite)
    playerAnswer("0")
})
function checkAnswer (answer: string) {
    if (answer != "") {
        correctAnswer = correctAnswers[currentQuestionIndex]
    }
    if (answer == correctAnswer) {
        game.splash("Good Job!")
        currentQuestionIndex += 1
    } else if (answer != correctAnswer) {
        game.splash("Wrong! Try again.")
    }
    if (currentQuestionIndex < questions.length) {
        game.splash(questions[currentQuestionIndex])
        for (let option22 of options[currentQuestionIndex]) {
            game.splash(option22)
        }
        game.splash("Pick A or B")
        playerAnswer2 = game.askForString("", 1)
    }
}
function playerAnswer (answer: string) {
    if (answer != "") {
        correctAnswer = correctAnswers[currentQuestionIndex]
    }
    if (answer == "0") {
        game.splash("You crashed")
    } else if (answer == correctAnswer) {
        game.splash("Good Job!")
        currentQuestionIndex += 1
    } else {
        game.splash("Wrong! Try again.")
    }
    if (currentQuestionIndex < questions.length) {
        game.splash(questions[currentQuestionIndex])
        for (let option2 of options[currentQuestionIndex]) {
            game.splash(option2)
        }
        game.splash("Pick a or b")
        playerAnswer2 = game.askForString("", 1)
        checkAnswer(playerAnswer2)
    }
}
function coinplacement () {
    for (let value of tiles.getTilesByType(assets.tile`myTile2`)) {
        tiles.placeOnTile(coin, value)
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
    story.printCharacterText("Collect the coins and watch out for the cars! Answer the questions.", "Welcome to GetURLicense")
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
let playerAnswer2 = ""
let correctAnswer = ""
let correctAnswers: string[] = []
let options: string[][] = []
let questions: string[] = []
let currentQuestionIndex = 0
let playerAnswer23 = ""
let correctAnswer2 = ""
let playerAnswer22 = ""
currentQuestionIndex = 0
questions = ["What is the shape of a stop sign?", "Who may use shared lanes?", "How often must motor vehicles be inspected?"]
options = [["a)Octagon", "b)Circle"], ["a)Bicyclist", "b)Motorcyclist"], ["a)Once a year", "b)Once every two years "]]
correctAnswers = ["a", "a", "a"]
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
        game.splash("high score")
    }
})
forever(function () {
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
    if (info.score() == 84) {
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
