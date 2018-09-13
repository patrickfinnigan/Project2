$(document).ready(function() {
// Get references to page elements
var nameInput = $("#example-text");
var $exampleDescription = $("#example-description");
var $submitBtn = $("#submit");
var $exampleList = $("#example-list");

// The API object contains methods for each kind of request we'll make
var API = {
  savePlayer: function(example) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/all",
      data: JSON.stringify(example)
    });
  },
  getPlayer: function() {
    return $.ajax({
      url: "api/victims",
      type: "GET"
    });
  },
  deleteExample: function(id) {
    return $.ajax({
      url: "api/examples/" + id,
      type: "DELETE"
    });
  },
  
};




// refreshExamples gets new examples from the db and repopulates the list
var refreshExamples = function() {
  API.getExamples().then(function(data) {
    var $examples = data.map(function(example) {
      var $a = $("<a>")
        .text(example.text)
        .attr("href", "/example/" + example.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": example.id
        })
        .append($a);

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");

      $li.append($button);

      return $li;
    });

    $exampleList.empty();
    $exampleList.append($examples);
  });
};

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  var example = {
    text: $exampleText.val().trim(),
    description: $exampleDescription.val().trim()
  };

  if (!(example.text && example.description)) {
    alert("You must enter an example text and description!");
    return;
  }

  API.saveExample(example).then(function() {
    refreshExamples();
  });

  $exampleText.val("");
  $exampleDescription.val("");
};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteExample(idToDelete).then(function() {
    refreshExamples();
  });
};

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
$exampleList.on("click", ".delete", handleDeleteBtnClick);

});

   // ------------------------------------------------------------------------------------//

   
// descriptions and actions of each room
// descriptions and actions of each room
const rooms = {
    "room0": {
        "description": "You are standing in <strong>room 0</strong>. You should probably <strong>look at</strong> the room to get a better sense of your surroundings.",

        "lookatroom0": "The air is stale with dust and hard to beathe in. The walls around you are a blank eggshell with a brickwork ceiling. On one wall there is a <strong>window</strong>, overlooking a small graveyard. The latch is rusty and the wood around it seems warped. On the opposite wall are a line of numbered <strong>doors</strong>. In the center of the room, a large <strong>treasure chest</strong> sits, slightly ajar. There is also an undefinable <strong>presence</strong> in the room with you...",

        "lookatwindow": "The window is set in a warped wooden frame, covered in cracked white paint. Beyond the murky glass, you can see a graveyard, and the names of the last few adventureres before you...",

        "openwindow": "You attempt to open the window, but the frame refuses to budge. However, your attempt to force the window open causes a crack to form above the window, trailing up to the ceiling, and breaking the brickwork just enough for one brick to fall and hit you on the head, breaking your skull open and killing you instantly.",
        "lookatpresence": "The entity in the room with you does not seem to have a definable shape, size, or any determinable features. It may be a product of unknown arcane forces, and definity not something the writers made up because they had nothing else to put in this room. It is not <strong>perceiveable</strong> to the human eye, although you can try to gesture or <strong>wave</strong> at it.",

        "perceivepresence": "You focus your gaze at the presence, but in doing so you draw it's attention in a very bad way. Whatever gaze it would have, it pierces through your very soul, stopping your heart in an instant and sending you to an eternally cold rest.",

        "waveatpresence": "You attempt to wave at whatever is before you, but you feel your arm snap completely off it's joint. You barely have time to fall in agony before the mysterious element is upon you, and you feel your body start to fade into the background of oblivion.",

        "presencedeath": "<strong>YOU WERE KILLED BY AN UNKNOWN PRESENCE!</strong><br>Please type <strong>'restart'</strong> to restart the game.",

        "lookattreasurechest": "The <strong>treasure chest</strong> is of a dark wroght iron metal, with the only hint of color being the enticing hits of gold you can see underneath the open lid.",

        "opentreasurechest": "You open the chest, and are met with an abundance of gold... <br>...en teeth, lining the mouth of a hungry mimic. You are stunned by the noxious breath of rusting metal, and you are not quick enough to escape the maw as it swings down upon you, beheading you with a snap. That'll teach you to be greedy!",

        "mimicdeath": "YOU WERE KILLED BY A MIMIC!<br>Please type <strong>'restart'</strong> to restart the game.",

        "lookatdoors": "The doors are labeled 1 through 5. <strong>Room 1</strong> is painted green with white flowers, but the colors have long since washed out, and there are traces of flower pollen under the doorway. <strong>Room 2</strong> is made from steel, and you can practically feel the heat coming off the surface. <strong>Room 3</strong> is covered in arcane runes, streaming with multicolored waves of power, ruined slightly by the poster overlaying it, saying, 'You don't have to be crazy to program, but it helps!' You can hear the sound of a ringing bell from <strong>Room 4</strong>, behind the bedazzled and feathered funishings of the door and frame, and there seems to be a commotion from behind <strong>Room 5</strong>'s simple metal door, lableled 'Studio 5' on the front.<br>Which room would you go to? <strong>Keep in mind that you cannot head back.</strong>"
    },


    "room1": {
        "description": "The room is hotter and wetter than the previous, and the walls are rotting away from the constant exposure to moisture.",

        "lookatroom1": "On one wall, there is a table with a small assortment of <strong>potted plants</strong>. On the other end, a large <strong>cactus</strong> resides by the window. And before you, a large <strong>flytrap</strong> grows from a patch of dirt from a hole in the floor.",

        "lookatpottedplants": "There are three potted plants, labeled <strong>1</strong>, <strong>2</strong>, and <strong>3</strong>. You can <strong>smell</strong> their fragrent aromas, but maybe you can take a closer look?",

        "nospores": "What a lovely smell!",
        "spores": "Upon smelling the flower, small spores flow through your nostrils and into your lungs, where they immediatly get to work. They suck up the moisture in your body, growing and spreading as a gelatinous mold. You start to gasp, choking out dust, before finally falling over dead, but not before seeing your chest concave inward, revealing a multitude of exotic grasses and sprouts emerging from your flesh, as your body turns into a very personal terrarium. At least you'll be more beautiful as a garden than you were careful as a human being...",

        "sporesdeath": "<strong>YOU HAVE DIED FROM SPORES!</strong><br>Please type <strong>'restart'</strong> to restart the game.",

        "lookatcactus": "You see that the cactus has punctured through the ceiling in its unchecked growth. On it's branches, you see several succulent <strong>prickly pears</strong>, and you find yourself unable to resist the idea of <strong>eating</strong> one.",

        "eatpricklypear": "You pick a prickly pear and begin chowing down, taking in the sweet, sweet juices and the tropical body of the fruit.<br> Although apparently the term 'prickly pear' passed you by, or maybe you forgot what the hell a cactus was, because the thorns on the prickly pear that you chewed and swallowed, apparently absentmindedly, tear up the flesh of your mouth and organs, causing major internal bleeding, killing you.",

        "pricklypeardeath": "<strong>YOU HAVE DIED OF PRICKLY PEAR!</strong><br>Please type <strong>'restart'</strong> to restart the game.",

        "lookatflytrap": "The flytrap opens up before you, its jawlike leaves lined with a multitude of colors. It's so tantalizing, you just want to <strong>look closer</strong> at it, probably stick your head it it even.",

        "lookcloseratflytrap": "You take a more up-close look at the carnivorous plant, taking in the heavy scent of chlorophyll and the intriguing coloration of the plant. As you look deeper, you can practically see-<br>A brick dislodges from the ceiling, breaking your skull open and killing you instantly."
    },


    "room2": {
        "description": "The room opens up into a massive cavern of old brimstone. The air is heavy with sulfer and ash.",

        "lookatroom2": "The only thing of note that you see is a <strong>dragon</strong> in the center of the room. Around the beast, it's hoard of gold and treasure practically blinds you in it's brilliance. You can see a <strong>jewel</strong> that catches your eye, a <strong>crown</strong> that would look fantastic on you, and a massive <strong>treasure chest</strong>, sure to contain all sorts of good stuff.",

        "lookattreasurechest": "The treasure chest glimmers with polished marble and a golden trim. The gemstones lining the trim makes the chest all that more tantalizing! You just gotta <strong>open</strong> it!",

        "opentreasurechest": "You quickly sashay past the dragon and yank open the treasure chest!<br>...And see the gaping maw of a mimic, which gives you no time to retreat before it grabs you with it's gemstone-incrusted arms and bisects you in a single bite. ",

        "lookatjewel": "The jewel sparkles with an infintesimal depth, it's shimmering luster reminding you of a beautiful starry night. You wonder if the dragon wouldn't mind if you <strong>take</strong> it. You figure it won't miss a single jewel, right?",

        "takejewel": "You attempt to make a dive for the jewel, and you can practically feel the heat billowing from the dragon from across the room. As you are about to meet your fate and take the punishment for your hubris, the dragon reconsiders...<br>...That using it's flame on such a puny human would be a waste of energy, so it decides to simply pluck a discarded brick from out of the wall, and with a sniper's precision, flicks the brick at you, breaking your skull open and killing you instantly.",

        "lookatsword": "The blade of the sword emminates with a violently powerful energy, and the orange-yellow eye in the center of the hilt seems to track you as you move around the weapon. Your head tells you to keep out of it's way, but your gut screams for you to <strong>take</strong> it...",

        "takesword": "As you grasp the handle of the sword, ungodly powers jolt up your arm and into your very soul, swallowing your very being in an overwhelming evil. Your body, accursed to wander the earth in the possesion of an unspeakably monstorous spirit, while you are trapped behind your own eyes, forced to watch it all, before your inevitable downfall.<br>Well, at least you technically made it out when your possesed body escapes in it's carnage, so you can consider this a good ending?",

        "possesseddeath": "<strong>YOU HAVE DIED OF POSSESSION!</strong><br>Please type <strong>'restart'</strong> to restart the game.",

        "lookatdragon": "Yep, that's a dragon!"
    },


    "room3": {
        "description": "The room opens up into a massive study, the walls brimming with unknown energies.",

        "lookatroom3": "'Welcome, weary traveler!', you hear, as you are greeted by the great <strong>Web Wizard Markarius Calrsonophorm!</strong> 'Please, make yourself at home! Take in the many wonders that I have acquired in my times as a Web Wizard! Gaze at the magesty of my <strong>Canary</strong> browser! Take a gander at the <strong>Tensorflow</strong>, a wealth of arcane knowledge! If you excuse me, I'm currently busy with a project that I'm building with these <strong>building materials</strong> here, but feel free to <strong>call for me</strong> if you need anything!",

        "calltomarkarius": "'I'm sure you'll be just fine! Don't get yourself killed, ridiculously easily!'",

        "lookatcanary": "The canary Markarius mentioned doesn't look much like a canary as much as it does a large phoenix, brimming from beak to plummage with awesome, but seemingly unsatable power. You wonder what would happen if you <strong>pet</strong> the Canary...",

        "petcanary": "The bird's immense power feels warm to the touch, and it continues to grow in heat even after taking your hand away from the bird. You palm starts to glow an eerie orange, before immedietly turning grey and cold as stone. The sensation travels up your arm and consumes your entire being, turning you into a physically representation of a crash error, before you t-pose and clip thorugh the floor, leaving an error screen where you once stood. 'Oh dear...' Markarius remarks at the place you were once human. 'I'll need to send an error report and get that patched out on the next update then...'",

        "canarydeath": "<strong>YOU HAVE DIED BY CANARY!<strong><br>Please type <strong>'restart'</strong> to restart the game.",

        "lookattensorflow": "The Tensorflow sweeps through an open port high up from the ceiling, looping down through two rune-adorend rings in the center of a large observation stage, before trailing back up and out through another ceiling port. The result is a massive loop of energy with a single, straight band of light. You can hear voices from the beam of energy, and you're curious as to what you would hear if you <strong>peered</strong> into the stream.",

        "peerintotensorflow": "You put your head into the stream of the Tensorflow. Thousands of voices are debating with eachother, strings od code stream past your eyes, and you feel that your wordly knowledge starting to grow. You offer your own opinion to a topic, but are met with both acceptance and disagreement, and you find yourself looping aroiund the same taliing points over and over. You don't even know how you got to the point of arguing, and you feel that...<br>Markarius knows he should have done something, but at this point he can only watch as your body is slowly spaghettified and sucked through the endless stream of the Tensorflow, another inexperience victim claimed in the wild world of online discorse...",

        "tensorflowdeath": "<strong>YOU HAVE DIED BY TENSORFLOW!<strong><br>Please type <strong>'restart'</strong> to restart the game.",

        "lookatbuildingmaterials": "Right by the wizard's work station, there is a large pile of full-stack web design materials. CSS elements, if/else statements, for loops, even some handlebars and MySQL jargon. You wonder if you can take some of these materials and <strong>build a fullstack website</strong> yourself.",

        "buildfullstackwebsite": "How hard could it be? ALl you havbe to do is grab an HTML and work your way up from there. You just have to remember how to link a JavaScript file to a HTML and you'd be-<br>As you pull at a loose div from the bottom of the pile, a stray brick falls from the top and hits you, breaking your skull open and killing you instantly.",

    },


    "room4": {
        "description": "The room is massivly tall and reeks of body oder and bronser.",
        "lookatroom4": " The walls are adorned with promo shots of a variety of muscular men and women, and in the center of the room sits a wrestling ring, ",
        "lookatricflair": "",
        "fightricflair": "",
        "rickflairdeath": "",
        "lookatbell": "",
        "ringbell": "",
        "ironsheikdeath": "",
        "lookatultimatestage": "",
        "steponultimatestage": "",

    },


    "room5": {
        "description": "If this isn't a description of <strong>room 5</strong>, then we're in trouble",
        "lookatroom5": "<strong>give us money</strong>",
        "lookatstage": "",
        "performonstage": "",
        "lookattelephone": "",
        "answertelephone": "",
        "skeletondeath": "",
        "lookatcutestagehand": "",
        "calltocutestagehand": "",
        "stagehanddeath": "",
    },


    "other": {
        "start": "Welcome to DemoQuest! Please enter your name to get started!",
        "dontunderstand": "I don't understand!",
        "twirl": "You twirled!",
        "twirldeath3": "You twirled so fast that the blood rushes to your arms!<br> You lose conciousness and fall down onto a discarded brick, breaking your skull open and killing you instantly.",
        "brickdeath": "<strong>YOU WERE KILLED BY A BRICK!</strong><br>Please type <strong>'restart'</strong> to restart the game.",
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
    

    let plantspores = Math.floor((Math.random() * 3) + 1);
    console.log("plant that will kill you: ", plantspores);

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
                // console.log("roomnumber: ", roomnumber);
                switch (input) {
                    case "lookatroom0":
                        $("#game-text").append("<p>" + rooms.room0.lookatroom0 + "</p>");
                        break;
                    case "lookatwindow":
                        $("#game-text").append("<p>" + rooms.room0.lookatwindow + "</p>");
                        //

                        //THIS IS WHERE THE TEXT FROM THE SERVER SHOULD COME IN
                        var gY = $("#game-text");
                        getVictim();
                        function getVictim() {
                            $.get("/api/deathCount", graveyard);
                          }
                          function graveyard(data){
                            
                            for (var i = 0; i < data.length; i++) {
                                
                                $("#game-text").append("<p> Here lies " + data[i].name + ". - Cause of Death: " + data[i].causeOfDeath + ". - RIP since " + data[i].createdAt
                                 + "</p>");
                            }
                          }
                          
                          
                        break;
                    case "openwindow":
                        $("#game-text").append("<p>" + rooms.room0.openwindow + "</p>");
                        $("#game-text").append("<p>" + rooms.other.brickdeath + "</p>");
                        death = true;
                        gamedeath = "a brick";
                        console.log("gamedeath: ", gamedeath);
                        break;
                    case "lookattreasurechest":
                        $("#game-text").append("<p>" + rooms.room0.lookattreasurechest + "</p>");
                        break;
                    case "opentreasurechest":
                        $("#game-text").append("<p>" + rooms.room0.opentreasurechest + "</p>");
                        $("#game-text").append("<p><strong>" + rooms.room0.mimicdeath + "</strong></p>");
                        death = true;
                        gamedeath = "a mimic";
                        console.log("gamedeath: ", gamedeath);
                        break;
                    case "lookatpresence":
                        $("#game-text").append("<p>" + rooms.room0.lookatpresence + "</p>");
                        break;
                    case "perceivepresence":
                        $("#game-text").append("<p>" + rooms.room0.perceivepresence + "</p>");
                        $("#game-text").append("<p>" + rooms.room0.presencedeath + "</p>");
                        death = true;
                        gamedeath = "a presence";
                        console.log("gamedeath: ", gamedeath);
                        break;
                    case "waveatpresence":
                        $("#game-text").append("<p>" + rooms.room0.waveatpresence + "</p>");
                        $("#game-text").append("<p>" + rooms.room0.presencedeath + "</p>");
                        death = true;
                        gamedeath = "a presence";
                        console.log("gamedeath: ", gamedeath);
                    case "lookatdoors":
                        $("#game-text").append("<p>" + rooms.room0.lookatdoors + "</p>");
                        break;
                    case "gotoroom1":
                        $("#game-text").append("<p>" + rooms.room1.description + "</p>");
                        roomnumber = 1;
                        console.log("roomnumber: ", roomnumber);
                        break;
                    case "gotoroom2":
                        $("#game-text").append("<p>" + rooms.room2.description + "</p>");
                        roomnumber = 2;
                        console.log("roomnumber: ", roomnumber);
                        break;
                    case "gotoroom3":
                        $("#game-text").append("<p>" + rooms.room3.description + "</p>");
                        roomnumber = 3;
                        console.log("roomnumber: ", roomnumber);
                        break;
                    case "gotoroom4":
                        $("#game-text").append("<p>" + rooms.room4.description + "</p>");
                        roomnumber = 4;
                        console.log("roomnumber: ", roomnumber);
                        break;
                    case "gotoroom5":
                        $("#game-text").append("<p>" + rooms.room5.description + "</p>");
                        roomnumber = 5;
                        console.log("roomnumber: ", roomnumber);
                        break;

                    case "twirl":
                        $("#game-text").append("<p>" + rooms.other.twirl + "</p>");
                        twirlcounter += 1;
                        console.log("twirls: ", twirlcounter);
                        break;
                    case "restart":
                        break;
                    default:
                        $("#game-text").append("<p>" + rooms.other.dontunderstand + "</p>");
                        break;

                }
                // room 1: Plant Room
            } else if (roomnumber === 1) {

                switch (input) {
                    case "lookatroom1":
                        $("#game-text").append("<p>" + rooms.room1.lookatroom1 + "</p>");
                        break;
                    case "lookatpottedplants":
                        $("#game-text").append("<p>" + rooms.room1.lookatpottedplants + "</p>");
                        break;
                    case "smellpottedplant1":
                        if (plantspores === 1) {
                            $("#game-text").append("<p>" + rooms.room1.spores + "</p>");
                            $("#game-text").append("<p>" + rooms.room1.sporesdeath + "</p>");
                            death = true;
                            gamedeath = "spores";
                            console.log("gamedeath: ", gamedeath);
                            break;
                        } else {
                            $("#game-text").append("<p>" + rooms.room1.nospores + "</p>");
                            break;
                        };
                    case "smellpottedplant2":
                        if (plantspores === 2) {
                            $("#game-text").append("<p>" + rooms.room1.spores + "</p>");
                            $("#game-text").append("<p>" + rooms.room1.sporesdeath + "</p>");
                            death = true;
                            gamedeath = "spores";
                            console.log("gamedeath: ", gamedeath);
                            break;
                        } else {
                            $("#game-text").append("<p>" + rooms.room1.nospores + "</p>");
                            break;
                        };
                    case "smellpottedplant3":
                        if (plantspores === 3) {
                            $("#game-text").append("<p>" + rooms.room1.spores + "</p>");
                            $("#game-text").append("<p>" + rooms.room1.sporesdeath + "</p>");
                            death = true;
                            gamedeath = "spores";
                            console.log("gamedeath: ", gamedeath);
                            break;
                        } else {
                            $("#game-text").append("<p>" + rooms.room1.nospores + "</p>");
                            break;
                        };
                    case "lookatcactus":
                        $("#game-text").append("<p>" + rooms.room1.lookatcactus + "</p>");
                        break;
                    case "eatpricklypear":
                        $("#game-text").append("<p>" + rooms.room1.eatpricklypear + "</p>");
                        $("#game-text").append("<p>" + rooms.room1.pricklypeardeath + "</p>");
                        death = true;
                        gamedeath = "prickly pear";
                        console.log("gamedeath: ", gamedeath);
                        break;
                    case "lookatflytrap":
                        $("#game-text").append("<p>" + rooms.room1.lookatflytrap + "</p>");
                        break;
                    case "lookcloseratflytrap":
                        $("#game-text").append("<p>" + rooms.room1.lookcloseratflytrap + "</p>");
                        $("#game-text").append("<p>" + rooms.other.brickdeath + "</p>");
                        death = true;
                        gamedeath = "a brick";
                        console.log("gamedeath: ", gamedeath);
                        break;

                    case "twirl":
                        $("#game-text").append("<p>" + rooms.other.twirl + "</p>");
                        twirlcounter += 1;
                        console.log("twirls: ", twirlcounter);
                        break;
                    case "restart":
                        break;
                    default:
                        $("#game-text").append("<p>" + rooms.other.dontunderstand + "</p>");
                        break;
                }

                // room 2: Dragon Room
            } else if (roomnumber === 2) {
                switch (input) {
                    case "lookatroom2":
                        $("#game-text").append("<p>" + rooms.room2.lookatroom2 + "</p>");
                        break;
                    case "lookattreasurechest":
                        $("#game-text").append("<p>" + rooms.room2.lookattreasurechest + "</p>");
                        break;
                    case "opentreasurechest":
                        $("#game-text").append("<p>" + rooms.room2.opentreasurechest + "</p>");
                        // might as well recycle the death from room 0 lol
                        $("#game-text").append("<p><strong>" + rooms.room0.mimicdeath + "</strong></p>");
                        death = true;
                        gamedeath = "a mimic";
                        console.log("gamedeath: ", gamedeath);
                        break;
                    case "lookatjewel":
                        $("#game-text").append("<p>" + rooms.room2.lookatjewel + "</p>");
                        break;
                    case "takejewel":
                        $("#game-text").append("<p>" + rooms.room2.takejewel + "</p>");
                        $("#game-text").append("<p>" + rooms.other.brickdeath + "</p>");
                        death = true;
                        gamedeath = "a brick";
                        console.log("gamedeath: ", gamedeath);
                        break;
                    case "lookatsword":
                        $("#game-text").append("<p>" + rooms.room2.lookatsword + "</p>");
                        break;
                    case "takesword":
                        $("#game-text").append("<p>" + rooms.room2.takesword + "</p>");
                        $("#game-text").append("<p>" + rooms.room2.possesseddeath + "</p>");
                        death = true;
                        gamedeath = "possession";
                        console.log("gamedeath: ", gamedeath);
                        break;
                    case "lookatdragon":
                        $("#game-text").append("<p>" + rooms.room2.lookatdragon + "</p>");
                        break;


                    case "twirl":
                        $("#game-text").append("<p>" + rooms.other.twirl + "</p>");
                        twirlcounter += 1;
                        console.log("twirls: ", twirlcounter);
                        break;
                    case "restart":
                        break;
                    default:
                        $("#game-text").append("<p>" + rooms.other.dontunderstand + "</p>");
                        break;

                }
                // room 3: Wizard room
            } else if (roomnumber === 3) {
                switch (input) {
                    case "lookatroom3":
                        $("#game-text").append("<p>" + rooms.room3.lookatroom3 + "</p>");
                        break;
                    case "calltomarkarius":
                        $("#game-text").append("<p>" + rooms.room3.calltomarkarius + "</p>");
                        break;
                    case "lookatcanary":
                        $("#game-text").append("<p>" + rooms.room3.lookatcanary + "</p>");
                        break;
                    case "petcanary":
                        $("#game-text").append("<p>" + rooms.room3.petcanary + "</p>");
                        $("#game-text").append("<p>" + rooms.room3.canarydeath + "</p>");
                        death = true;
                        gamedeath = "canary";
                        console.log("gamedeath: ", gamedeath);
                        break;
                    case "lookattensorflow":
                        $("#game-text").append("<p>" + rooms.room3.lookattensorflow + "</p>");
                        break;
                    case "peerintotensorflow":
                        $("#game-text").append("<p>" + rooms.room3.peerintotensorflow + "</p>");
                        $("#game-text").append("<p>" + rooms.room3.tensorflowdeath + "</p>");
                        death = true;
                        gamedeath = "tensorflow";
                        console.log("gamedeath: ", gamedeath);
                        break;
                    case "lookatbuildingmaterials":
                        $("#game-text").append("<p>" + rooms.room3.lookatbuildingmaterials + "</p>");
                        break;
                    case "buildfullstackwebsite":
                        $("#game-text").append("<p>" + rooms.room3.buildfullstackwebsite + "</p>");
                        $("#game-text").append("<p>" + rooms.other.brickdeath + "</p>");
                        death = true;
                        gamedeath = "a brick";
                        console.log("gamedeath: ", gamedeath);
                        break;

                    case "twirl":
                        $("#game-text").append("<p>" + rooms.other.twirl + "</p>");
                        twirlcounter += 1;
                        console.log("twirls: ", twirlcounter);
                        break;
                    case "restart":
                        break;
                    default:
                        $("#game-text").append("<p>" + rooms.other.dontunderstand + "</p>");
                        break;

                }
                // room 4: Wrestle room
            } else if (roomnumber === 4) {
                switch (input) {
                    case "lookatroom4":
                        $("#game-text").append("<p>" + rooms.room4.lookatroom4 + "</p>");
                        break;

                    case "twirl":
                        $("#game-text").append("<p>" + rooms.other.twirl + "</p>");
                        twirlcounter += 1;
                        console.log("twirls: ", twirlcounter);
                        break;
                    case "restart":
                        break;
                    default:
                        $("#game-text").append("<p>" + rooms.other.dontunderstand + "</p>");
                        break;

                }
                // room 5: Telethon room
            } else if (roomnumber === 5) {
                switch (input) {
                    case "lookatroom5":
                        $("#game-text").append("<p>" + rooms.room5.lookatroom5 + "</p>");
                        break;


                    case "twirl":
                        $("#game-text").append("<p>" + rooms.other.twirl + "</p>");
                        twirlcounter += 1;
                        console.log("twirls: ", twirlcounter);
                        break;
                    case "restart":
                        break;
                    default:
                        $("#game-text").append("<p>" + rooms.other.dontunderstand + "</p>");
                        break;
                }
            }

            //Twirling counter
            if (twirlcounter === 3) {
                $("#game-text").append("<p>" + rooms.other.twirldeath3 + "</p>");
                $("#game-text").append("<p>" + rooms.other.brickdeath + "</p>");
                gamedeath = "twirling and bricks";
                console.log("gamedeath ", gamedeath);
                twirlcounter = 0;
                death = true;
            }


            if (death === true) {
                console.log("this is from the if death === true")
                console.log("name: ", name);
                console.log("gamedeath ", gamedeath);

                var newVictim = {
                    name: name.trim(),
                    causeOfDeath: gamedeath,
                    
                };
                function addDeath(post){
                    $.post("/api/newVictim", post)
                }
                
                addDeath(newVictim);
                console.log(newVictim);
                
                

                
                
  
                switch (input) {
                    case "restart":
                        console.log("-=-=-=-=-=Restart Function=-=-=-=-=-");
                        $("#game-text").append("<p>" + rooms.other.start + "</p>");
                        console.log("Restarted!");
                        roomnumber = 255;
                        console.log("roomnumber: ", roomnumber);
                        name = [];
                        console.log("name: ", name);
                        death = false;
                        console.log("death", death);
                        gamedeath = [];
                        console.log("gamedeath ", gamedeath);
                        plantspores = Math.floor((Math.random() * 3) + 1);
                        console.log("plant that will kill you: ", plantspores);
                        return;
                        gameStart();
                        // location.reload();
                        break;
                        // no description of room 0 or a default case is here because adding them in would repeat text already set to room 0
                }


            }
        }

    });

});


