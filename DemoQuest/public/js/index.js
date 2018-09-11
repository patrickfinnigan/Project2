$(document).ready(function() {
// Get references to page elements
var nameInput = $("#example-text");
var $exampleDescription = $("#example-description");
var $submitBtn = $("#submit");
var $exampleList = $("#example-list");

// The API object contains methods for each kind of request we'll make
var API = {
  saveExample: function(example) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/examples",
      data: JSON.stringify(example)
    });
  },
  getPlayer: function() {
    return $.ajax({
      url: "api/examples",
      type: "GET"
    });
  },
  deleteExample: function(id) {
    return $.ajax({
      url: "api/examples/" + id,
      type: "DELETE"
    });
  }
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
      "description": "If this isn't a description of <strong>room 2</strong>, then we're in trouble",
      "description": "WHOOOO THE <strong>NATURE BOY</strong> IS HERE"
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

          } else if (roomnumber === 2) {
              switch (input) {
                  case "lookatroom2":

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

