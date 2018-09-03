// descriptions and actions of each room
const rooms = {
    "room0": {
        "description": "You are standing in a small <strong>room 0</strong>. The air is stale, and the walls around you are a blank eggshell. with a brickwork ceiling",
        "lookatroom0": "There is a <strong>window</strong> on one wall, overlooking a small graveyard. On the opposite wall is a <strong>doorway</strong> leading down a dark hallway. In the center of the room, a large <strong>treasure chest</strong> sits, slightly ajar. You can see the shimmering glint of gold within the chest...",
        "opentreasurechest": "You open the chest, and are met with an abundance of gold... <br>...en teeth, lining the mouth of a hungry mimic. You are not quick enough to escape the maw as it swings down upon you, beheading you with a snap. that'll teach you to be greedy!",
        "mimicdeath": "YOU WERE KILLED BY A MIMIC!<br>Please type <strong>'restart'</strong> to restart the game.",
        "lookatdoorwayroom1": "The doorway leads through a <strong>hall way</strong> into another room."
    },
    "room1": {
        "description": "This should be a description of <strong>room 1</strong>.",
        "lookatroom1": "<strong>Something</strong> should be set here to describe the room. Okay there is an <strong>ogre</strong> here.",
        "lookatogre": "The ogre is one ogre"
    },
    "room2": {
        "description": "If this isn't a description of <strong>room 2</strong>, then we're in trouble"
    },
    "other": {
        "start": "Welcome to DemoQuest! Please enter your name to get started!",
        "dontunderstand": "I don't understand!",
        "twirl": "You twirled!",
        "twirldeath3": "You twirled to fast that the blood rushes to your arms!<br> You lose conciousness and fall down onto a discarded brick, breaking your skull open and killing you instantly. <br>Please type <strong>'restart'</strong> to restart the game.",
        "brickdeath": "YOU WERE KILLED BY A BRICK!<br>Please type <strong>'restart'</strong> to restart the game.",
    }

}


$(document).ready(function gameStart() {
    let roomnumber = 255;
    console.log("roomnumber: ", roomnumber);
    let name = [];
    console.log("name: ", name);
    let death = false;
    console.log("death", death);
    let twirlcounter = 0;
    let gamedeath = [];
    console.log("gamedeath ", gamedeath);

    $("#game-text").append("<p>" + rooms.other.start + "</p>");

    $(document).keypress(function (key) {
        // if they press the enter key (key 13) and the input is the focus of the window
        if (key.which === 13 && $("#user-input").is(":focus")) {
            const input = $('#user-input').val().toLowerCase().replace(/\s+/g, '').trim();
            console.log("input ", input);
            // roomnumber = 0;
            $("#user-input").val('');

            if (roomnumber === 255) {
                switch (input) {
                    default: name = input;
                    console.log("name: ", name);
                    roomnumber = 0;
                    $("#game-text").append("<p>" + rooms.room0.description + "</p>");
                }

            } else if (roomnumber === 0) {
                console.log("roomnumber: ", roomnumber);
                switch (input) {
                    case "lookatroom0":
                        $("#game-text").append("<p>" + rooms.room0.lookatroom0 + "</p>");
                        break;
                    case "opentreasurechest":
                        $("#game-text").append("<p>" + rooms.room0.opentreasurechest + "</p>");
                        $("#game-text").append("<p><strong>" + rooms.room0.mimicdeath + "</strong></p>");
                        death = true;
                        gamedeath = "a mimic";
                        console.log("gamedeath ", gamedeath);
                        break;
                    case "lookatdoorway":
                        $("#game-text").append("<p>" + rooms.room0.lookatdoorwayroom1 + "</p>");
                        break;
                    case "gothroughhallway":
                        $("#game-text").append("<p>" + rooms.room1.description + "</p>");
                        roomnumber = 1;
                        console.log("roomnumber ", roomnumber);
                        break;

                    case "twirl":
                        $("#game-text").append("<p>" + rooms.other.twirl + "</p>");
                        twirlcounter += 1;
                        console.log("twirls: ", twirlcounter);
                        break;
                    case "restart":
                        // $("#game-text").append("<p>" + rooms.room0.description + "</p>");
                        break;
                        // ^this is for the reset function. its here because the death if/else below sets it to room zero, so this is here to avoid any repeated text
                    default:
                        $("#game-text").append("<p>" + rooms.other.dontunderstand + "</p>");
                        break;

                }
            } else if (roomnumber === 1) {
                switch (input) {
                    case "lookatroom1":
                        $("#game-text").append("<p>" + rooms.room1.lookatroom1 + "</p>");
                        break;
                    case "lookatogre":
                        $("#game-text").append("<p>" + rooms.room1.lookatogre + "</p>");
                        break;

                    case "twirl":
                        $("#game-text").append("<p>" + rooms.other.twirl + "</p>");
                        twirlcounter += 1;
                        console.log("twirls: ", twirlcounter);
                        break;
                    default:
                        $("#game-text").append("<p>" + rooms.other.dontunderstand + "</p>");
                        break;
                }

            }

            //Twirling counter
            if (twirlcounter === 3) {
                $("#game-text").append("<p>" + rooms.other.twirldeath3 + "</p>");
                gamedeath = "twirling";
                console.log("gamedeath ", gamedeath);
                twirlcounter = 0;
                death = true;
            }


            if (death === true) {
                console.log("this is from the if death === true")
                console.log("name: ", name);
                console.log("gamedeath ", gamedeath);
                switch (input) {
                    case "restart":
                        // console.log("Restarted!");
                        roomnumber = 255;
                        // console.log("roomnumber: ", roomnumber);
                        name = [];
                        // console.log("name: ", name);
                        death = false;
                        // console.log("death", death);
                        gamedeath = [];
                        // console.log("gamedeath ", gamedeath);
                        gameStart();
                        break;
                        // no description of room 0 or a default case is here because adding them in would repeat text already set to room 0
                }

            }
        }

    });








});



//                                         ...,,,,,...
//                         :        ..eed$$$$$$$$$$$$$bee..
//                     .   U    ued$$$$$$$$$$$$$$$$$$$$$$$$eu
//                     `~m.$  u$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$e.
//                 ..     "$.d$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$u
//                 ""#=q.  $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$u
//                    .d8u.$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$u
//                  .e$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$e.
//                u$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$u
//              .d$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$e
//             u$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$I?$b
//            u$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ $$b
//           :$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$b`$$U
//          $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$:`$$
//         !$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ "$:
//         $$$$$$$$$$$$$$$$$$$$$$u"$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$: $!
//         $$$$$$$$$$$$$$$$$$$$$$$u "?$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$U !!
//        !$$$$$$$$$$$$$$$$$$$$$$$$$:. "??$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ `~
//        `$$$$$$$$$$$$$$$$$$$$$$$$$;T$eu.`""???$$$$$$$$$$$$$$$$$$$$$$$$$$
//         $$$$$$$$$$$$$$$$$$$$$$$$$t;$$$$$beeu..`""'..,,,..`""??$$$$$$$$$
//         ?$$$$$$$$$$$$$$$$*$$$$$$$F;$$$$$$$"".,,CI$$$$$$$$$$$Wu`"?$$$$$$;
//         `$$$$$$$$$$$$$$$T!$$$$$$$`!$$$$$'.ud$$$$$$$$$$$$$$$$$$e. "?$$$$
//          ?$$$$$$$$$$$$$$!!$$$$$$$ U$$$$'u$$$$$$$$$$$$$$$$$$$"I$*:  "$$$
//           $$$$$$$$$$$$$f``$$$$$$':$$$$$e$$$$$$F"?$$$$$$$$$*(m"(ueu  "?T
//           `$$$$$$$$$$$"   "$$$$f.$$$$$$$$$$F"  ,$$$$$$$$$"u"  !$$T
//            `$$$$$$$$$f ee. "$$$ $$$$$$$$$$"    d$$$$$$$$f.F   W$$
//             "$$$$$$$` $$$ee."'u$$$$$$$$$$    u$$$$$$$$$ 4b.u$$$$
//              "$$$$$$  ?$$$$$u.$$$$$$$$$$$u..e$$$$$$$$$$."$$$$$$$u
//                ?$$$$U `$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$W$$$$$$$$.
//                 "?$$$u "?$$$$?$$$$$$$$$$$$$$$$$$$$$$$$$$$T"$$$$$$W
//                   "$"$Wu.""??i~$$$$$$$$$$$$$$$$$$$$**$$$*`u$$$$$$T
//                      *$$$WWu .:"$$$$$$$$$$$$$**$$$WWW$*?.e$$$$$$$`
//                      `$$$$$$ ($ "$$$$$$$$$$* -@$$$$$$$$$$$*I$$$F'
//                       $$$$$*  $W."$$$$$$$$$UW$e `""""""?CuW$$$F
//                      :$**"`   $$$u "$$$$$$$$$$$W."Wu   $$$$$$"
//                       `      -$$$$W."?$$$$$$$$$$$eC?(.u$$$$"
//                            . :$$$$$$e.`"$$$$$$$$$****"I$$F`
//                          :!! !$$$$$$$$e. "??$$$$$WeeW$$F"
//                        :!!!' W$$$$$$$$$$$eu. `"""****"`
//                        !!;'  $$$$$$$$$$$$$$$u   ....:::
//                       !!!:  :$$$$$$$$$$$$$$$$$:  !!!!!!!.
//                       !!!!!:. ""?$$$$$$$$$$$$$W  !!!!!!!!:
//                       !!!!!!!!!:. "?$$$$$$$$$$$u `!!!!!!!!!
//                       !!!!!!!!!!!!:. "?$$$$$$$$$e.` !!!~~!!.
//                    .:. `!!!!!!!!!!!!!:."?$$$$$$$$$$u !`.. `!
//                 :!!!!!:  `!!!!!!!!!!!!!!: "?$$$$$$$$ ~ !!: `
//              :!!!:.`'!!!:  `!!!!!!!!!!!!!!:."?$$$$$$   !!!!
//           ::!!!!!!!! `!!!!:  `!!!!!!!!!'  !!: "$$$$f  !!!!!!.
//        .:!!!!!!!!!!!. `!!!!!:  `!!!!!!  :!!!!: T$$$` !!!!! !!:
//      :!!!!!!!!!!!!!!!  `!!!!!!.  !!!!' .!!!!!!  ?$$  !!!!!: !!!
//    :!!!!!!!!!!!!!!!!!!  !!!!!!!!. `!!  !!!!!!!! `$T  !!!!!!  !!!:
//  :!!!!!!!!!!!!!!!!!!!!  !!!!!!!!!: `!  !!!!!!!!: "!  !!!!!!! `!!!!:
// !!!!!!!!!!!!!!!!!!!!!!. (!!!!!!!!!!:  !!!!!!!!!!. ~ <!!!!!!!. `!!!!!.
// ██████  ██▓ ██▓     ██▓   ▓██   ██▓    ▄▄▄▄   ▓█████ ▄▄▄       ██▀███  
// ▒██    ▒ ▓██▒▓██▒    ▓██▒    ▒██  ██▒   ▓█████▄ ▓█   ▀▒████▄    ▓██ ▒ ██▒
// ░ ▓██▄   ▒██▒▒██░    ▒██░     ▒██ ██░   ▒██▒ ▄██▒███  ▒██  ▀█▄  ▓██ ░▄█ ▒
//   ▒   ██▒░██░▒██░    ▒██░     ░ ▐██▓░   ▒██░█▀  ▒▓█  ▄░██▄▄▄▄██ ▒██▀▀█▄  
// ▒██████▒▒░██░░██████▒░██████▒ ░ ██▒▓░   ░▓█  ▀█▓░▒████▒▓█   ▓██▒░██▓ ▒██▒
// ▒ ▒▓▒ ▒ ░░▓  ░ ▒░▓  ░░ ▒░▓  ░  ██▒▒▒    ░▒▓███▀▒░░ ▒░ ░▒▒   ▓▒█░░ ▒▓ ░▒▓░
// ░ ░▒  ░ ░ ▒ ░░ ░ ▒  ░░ ░ ▒  ░▓██ ░▒░    ▒░▒   ░  ░ ░  ░ ▒   ▒▒ ░  ░▒ ░ ▒░
// ░  ░  ░   ▒ ░  ░ ░     ░ ░   ▒ ▒ ░░      ░    ░    ░    ░   ▒     ░░   ░ 
//       ░   ░      ░  ░    ░  ░░ ░         ░         ░  ░     ░  ░   ░     
//                              ░ ░              ░