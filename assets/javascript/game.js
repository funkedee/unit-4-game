$(document).ready(function () {
    var obiWanKenobi = {
        healthPoints: 100,
        attackPower: 6,
        counterAttackPower: 18,
    };

    var emperorPalpatine = {
        healthPoints: 120,
        attackPower: 8,
        counterAttackPower: 20,
    };

    var darthVader = {
        healthPoints: 140,
        attackPower: 10,
        counterAttackPower: 22,
    };

    var yoda = {
        healthPoints: 160,
        attackPower: 12,
        counterAttackPower: 24,
    };
    var rpgGame = {
        yourCharacter: "",
        defender: "",
    }
    // when you click on a character...
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
                rpgGame.yourCharacter === darthVader;
            }
            else if (this.id === "yoda") {
                rpgGame.yourCharacter === yoda;
            }

            // adds your_character class to clicked button
            $(this).addClass("your_character");

            // changes "choose your Character" to "your character"
            $(".choose_character").text("Your Character");

            // selects the other characters
            $(".character_button").not(this).each(function () {

                // adds enemies class to them
                $(this).addClass("enemies");

                // moves them to #enemies div
                $("#enemies").append(this);

                // displays "choose which enemy to attack"
                $(".choose_enemy").text("Choose which enemy to attack")
            });
        };

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
                    rpgGame.defender === darthVader;
                }
                else if (this.id === "yoda") {
                    rpgGame.defender === yoda;
                }

                // adds defender class to it
                $(this).addClass("defender");

                // moves it to #defender div
                $("#defender").append(this);

                // displays defender
                $(".defender_text").text("Defender");

                // creates attack button
                $("#defender").append("<button class= attack_button>Attack</button>")

                // changes "choose which enemy to attack" to "enemies"
                $(".choose_enemy").text("Enemies")
            };
        });
    });
});