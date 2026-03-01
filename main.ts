function ptaMeeting () {
    if (_2ndHalf == 2 || _2ndHalf == 0 || _2ndHalf == 3) {
        volunteerCount = randint(0, 5)
        adventure.addToTextlog("" + volunteerCount + " PTA members have confirmed they can volunteer at the fête.")
        volunteers += volunteerCount
        volunteersIcon.setText(convertToText(volunteers))
        _2ndHalf = 1
    }
}
function advertiseVolunteers () {
    if (_2ndHalf == 1 || _2ndHalf == 0 || _2ndHalf == 3) {
        if (Meeting == 1) {
            adventure.addToTextlog("You advertise.")
            _2ndHalf = 2
            volunteerOutcomes()
        } else {
            adventure.addToTextlog("The school wants to meet with you to confirm the plans for the event before sending out an email to all parents.")
            adventure.addToTextlog("You need to meet with the school to confirm the event first. ")
            _2ndHalf = 2
        }
    }
}
function htMeeting () {
    if (_2ndHalf == 1 || _2ndHalf == 0 || _2ndHalf == 2) {
        adventure.addToTextlog("You organise a meeting with your head teacher to talk through your plans for the day.")
        adventure.addToTextlog("The school are supportive and agree the timings and a date.")
        _2ndHalf = 3
        Meeting = 1
    }
}
function choiceSelector () {
    if (_1stHalf == 1) {
        adventure.addToTextlog("Press (A) to hold a PTA meeting.")
        adventure.addToTextlog("Press (B) to advertise for volunteers.")
        if (Meeting == 0) {
            adventure.addToTextlog("Press (UP) to meet with the school.")
        } else {
            adventure.addToTextlog("Press (UP) to choose a stall.")
        }
        _1stHalf = 2
        Weeks += -0.5
    } else if (_2ndHalf == 1) {
        adventure.addToTextlog("Press (B) to advertise for volunteers.")
        if (Meeting == 0) {
            adventure.addToTextlog("Press (UP) to meet with the school.")
        } else {
            adventure.addToTextlog("Press (UP) to choose a stall.")
        }
        _1stHalf = 1
    } else if (_2ndHalf == 2) {
        adventure.addToTextlog("Press (A) to hold a PTA meeting.")
        if (Meeting == 0) {
            adventure.addToTextlog("Press (UP) to meet with the school.")
        } else {
            adventure.addToTextlog("Press (UP) to choose a stall.")
        }
        _1stHalf = 1
        Weeks += -0.5
    } else if (_2ndHalf == 3) {
        adventure.addToTextlog("Press (A) to hold a PTA meeting.")
        adventure.addToTextlog("Press (B) to advertise for volunteers.")
        _1stHalf = 1
        Weeks += -0.5
    }
}
function showWeather () {
    currentWeather = weatherList._pickRandom()
    adventure.addToTextlog("The long range weather forecast is showing " + currentWeather + " for the day of the fête:")
    if (currentWeather == "sunny with blue skies") {
        adventure.addImageToTextLog(img`
            9 5 9 5 9 5 9 5 9 9 9 9 9 1 1 1 
            5 9 5 5 5 5 5 9 5 9 9 9 9 1 1 1 
            9 5 5 5 5 5 5 5 9 9 9 9 9 9 1 1 
            5 5 5 5 5 5 5 5 5 9 9 9 9 9 9 1 
            9 5 5 5 5 5 5 5 9 9 9 9 9 9 9 9 
            5 5 5 5 5 5 5 5 5 9 9 9 9 9 9 9 
            9 5 5 5 5 5 5 5 9 9 9 9 9 9 9 1 
            5 9 5 5 5 5 5 9 5 9 9 9 9 9 1 1 
            9 5 9 5 9 5 9 5 9 9 9 9 9 9 1 1 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            `)
    } else if (currentWeather == "sunny and cloudy") {
        adventure.addImageToTextLog(img`
            9 5 9 1 1 1 1 1 1 1 1 1 1 1 1 1 
            5 9 5 1 1 1 1 1 1 1 1 1 1 1 1 1 
            9 5 5 1 1 1 1 1 1 1 1 1 1 1 1 1 
            5 5 5 1 1 1 1 1 1 1 1 1 1 1 1 1 
            9 5 5 1 1 1 1 1 1 1 1 1 1 1 1 1 
            5 5 5 5 1 1 1 1 1 1 1 1 1 1 1 1 
            9 5 5 5 1 1 1 1 1 1 1 1 1 1 1 1 
            5 9 5 5 5 1 1 1 1 1 1 1 1 1 1 1 
            9 5 9 5 9 5 9 1 1 1 1 1 1 1 1 1 
            9 9 9 9 9 9 9 9 1 1 1 1 1 1 1 1 
            9 9 9 9 9 9 9 9 1 1 1 1 1 1 1 1 
            9 9 9 9 9 9 9 9 9 9 9 1 9 9 1 1 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            `)
    } else if (currentWeather == "a lightning storm") {
        adventure.addImageToTextLog(img`
            b b b b b b b b b b b b b b b b 
            b b b b b b b b b b b b b b b b 
            b b b b b 6 6 6 b b b b b b b b 
            b b b b b 6 6 6 6 b b b b b b b 
            6 b b b b 6 6 6 6 b b b b b b b 
            6 6 6 6 6 6 6 5 6 6 6 b b b b b 
            6 6 6 6 6 6 5 6 6 6 6 b b b b b 
            6 6 6 6 6 5 6 6 6 6 6 b b b b b 
            6 6 6 6 5 6 6 6 6 6 6 6 6 b b b 
            6 6 6 5 5 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 5 5 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 5 6 6 6 6 6 6 6 6 
            6 6 6 6 6 5 5 6 6 6 6 6 6 6 6 6 
            6 6 6 6 5 6 6 6 6 6 6 6 6 6 6 6 
            6 6 5 5 6 6 6 6 6 6 6 6 6 6 6 6 
            6 5 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            `)
    } else if (currentWeather == "windy weather") {
        adventure.addImageToTextLog(img`
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            1 1 1 1 1 6 6 6 1 1 1 1 1 1 1 1 
            1 1 1 1 1 6 6 6 6 1 1 1 1 1 1 1 
            6 1 1 1 1 6 6 6 6 1 1 1 1 1 1 1 
            6 6 6 6 6 6 6 6 6 6 6 1 1 1 1 1 
            6 6 6 6 d d 6 6 6 6 6 1 1 1 1 1 
            6 6 6 d 6 6 d 6 6 6 6 1 1 1 1 1 
            6 6 6 d 6 6 6 6 6 6 6 6 1 1 1 1 
            6 6 6 6 d d d d d d d d d 6 d 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 d d d d d d d 6 d d 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            `)
    } else if (currentWeather == "heavy rain") {
        adventure.addImageToTextLog(img`
            b b b b b b b b b b b b b b b b 
            b b b b b b b b b b b b b b b b 
            b b b b b b b b b b b b b b b b 
            b b b b b 6 6 6 b b b b b b b b 
            b b b b b 6 6 6 6 b b b b b b b 
            6 b b b b 6 6 6 6 b b b b b b b 
            6 6 6 6 6 6 6 8 6 6 6 b b b b b 
            6 6 8 6 6 6 6 6 6 6 6 b b b b b 
            6 6 6 6 6 6 6 6 6 8 6 b b b b b 
            6 6 8 6 6 6 8 6 6 6 6 6 8 b b b 
            6 6 6 6 6 8 6 6 6 6 8 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 6 
            6 6 8 6 6 6 6 6 6 8 6 6 6 6 6 6 
            6 6 6 6 6 8 6 6 6 6 6 6 8 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            `)
    } else if (currentWeather == "a drizzle") {
        adventure.addImageToTextLog(img`
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            1 1 1 1 1 6 6 6 1 1 1 1 1 1 1 1 
            1 1 1 1 1 6 6 6 6 1 1 1 1 1 1 1 
            6 1 1 1 1 6 6 6 6 1 1 1 1 1 1 1 
            6 6 6 6 6 6 6 8 6 6 6 1 1 1 1 1 
            6 6 8 6 6 6 6 6 6 6 6 1 1 1 1 1 
            6 6 6 6 6 6 6 6 6 6 6 1 1 1 1 1 
            6 6 6 6 6 6 8 6 6 6 6 6 1 1 1 1 
            6 6 6 6 6 6 6 6 6 6 8 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 6 
            6 6 8 6 6 6 6 6 6 8 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            `)
    }
}
function gameLoop () {
    music.stopAllSounds()
    music.play(music.createSong(assets.song`Main Theme`), music.PlaybackMode.LoopingInBackground)
    if (Weeks == 8) {
        showOption()
        pauseUntil(() => controller.anyButton.isPressed())
        adventure.changeLogColors(1, 5)
    } else if (Weeks == 7) {
        showOption()
        pauseUntil(() => controller.anyButton.isPressed())
        adventure.changeLogColors(1, 5)
    } else if (Weeks == 6) {
        showOption()
        pauseUntil(() => controller.anyButton.isPressed())
        adventure.changeLogColors(1, 5)
    } else if (Weeks == 5) {
        showOption()
        pauseUntil(() => controller.anyButton.isPressed())
        adventure.changeLogColors(1, 5)
    } else if (Weeks == 4) {
        showOption()
        pauseUntil(() => controller.anyButton.isPressed())
        adventure.changeLogColors(1, 5)
    } else if (Weeks == 3) {
        weeklyChallenge()
        pauseUntil(() => controller.anyButton.isPressed())
        adventure.changeLogColors(1, 5)
    } else if (Weeks == 2) {
        showOption()
        pauseUntil(() => controller.anyButton.isPressed())
        adventure.changeLogColors(1, 5)
    } else if (Weeks == 1) {
        showOption()
        pauseUntil(() => controller.anyButton.isPressed())
        adventure.changeLogColors(1, 5)
    }
    adventure.addToTextlog("You are " + Weeks + " weeks away from " + feteName + ".")
    adventure.changeLogColors(1, 9)
    showWeather()
    adventure.addToTextlog("What do you want to do?")
    choiceSelector()
    if (Weeks % 1 == 0 && wet == 0) {
        adventure.addToTextlog("Press (DOWN) to gain a wet weather plan")
    }
    pauseUntil(() => controller.anyButton.isPressed())
    if (controller.A.isPressed()) {
        ptaMeeting()
    } else if (controller.B.isPressed()) {
        advertiseVolunteers()
    } else if (controller.up.isPressed()) {
        if (Meeting == 0) {
            htMeeting()
        } else {
            chooseStall()
        }
    } else if (controller.down.isPressed()) {
        if (Weeks % 1 == 0 && wet == 0) {
            wetWeather()
        }
    }
}
function drawFeteMap (): Image {
    let mapImg = image.create(160, 120)
    let bgColor = 7
    let pathColor = 13
    let buildingColor = 8
    let buildingLabel = "SCHOOL"
    let buildingLabelX = 37
    let buildingTextColor = 1
    let entranceColor = 6
    let stallBgColor = 5
    let stallNumColor = 14
    let stallBorderColor = 1
    if (feteName == "The Fête Worse Than Death") {
        bgColor = 14
        pathColor = 2
        buildingColor = 15
        buildingLabel = "DOOM HALL"
        buildingLabelX = 27
        buildingTextColor = 2
        entranceColor = 4
        stallBgColor = 10
        stallNumColor = 1
        stallBorderColor = 2
    } else if (feteName.indexOf("Zx") >= 0) {
        bgColor = 6
        pathColor = 9
        buildingColor = 10
        buildingLabel = "MOTHERSHIP"
        buildingLabelX = 22
        buildingTextColor = 5
        entranceColor = 8
        stallBgColor = 3
        stallNumColor = 14
        stallBorderColor = 5
    }
    mapImg.fill(bgColor)
    mapImg.fillRect(0, 0, 110, 28, buildingColor)
    mapImg.print(buildingLabel, buildingLabelX, 11, buildingTextColor)
    mapImg.fillRect(112, 0, 48, 28, entranceColor)
    mapImg.print("ENTRANCE", 113, 11, buildingTextColor)
    mapImg.fillRect(0, 28, 160, 5, pathColor)
    let chosenStalls = stalls.filter(s => s.chosen == true)
    let stallXPos = [2, 34, 66, 98, 130]
    let stallYPos = [34, 62, 90]
    for (let i = 0; i < chosenStalls.length && i < 15; i++) {
        let col = i % 5
        let row = Math.floor(i / 5)
        let px = stallXPos[col]
        let py = stallYPos[row]
        mapImg.fillRect(px, py, 26, 22, stallBgColor)
        mapImg.drawRect(px, py, 26, 22, stallBorderColor)
        let lx = i < 9 ? px + 10 : px + 7
        mapImg.print("" + (i + 1), lx, py + 8, stallNumColor)
    }
    return mapImg
}
function dayOfFete () {
    adventure.addToTextlog("ITS THE DAY OF " + feteName.toUpperCase() + "!")
    if (weatherList.indexOf(currentWeather) <= 1) {
        adventure.addToTextlog("The weather is " + currentWeather + " today!")
        adventure.addToTextlog("This is good!")
        finalWeather = true
    } else {
        adventure.addToTextlog("The weather is " + currentWeather + " today.")
        adventure.addToTextlog("Unlucky!")
        finalWeather = false
    }
    adventure.addToTextlog("In total you have " + convertToText(volunteers + stallNum * 2) + " volunteers.")
    adventure.addToTextlog("" + convertToText(volunteers) + " volunteers free and " + convertToText(stallNum) + " stalls.")
    if (finalWeather == true) {
        adventure.addToTextlog("560 people came to your fête!")
        adventure.addToTextlog("You raised £" + convertToText(stallNum * 50 * (560 / 2) / 100) + " for your school!")
        score = stallNum * 50 * (560 / 2) / 100
    } else {
        if (wet == 1) {
            adventure.addToTextlog("420 people came to your fête.")
            adventure.addToTextlog("You raised £" + convertToText(stallNum * 50 * (420 / 2) / 100) + " for your school!")
            score = stallNum * 50 * (420 / 2) / 100
        } else {
            adventure.addToTextlog("280 people came to your fête.")
            adventure.addToTextlog("You raised £" + convertToText(stallNum * 50 * (280 / 2) / 100) + " for your school!")
            score = stallNum * 50 * (280 / 2) / 100
        }
    }
    adventure.addToTextlog("Here is a map of your fête grounds:")
    adventure.addImageToTextLog(drawFeteMap())
    let chosenStalls = stalls.filter(s => s.chosen == true)
    for (let i = 0; i < chosenStalls.length; i++) {
        adventure.addToTextlog("" + (i + 1) + ". " + chosenStalls[i].name)
    }
}
function wetWeather () {
    adventure.addToTextlog("For some reason it takes half a week to figure out your wet weather plan.")
    adventure.addToTextlog("No-one knows why.")
    adventure.addToTextlog("The gods of the universe still ponder over it...")
    adventure.addToTextlog("Anyhoo, you still have a wet weather plan!")
    adventure.addToTextlog("WOOHOO!")
    wet = 1
    _1stHalf = 1
    Weeks += -0.5
}
function chooseStall () {
    if (_2ndHalf == 2 || _2ndHalf == 1 || _1stHalf == 1) {
        adventure.addImageToTextLog(img`
            f f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f f 
            f f f f 5 5 5 5 f f f f f f f f 
            f f f f 5 5 5 5 f f f f f f f f 
            f f 4 4 5 5 5 5 f f f f f f f f 
            f f 4 4 5 5 5 5 f f f f f f f f 
            f f f f f f 5 5 5 5 5 5 f f f f 
            f f f f f f 5 5 5 5 5 5 f f f f 
            f f f f f f 5 5 5 5 5 5 f f f f 
            f f f f f f 5 5 5 5 5 5 f f f f 
            e e e e e e e e e e e e e e e e 
            e e e e e e e e e e e e e e e e 
            e e f f f f f f f f f f f f e e 
            e e f f f f f f f f f f f f e e 
            e e f f f f f f f f f f f f e e 
            e e f f f f f f f f f f f f e e 
            `)
        if (volunteers >= 2) {
            music.stopAllSounds()
            adventure.addToTextlog("Which stall would you like?")
            visibleStalls = []
            shuffledStalls = hello.shuffleArray(stalls.filter(s => s.chosen == false))
            visibleStalls = shuffledStalls.slice(0, 3)
for (let f = 0; f <= visibleStalls.length - 1; f++) {
                adventure.addToTextlog("" + Key_Binds[f] + visibleStalls[f].name + ".")
            }
            pauseUntil(() => controller.anyButton.isPressed())
            if (controller.A.isPressed()) {
                for (let q = 0; q <= stalls.length - 1; q++) {
                    if (stalls[q].name == visibleStalls[0].name) {
                        stalls[q].chosen = true
stallNum += 1
                        stallsIcon.setText(convertToText(stallNum))
                        volunteers += -2
                        volunteersIcon.setText(convertToText(volunteers))
                        occupiedVolunteers += 2
                        occupiedVolunteersIcon.setText(convertToText(occupiedVolunteers))
                        adventure.addToTextlog("You have added " + stalls[q].name + ".")
                        currentStalls = []
                        for (let h = 0; h <= stalls.length - 1; h++) {
                            if (stalls[h].chosen == true) {
                                currentStalls.push(stalls[h].name)
                            }
                        }
                        adventure.addToTextlog("You now have " + currentStalls.join(", ") + ".")
                    }
                }
            } else if (controller.B.isPressed()) {
                for (let r = 0; r <= stalls.length - 1; r++) {
                    if (stalls[r].name == visibleStalls[1].name) {
                        stalls[r].chosen = true
stallNum += 1
                        stallsIcon.setText(convertToText(stallNum))
                        volunteers += -2
                        volunteersIcon.setText(convertToText(volunteers))
                        occupiedVolunteers += 2
                        occupiedVolunteersIcon.setText(convertToText(occupiedVolunteers))
                        adventure.addToTextlog("You have added " + stalls[r].name + ".")
                        currentStalls = []
                        for (let i = 0; i <= stalls.length - 1; i++) {
                            if (stalls[i].chosen == true) {
                                currentStalls.push(stalls[i].name)
                            }
                        }
                        adventure.addToTextlog("You now have " + currentStalls.join(", ") + ".")
                    }
                }
            } else if (controller.up.isPressed()) {
                for (let s = 0; s <= stalls.length - 1; s++) {
                    if (stalls[s].name == visibleStalls[2].name) {
                        stalls[s].chosen = true
stallNum += 1
                        stallsIcon.setText(convertToText(stallNum))
                        volunteers += -2
                        volunteersIcon.setText(convertToText(volunteers))
                        occupiedVolunteers += 2
                        occupiedVolunteersIcon.setText(convertToText(occupiedVolunteers))
                        adventure.addToTextlog("You have added " + stalls[s].name + ".")
                        currentStalls = []
                        for (let j = 0; j <= stalls.length - 1; j++) {
                            if (stalls[j].chosen == true) {
                                currentStalls.push(stalls[j].name)
                            }
                        }
                        adventure.addToTextlog("You now have " + currentStalls.join(", ") + ".")
                    }
                }
            }
        } else {
            adventure.addToTextlog("Sorry, you don't have enough volunteers.")
            adventure.addToTextlog("Each stall needs two volunteers.")
        }
        _2ndHalf = 3
    }
}
function showOption () {
    music.stopAllSounds()
    adventure.addImageToTextLog(img`
        .............111111.............
        ............1ffffff1............
        ............1fffffff1...........
        ...........1ffff5fff1...........
        ...........1ffff5ffff1..........
        ..........1ffff555fff1..........
        ..........1fff5555ffff1.........
        .........1fff555555ffff1........
        ........1ffff5555555fff1........
        ........1ffff5555555fff1........
        ........1ffff55555555fff1.......
        .......1ffff555fff555fff1.......
        .......1fff5555fff5555fff1......
        .......1ff55555fff5555fff1......
        ......1fff55555fff55555ff1......
        ......1ff555555fff55555fff1.....
        ......1ff555555fff555555ff1.....
        .....1fff555555fff555555fff1....
        ....1fff5555555fff555555ffff1...
        ....1fff5555555fff5555555fff1...
        ...1ffff5555555fff5555555ffff1..
        ..1ffff55555555fff55555555fff1..
        ..1ffff55555555555555555555fff1.
        ..1fff555555555555555555555fff1.
        .1ffff555555555fff5555555555fff1
        1ffff5555555555fff5555555555fff1
        1ffff5555555555fff55555555555ff1
        1fff5555555555555555555555555ff1
        1ff555555555555555555555555555f1
        1ff555555555555555555555555555f1
        1ffffffffffffffffffffffffffffff1
        11111111111111111111111111111111
        `)
    adventure.changeLogColors(5, 9)
    music.play(music.createSoundEffect(WaveShape.Noise, 2500, 0, 255, 255, 1000, SoundExpressionEffect.Vibrato, InterpolationCurve.Logarithmic), music.PlaybackMode.InBackground)
    timer.background(function () {
        pause(1000)
        music.play(music.createSong(assets.song`Main Theme`), music.PlaybackMode.LoopingInBackground)
    })
    adventure.addToTextlog("Challenge To Overcome This Week")
    adventure.changeLogColors(5, 5)
    option = []
    events = hello.shuffleArray(events)
    option = events.slice(0, 1)
events.splice(0, 1)
for (let k = 0; k <= option.length - 1; k++) {
        adventure.addToTextlog("" + `${option[k].text}` + " Press any key to continue.")
        if (option[k].type == "V") {
            volunteers += option[k].amount
            volunteersIcon.setText(convertToText(volunteers))
        } else if (option[k].type == "S") {
            stallNum += option[k].amount
            stallsIcon.setText(convertToText(stallNum))
        } else if (option[k].type == "W") {
            Weeks += option[k].amount
        } else if (option[k].type == "A") {
            volunteers += option[k].amount
            volunteersIcon.setText(convertToText(volunteers))
            volunteersIcon.setIcon(assets.image`Alien`)
            occupiedVolunteersIcon.setIcon(assets.image`occupiedAliens`)
        }
    }
}
function volunteerOutcomes () {
    music.stopAllSounds()
    adventure.addImageToTextLog(img`
        f f f f f f 4 4 8 8 f f f f 4 4 
        f f f f f f 4 4 8 8 f f f f 4 4 
        f f f f f f 4 4 4 4 f f f f 6 6 
        f f f f f f 4 4 4 4 f f f f 6 6 
        f f f f 6 6 6 6 6 6 f f 6 6 f f 
        f f f f 6 6 6 6 6 6 f f 6 6 f f 
        f f 6 6 f f 6 6 6 6 6 6 f f f f 
        f f 6 6 f f 6 6 6 6 6 6 f f f f 
        f f 6 6 f f 6 6 6 6 f f f f f f 
        f f 6 6 f f 6 6 6 6 f f f f f f 
        f f 4 4 f f 6 6 6 6 f f f f f f 
        f f 4 4 f f 6 6 6 6 f f f f f f 
        f f f f 6 6 f f f f 6 6 f f f f 
        f f f f 6 6 f f f f 6 6 f f f f 
        f f f f 6 6 f f f f 6 6 f f f f 
        f f f f 6 6 f f f f 6 6 f f f f 
        `)
    music.play(music.createSong(assets.song`Volunteers`), music.PlaybackMode.LoopingInBackground)
    adventure.addToTextlog("How would you like to advertise for volunteers?")
    adventure.addToTextlog("Press (A) to email out to all the parents.")
    adventure.addToTextlog("Press (B) to use social media.")
    adventure.addToTextlog("Press (UP) to ask at pickup.")
    pauseUntil(() => controller.anyButton.isPressed())
    if (controller.A.isPressed()) {
        adventure.addToTextlog("You send out an E-mail to all the parents")
        volunteerCount = randint(0, 2)
        adventure.addToTextlog("" + volunteerCount + " parents have confirmed they can attend.")
        volunteers += volunteerCount
        volunteersIcon.setText(convertToText(volunteers))
    } else if (controller.B.isPressed()) {
        adventure.addToTextlog("The only reply is a scammer.")
    } else if (controller.up.isPressed()) {
        volunteerCount = randint(1, 3)
        if (volunteerCount == 1) {
            adventure.addToTextlog("All the classes were out on a school trip, only your class was there.")
            adventure.addToTextlog("1 parent decided to join.")
            volunteers += volunteerCount
            volunteersIcon.setText(convertToText(volunteers))
        } else if (volunteerCount == 2) {
            adventure.addToTextlog("2 new parents decided to make a good impression.")
            adventure.addToTextlog("They both decided to join.")
            volunteers += volunteerCount
            volunteersIcon.setText(convertToText(volunteers))
        } else if (volunteerCount == 3) {
            adventure.addToTextlog("3 parents decided to make a good impression.")
            adventure.addToTextlog("They all decided to join.")
            volunteers += volunteerCount
            volunteersIcon.setText(convertToText(volunteers))
        }
    }
}
function weeklyChallenge () {
    music.stopAllSounds()
    adventure.addImageToTextLog(img`
        .............111111.............
        ............1ffffff1............
        ............1fffffff1...........
        ...........1ffff5fff1...........
        ...........1ffff5ffff1..........
        ..........1ffff555fff1..........
        ..........1fff5555ffff1.........
        .........1fff555555ffff1........
        ........1ffff5555555fff1........
        ........1ffff5555555fff1........
        ........1ffff55555555fff1.......
        .......1ffff555fff555fff1.......
        .......1fff5555fff5555fff1......
        .......1ff55555fff5555fff1......
        ......1fff55555fff55555ff1......
        ......1ff555555fff55555fff1.....
        ......1ff555555fff555555ff1.....
        .....1fff555555fff555555fff1....
        ....1fff5555555fff555555ffff1...
        ....1fff5555555fff5555555fff1...
        ...1ffff5555555fff5555555ffff1..
        ..1ffff55555555fff55555555fff1..
        ..1ffff55555555555555555555fff1.
        ..1fff555555555555555555555fff1.
        .1ffff555555555fff5555555555fff1
        1ffff5555555555fff5555555555fff1
        1ffff5555555555fff55555555555ff1
        1fff5555555555555555555555555ff1
        1ff555555555555555555555555555f1
        1ff555555555555555555555555555f1
        1ffffffffffffffffffffffffffffff1
        11111111111111111111111111111111
        `)
    adventure.changeLogColors(5, 9)
    music.play(music.createSoundEffect(WaveShape.Noise, 2500, 0, 255, 255, 1000, SoundExpressionEffect.Vibrato, InterpolationCurve.Logarithmic), music.PlaybackMode.InBackground)
    timer.background(function () {
        pause(1000)
        music.play(music.createSong(assets.song`Main Theme`), music.PlaybackMode.LoopingInBackground)
    })
    adventure.addToTextlog("Challenge To Overcome This Week")
    adventure.changeLogColors(5, 5)
    adventure.addToTextlog("Oh no! One of your volunteers is moving house.")
    adventure.addToTextlog("You lose 1 volunteer. Press any button to continue.")
    volunteers += -1
    volunteersIcon.setText(convertToText(volunteers))
}
let occupiedVolunteers = 0
let stallNum = 0
let finalWeather = false
let wet = 0
let currentWeather = ""
let Meeting = 0
let volunteerCount = 0
let _2ndHalf = 0
let stallsIcon: TextSprite = null
let volunteers = 0
let occupiedVolunteersIcon: TextSprite = null
let volunteersIcon: TextSprite = null
let Key_Binds: string[] = []
let weatherList: string[] = []
let Weeks = 0
let _1stHalf = 0
let currentStalls: string[] = []
let score = 0
let feteName = ""
let feteNames: string[] = [
    "The Spectacular Summer Fête",
    "The Magnificent Midsummer Fête",
    "The Grand Garden Fête",
    "The Jolly July Jamboree",
    "The Tremendous Tuck Shop Fête",
    "The Whizzy Whizzbang Fête",
    "The Dazzling Disco Fête",
    "The Wobbly Wellies Fête",
    "The Super Splatastic Fête",
    "The Bubbly Bouncy Castle Bash",
    "The Marvellous Muddy Fête",
    "The Absurdly Amazing Annual Fête",
    "The Very Important Fête Indeed",
    "The Utterly Splendid Fête of Splendour",
    "The Gloriously Chaotic Summer Fête",
    "The Fête Worse Than Death",
    "Zx'Qlarb's Annual Human Gathering Ritual"
]
game.onGameOver(function () {
    console.log("score:" + score)
})
namespace hello {
    //% block
    export function shuffleArray(arr: any[]) {
        for (let m = arr.length - 1; m > 0; m--) {
            const n = Math.randomRange(0, m)
            const temp = arr[m]
            arr[m] = arr[n]
            arr[n] = temp
        }
        return arr
    }
}
interface list {
    text: string,
    type: string,
    amount: number
}
interface Stall {
    name: string,
    chosen: boolean
}
let events: list[]
let stalls: Stall[]
let option: list[]
let visibleStalls: Stall[]
let shuffledStalls: Stall[]
_1stHalf = 1
Weeks = 8
weatherList = [
"sunny with blue skies",
"sunny and cloudy",
"a drizzle",
"windy weather",
"heavy rain",
"a lightning storm"
]
Key_Binds = ["Press (A) for ", "Press (B) for ", "Press (UP) for "]
volunteersIcon = textsprite.create("0")
occupiedVolunteersIcon = textsprite.create("0")
volunteers = 0
stallsIcon = textsprite.create("0")
volunteersIcon.z = 11
occupiedVolunteersIcon.z = 11
stallsIcon.z = 11
volunteersIcon.setIcon(assets.image`Human`)
occupiedVolunteersIcon.setIcon(assets.image`occupiedHumans`)
stallsIcon.setIcon(assets.image`Stalls`)
volunteersIcon.setPosition(140, 10)
stallsIcon.setPosition(140, 25)
occupiedVolunteersIcon.setPosition(140, 40)
volunteersIcon.setBorder(1, 3, 2)
occupiedVolunteersIcon.setBorder(1, 3, 2)
stallsIcon.setBorder(1, 3, 2)
volunteersIcon.setOutline(1, 6)
occupiedVolunteersIcon.setOutline(1, 6)
stallsIcon.setOutline(1, 6)
currentStalls = []
events = [
{ text: "2 of your parent volunteers pull out. Lose 2 volunteers.", type: "V", amount: -2 },
{ text: "Nobody has responded to your request for gazebos. You decide to cut out two stalls just in case everything has to fit inside the school.", type: "S", amount: -2 },
{ text: "Great news! Two people have volunteered to run the hot food stall and buy all the ingredients. Gain a hot food stall.", type: "S", amount: 1 },
{ text: "You are feeling overwhelmed by the length of your To Do list so you reach out to your PTA team. Three people offer to take some tasks off your hands. You gain 3 volunteers.", type: "V", amount: 3 },
{ text: "The teachers union announces a series of strikes, one of which would be on the day of the fête. If the strike goes ahead the school would have to close. Your headteacher suggests the best course of action is to postpone the fête.", type: "W", amount: 1 },
{ text: "You buy your favourite drink and snack to have as a reward for after the fête and all your hard work. You label/hide them so your family doesn't accidentally eat them!", type: "N", amount: 0 },
{ text: "Aargh! You burnt the cakes you made for the cake sale! You need to find time to go out and buy more ingredients and then time to make the cakes all over again.", type: "N", amount: 0 },
{ text: "A company donates you an amazing prize worth a lot of money - and you don't know how to deal with it! You decide to run a game to win the prize separately - gain a stall.", type: "S", amount: 1 },
{ text: "A sickness bug is sweeping round the school - it hasn't reached your family yet but there is still time! You remind your children how to wash their hands!!", type: "N", amount: 0 },
{ text: "A parent offers to make a show-stopper cake which you could raffle off - you decide to make a game of 100 squares to allow someone to win the cake. Gain a stall. ", type: "S", amount: 1 },
{ text: "Your head teacher has just reminded you that the school recently became a nut-free school. You need to check all the food and drink items again to make sure they are nut-free. Lose one volunteer to complete this task.", type: "V", amount: -1 },
{ text: "The coffee van person phones to say he double-booked your event and now he can't make it. Lose one stall.", type: "S", amount: -1 },
{ text: "A supermarket Community champion donates your fête 100 free burgers and 100 free sausages for the BBQ. Get in!", type: "N", amount: 0 },
{ text: "A local music group confirms they will come and provide free entertainment for an hour of the fête. This encourages more people to attend.", type: "N", amount: 0 },
{ text: "One more volunteer has signed up to help.", type: "V", amount: 1 },
{ text: "A couple of parents donate 5 bin bags full of teddies - this is enough to run a Teddy Tombola stall - bonus!", type: "S", amount: 1 },
{ text: "A PTA committee member tells you she has agreed for a school mum to bring items in to sell on a stall. The mum doesn't want to run the stall, she just wants to provide the items and let someone else sell them. This is an extra stall that you knew nothing about! What do you do now?", type: "S", amount: 1 },
{ text: "3 Teaching assistants offer to volunteer for an hour each. Hooray - gain 3 volunteers!", type: "V", amount: 3 },
{ text: "A group of teachers say that they want to run a teacher stall. Gain another stall - hooray!", type: "S", amount: 1 },
{ text: "You still can't find the tongs you used at a previous PTA event...they never made it back to your kitchen. Someone else offers to lend theirs. You suggest they label them clearly!", type: "N", amount: 0 },
{ text: "You look through the donations so far for the bottle tombola - only half the donations are useable as others are open, past the best before date or half used. Do you wait and see if you get more donations or do you cut your losses and use the bottles elsewhere? Decisions, decisions!", type: "N", amount: 0 },
{ text: "You remember that the hot water urn broke at the fête last year and was never replaced. You need a new plan for keeping water hot for tea and coffee at your cake stall.", type: "N", amount: 0 },
{ text: "School has an event in the hall on the day of the fête so you can't use the hall until 1 hour before the event starts.", type: "N", amount: 0 },
{ text: "Your PTA treasurer sends you an urgent message to say that they have only just noticed that the small lotteries licence has expired and you can only sell tickets for the raffle at the event, and not before hand.", type: "N", amount: 0 },
{ text: "You try to inflate the paddling pool for hook-a-duck but it has a puncture and won't stay up! What do you do? You go off in search of some duct tape!", type: "N", amount: 0 },
{ text: "The day before the fête, the Ofsted inspector turns up. You lose all your staff volunteers and the head teacher says the fête  needs to be postponed!", type: "W", amount: 1 },
{ text: "You realise that the wrong date has been put on all your publicity and marketing! Disaster! Lose a volunteer to try and sort this out.", type: "V", amount: -1 },
{ text: "Despite your weeks of advertising, social media posts, requests for donations, emails, posters and flyers, a significant number of parents claim they didn't know the school was planning a fête. You hold your head in your hands and take deep breaths. Then carry on.", type: "N", amount: 0 },
{ text: "Aliens come down from outer space, and ask to join the fête and help, 4 of them hide so they can help, but the others are taken away by the army.", type: "A", amount: 4 },
{ text: "Your friend misunderstands how to label the items for the tombola and makes it a game where each ticket drawn wins a prize. That stall only makes one third of the profit you were hoping for.", type: "N", amount: 0 }
]
stalls = [
{ name: "Hook-A-Duck", chosen: false },
{ name: "Hot Food", chosen: false },
{ name: "Cakes", chosen: false },
{ name: "Hot Drinks", chosen: false },
{ name: "Tombola", chosen: false },
{ name: "Tin Can Alley", chosen: false },
{ name: "Facepainting", chosen: false },
{ name: "Beat The Goalie", chosen: false },
{ name: "Welly Wanging", chosen: false },
{ name: "Blindfold Drawing", chosen: false },
{ name: "Secondhand Uniform", chosen: false },
{ name: "Bric-A-Brac", chosen: false },
{ name: "Treasure Hunt", chosen: false },
{ name: "Glitter Tattoos", chosen: false },
{ name: "Magic Tricks", chosen: false },
{ name: "Secondhand Books", chosen: false },
{ name: "Make A Bracelet", chosen: false },
{ name: "Splat The Rat", chosen: false },
{ name: "Mocktails", chosen: false },
{ name: "Nail Painting", chosen: false },
{ name: "Guess The Sweets In The Jar", chosen: false },
{ name: "Guess The Name Of The Cuddly Toy", chosen: false },
{ name: "Feel Whats In The Box", chosen: false}
]
game.splash("Press (A) to start!")
feteName = feteNames._pickRandom()
adventure.addToTextlog("Welcome to...")
music.play(music.createSoundEffect(WaveShape.Noise, 1, 5000, 255, 0, 2000, SoundExpressionEffect.Tremolo, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
adventure.addImageToTextLog(img`
    111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    f1111111111111111111111111ff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    fff1111111111111111111111fffff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1fff111111111111111111111ffffffff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    11fff11111111111111111111ff11ffffff1f11111111111111111111111111111111111111111111111111111111111111111111111111111111111
    111ffff111111111111111111ff11ffffff1ff1111111111111111111111111111111111111111111111111111111111111111111111111111111111
    11111fff11111111111111111111fff11ff1ff111111111111111111111111111111111111111111111111111111ffff111111111111111111111111
    111111ffff111111111111111111fff11ff1ff111111111111111111111111111111111111111111111111111111ffff111111111111111111111111
    11111111ffff1111111111111111ff111ff1fffff11111111111111111ff111111111111fffffffffff11111111ffffff11111111111111111111111
    111111111ffff11111111111111fff111111ffffff111111111111111ffffffff1111111fffffffffff11111111ff11ff11111111111111111111111
    11111111119ffff111111111ff1ff1111111ff11ff11111ffff111111fffffffff111111ff111ff11ff11111111ff11fff1111111111111111111111
    11111111119ffffff11111111ffff1111111ff11ff111ffffff11111111ff111ff111111ff111ff1fff11111111ff11fff11111111111111111111df
    111111111199968ffff1111111ffff111111ff11ff111ff111ff1111111ff1111ff111111ff11ff11f111111111ffffffff11111111111111111dfff
    1111111111999668fffff1111111fff1111fff11ff11ffff11ff1111111ff1111ff1111111111ff111111111111ff1111ff1111ff111111111bfffff
    1111111111999666688ffff1111111111fffff11ff11ffffffff1111111ff111ff11111111111ff111111111111ff1111fff111ff111111dfffffff1
    111111111199966666888ffff1111111111fff1fff11fff111111111111ffffff111111111111ff111111111111ff11111ff11111111dfffffff1111
    11111111119966666666888ffff1111111111111fff11fffffff1111111fffff111111111111ffff11111ff111fff1111111111111bffffff2221111
    111111111199666666666668ffffff1111111111111111ffff111111111ff1111111111111ffffffff111ff1111111111111111bfffffff222221111
    1111111111966666666666666bcfffff1111111111111111111111111ffffff111111ff111ffffffff111111111111111111bfffffff222222241111
    1111111111966666666666699ddbeefffff1111111111111111111111ffffff111111ff1111111111111111111111111dbfffffee222222222231111
    1111111111966666666666911ddbbbeeeffffff111111111111111111111111111111111111111111111111111111dfffffffff44222222222211111
    1111111111966666666699111ddbbbbeeeeefffffff111111111111111111111111111111111111111111111dfffffffccbdd3344222222222211111
    1111111111966666666911111dbbbbeeeeeeeeefffffffff11111111111111111111111111111111111ddfffffffffcaa311d3344222222222211111
    11111111111666666691111111bbbbeeeeeeeeeeeebcfffffffffff11111111111111111111dffffffffffffffcaaaaaa311dd334422222222211111
    11111111111666669911111111bbbbeeeeeeeeeebd1dbcffffffffffffffffffffffffffffffffffffffffaaaaaaaaaaa1111d334422222222411111
    11111111111666691111111111bbbeeeeeeeeee3d111dddd77ffffffffffffffffffffffffffffffff33333aaaaaaaaa311111dd3422222222d11111
    11111111111666911111111111bbbeeeeeeeee311111ddd77777777777cffff555555555555555551d33333aaaaaaaaa31111111d442222222111111
    1111111111169d111111111111dbeeeeeeeee31111111dd77777777777777dd5555555555555555d1d33333aaaaaaaaa111111111d42222222111111
    11111111111911111111111111dbeeeeeeebd11111111dd7777777777777d1dd55555555555555511133333aaaaaaaa31111111111d4222222111111
    111111111111111111111111111beeeeeebd111111111dd777777777777d111dd5555555555555d11113333aaaaaaaa311111111111d322222111111
    111111111111111111111111111eeeeee3111111111111d77777777777d1111dd555555555555511111d3333aaaaaaa1111111111111132223111111
    111111111111111111111111111beeee31111111111111dd7777777777111111d555555555555d111111d333aaaaaa3111111111111111322d111111
    111111111111111111111111111beebd111111111111111d777777777d111111d55555555555d11111111d33aaaaaa31111111111111111321111111
    111111111111111111111111111debd1111111111111111d77777777d11111111d555555555d111111111133aaaaaa111111111111111111d1111111
    111111111111111111111111111131111111111111111111d777777d111111111d555555555d1111111111133aaaa311111111111111111111111111
    111111111111111111111111111111111111111111111111d77777d11111111111d5555555d11111111111113aaaa311111111111111111111111111
    111111111111111111111111111111111111111111111111d77777d11111111111d5555555d111111111111113aaa111111111111111111111111111
    1111111111111111111111111111111111111111111111111d777d1111111111111d55555d11111111111111113a3111111111111111111111111111
    1111111111111111111111111111111111111111111111111d77d111111111111111d5555d1111111111111111133111111111111111111111111111
    1111111111111111111111111111111111fff1111111111111dd1111111111111111d555d11111111111111111111111111111111111111111111111
    11111111111111111111111111111111111fffff11111111111111111111111111111d55111111111111111ff1111111111111111111111111111111
    11111111111111111111111111111111111fffffff111111111111111111111111111d5d111111111111111ff1111111111111111111111111111111
    11111111111111111111111111111111111ff111fff1111111111111111111111111111111111111111111ffffff1111111111111111111111111111
    11111111111111111111111111111111111ff111fff1111111111111fff1111111111111111111111ffff1fff1111111111111111111111111111111
    11111111111111111111111111111111111ff111fff11fff111111111ff111111111111111111111fffff11fff111111111111111111111111111111
    1111111111111111111111111111111111ffffffff11ffffff1111ff11f111111ff1111ffffff11ff111111fff1ff111111111111111111111111111
    1111111111111111111111111111111111ffffffff1ff1111f111ffffff1111fffff11ff111ff11ffffff11fff11f111111111111111111111111111
    11111111111111111111111111111111f1ff1111111ff1111ff11f111ff111ff11ff111f11fff111ffffff11ff11f111111111111111111111111111
    11111111111111111111111111111111fffff111111ff1111ff1ff111ff111ff11ff1111fffff1111111ff11fffff111111111111111111111111111
    111111111111111111111111111111111fffff11111ff1111ff1ff111ff111ff1111111ff11ff111f111ff111fff1111111111111111111111111111
    1111111111111111111111111111111111111f11111fff11ff11ff111ff111ff111111ff111fff11ffffff1111111111111111111111111111111111
    11111111111111111111111111111111111111111111ffffff111ffffff111fffffff1fffffffff11ffff11111111111111111111111111111111111
    1111111111111111111111111111111111111111111111ff11111fffffff111fffff111fff111f111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    `)
adventure.addToTextlog("..." + feteName + "!")
adventure.clearTextLog()
while (Weeks > 0) {
    gameLoop()
}
dayOfFete()
