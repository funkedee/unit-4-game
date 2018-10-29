$(document).ready(function () {
    var obiWanKenobi = {
        name: "Obi-Wan-Kenobi",
        healthPoints: 135,
        originalAttackPower: 12,
        attackPower: 12,
        counterAttackPower: 12,
    };

    var emperorPalpatine = {
        name: "Emperor Palpatine",
        healthPoints: 120,
        originalAttackPower: 14,
        attackPower: 14,
        counterAttackPower: 15,
    };

    var darthVader = {
        name: "Darth Vader",
        healthPoints: 125,
        originalAttackPower: 10,
        attackPower: 10,
        counterAttackPower: 16,
    };

    var yoda = {
        name: "Yoda",
        healthPoints: 130,
        originalAttackPower: 12,
        attackPower: 12,
        counterAttackPower: 17,
    };

    var rpgGame = {
        yourCharacter: "",
        defender: "",
        startGame: function () {
            // when you choose your character
            $(".character_button").on("click", function () {
                if (rpgGame.yourCharacter === "") {

                    // saves your character to rpgGame.yourCharacter
                    if (this.id === "obi-wan-kenobi") {
                        rpgGame.yourCharacter = obiWanKenobi;
                    }
                    else if (this.id === "emperor-palpatine") {
                        rpgGame.yourCharacter = emperorPalpatine;
                    }
                    else if (this.id === "darth-vader") {
                        rpgGame.yourCharacter = darthVader;
                    }
                    else if (this.id === "yoda") {
                        rpgGame.yourCharacter = yoda;
                    }

                    // adds your_character class to clicked button
                    $(this).addClass("your_character");

                    // changes "choose your Character" to "your character"
                    $(".choose_character").text("Your Character");

                    // displays "choose which enemy to attack"
                    $("#enemies").append("<h2>Choose which enemy to attack</h2>");

                    // selects the other characters
                    $(".character_button").not(this).each(function () {

                        // adds enemies class to them
                        $(this).addClass("enemies");

                        // moves them to #enemies div
                        $("#enemies").append(this);
                    });
                };
             rpgGame.chooseEnemy();
            });
        },

        chooseEnemy: function () {
            // when you choose your enemy...
            $(".enemies").on("click", function () {
                if (rpgGame.defender === "") {

                    // saves it to rpgGame.defender
                    if (this.id === "obi-wan-kenobi") {
                        rpgGame.defender = obiWanKenobi;
                    }
                    else if (this.id === "emperor-palpatine") {
                        rpgGame.defender = emperorPalpatine;
                    }
                    else if (this.id === "darth-vader") {
                        rpgGame.defender = darthVader;
                    }
                    else if (this.id === "yoda") {
                        rpgGame.defender = yoda;
                    };

                    // adds defender class to it
                    $(this).addClass("defender");

                    // creates attack button
                    $("#defender").append("<button class= 'attack_button'>Attack!</button>")

                    // displays defender
                    $("#defender").append("<h2 class ='defender_text'>Defender<h2>");

                    // moves it to #defender div
                    $("#defender").append(this);

                    // changes "choose which enemy to attack" to "enemies"
                    $("#enemies h2").text("Enemies")

                    rpgGame.attack();
                };
            });
        },

        attack: function () {
            // when you click attack... 
            $(".attack_button").on("click", function () {

                // subtract your character attack power from defender hp
                rpgGame.defender.healthPoints = rpgGame.defender.healthPoints - rpgGame.yourCharacter.attackPower;
                $(".defender").find(".hp").text(rpgGame.defender.healthPoints);

                // subtract defender counter attack power from your character hp
                rpgGame.yourCharacter.healthPoints = rpgGame.yourCharacter.healthPoints - rpgGame.defender.counterAttackPower;
                $(".your_character").find(".hp").text(rpgGame.yourCharacter.healthPoints);

                // displays gamplay text
                $("#gameplay-text").text("You attacked " + rpgGame.defender.name + " for " + rpgGame.yourCharacter.attackPower + " damage.")
                $("#gameplay-text").append("<br>" + rpgGame.defender.name + " attacked you back for " + rpgGame.defender.counterAttackPower + " damage.");

                // add original attack power to attack power
                rpgGame.yourCharacter.attackPower = rpgGame.yourCharacter.attackPower + rpgGame.yourCharacter.originalAttackPower;

                // if you defeat defender
                if (rpgGame.defender.healthPoints <= 0) {
                    rpgGame.defeatDefender();
                };

                // if you win
                if ($("#characters > button").length === 1 &&  $("#defender > button").length === 0 && $("#enemies > button").length === 0) {
                    rpgGame.win();
                };

                // if you lose
                if (rpgGame.yourCharacter.healthPoints <= 0) {
                    rpgGame.lose();
                };
            });
        },

        defeatDefender: function () {
             // clear defender
                    $("#defender").empty();

                    // display gamplay text
                    $("#gameplay-text").text("You have defeated " + rpgGame.defender.name + ". Choose a new enemy to fight.")

                    // reset defender
                    rpgGame.defender = "";

                    rpgGame.chooseEnemy();
        },

        lose: function () {
            // display gamplay text
            $("#gameplay-text").text("You have been defeated. Click restart to play again.");

            // replace attack button with restart button
            $("#defender").html("<button class= 'restart_button'>Restart</button>")

            rpgGame.restart();
        },

        win: function () {
             // display gamplay text
             $("#gameplay-text").text("YOU WIN!!! Click restart to play again.");

             // replace attack button with restart button
             $("#defender").html("<button class= 'restart_button'>Restart</button>")

            //  clear enemies div
            $("#enemies").empty();
 
             rpgGame.restart();
        },

        restart: function () {
            // when you click restart
            $(".restart_button").on("click", function () {

                // reset variables
                obiWanKenobi.healthPoints = 135;
                obiWanKenobi.attackPower = 12;
                emperorPalpatine.healthPoints = 120;
                emperorPalpatine.attackPower = 14;
                darthVader.healthPoints = 125;
                darthVader.attackPower = 10;
                yoda.healthPoints = 130;
                yoda.attackPower = 12;
                rpgGame.yourCharacter = "";
                rpgGame.defender = "";

                // remove restart button
                $(".restart_button").remove();

                // change "your character" to "choose your character"
                $(".choose_character").text("Choose your character");

                // reset characters
                $("#characters").html("<h2 class='choose_character'>Choose your character</h2><button id='obi-wan-kenobi' class='character_button'><div class='name'>Obi-Wan-Kenobi</div><div class='character_pic'><img class='character_img' src='assets/images/obi-wan-kenobi.jpg' alt='obi-wan-kenobi pic'></div><div class='character_hp'>HP: <span class='hp'>135</span></div></button><button id='emperor-palpatine' class='character_button'><div class='name'>Emperor Palpatine</div><div class='character_pic'><img class='character_img' src='assets/images/emperor-palpatine.jpg' alt='emperor paplatine pic'></div><div class='character_hp'>HP: <span class='hp'>120</span></div></button><button id='darth-vader' class='character_button'><div class='name'>Darth Vader</div><div class='character_pic'><img class='character_img' src='assets/images/darth-vader.jpg' alt='darth vader pic'></div><div class='character_hp'>HP: <span class='hp'>125</span></div></button><button id='yoda' class='character_button'><div class='name'>Yoda</div><div class='character_pic'><img class='character_img' src='assets/images/yoda.jpg' alt='yoda pic'></div><div class='character_hp'>HP: <span class='hp'>130</span></div></button>");

                // clear other divs
                $("#defender").empty();
                $("#gameplay-text").empty();
                $("#enemies").empty();

                rpgGame.startGame();
            });
        },
    };

    rpgGame.startGame()
});