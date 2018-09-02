// descriptions and actions of each room
const rooms = {
    "room0" : {
        "description" : "You are standing in a small <strong>room 0</strong>. The air is stale, and the walls around you are a blank eggshell. with a brickwork ceiling",
        "lookatroom0" : "There is a <strong>window</strong> on one wall, overlooking a small graveyard. On the opposite wall is a <strong>doorway</strong> leading down a dark hallway. In the center of the room, a large <strong>treasure chest</strong> sits, slightly ajar. You can see the shimmering glint of gold within the chest...",
        "opentreasurechest" : "You open the chest, and are met with an abundance of gold... <br>...en teeth, lining the mouth of a hungry mimic. You are not quick enough to escape the maw as it swings down upon you, beheading you with a snap. that'll teach you to be greedy!",
        "mimicdeath" : "YOU WERE KILLED BY A MIMIC!",
        "lookatdoorwayroom1" : "The doorway leads through a <strong>hall way</strong> into another room."
    },
    "room1" : {
        "description" : "This should be a description of <strong>room 1</strong>.",
        "lookatroom1" : "<strong>Something</strong> should be set here to descrime the room."
    },
    "room2" : {
        "description" : "If this isn't a description of <strong>room 2</strong>, then we're in trouble"
    }
}

let roomnumber = 0;
let death = 0;
let gamedeath = [];

$(document).ready(function () {
    //append the first element in room0
    $("#game-text").append("<p>" + rooms.room0.description + "</p>");
    
    $(document).keypress(function(key) {
        // if they press the enter key (key 13) and the input is the focus of the window
        if (key.which === 13 && $("#user-input").is(":focus")) {
            const input = $('#user-input').val().toLowerCase().replace(/\s+/g, '').trim();
            console.log("input ", input);
            // roomnumber = 0;
            console.log("roomnumber ", roomnumber);
            $("#user-input").val('');

            if (roomnumber === 0) {
                switch(input) {
                    case "lookatroom0":
                        $("#game-text").append("<p>" + rooms.room0.lookatroom0 + "</p>");
                        break;
                    case "opentreasurechest":
                        $("#game-text").append("<p>" + rooms.room0.opentreasurechest + "</p>");
                        $("#game-text").append("<p><strong>" + rooms.room0.mimicdeath + "</strong></p>");
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
                    
                } 
            } else if (roomnumber === 1) {
                switch(input) {
                    case lookatroom1:
                    $("#game-text").append("<p>" + rooms.room1.lookatroom1 + "</p>");
                }





            }
        }

    });








});