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

        "lookattreasurechest": "The <strong>treasure chest</strong> is of a dark wrought iron metal, with the only hint of color being the enticing hits of gold you can see underneath the open lid.",

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

        "callformarkarius": "'I'm sure you'll be just fine! Don't get yourself killed, ridiculously easily!'",

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

        "lookatroom4": " The walls are adorned with promo shots of a variety of muscular men and women, and in the center of the room sits a wrestling ring, and in the center of that wrestling ring is the titual Nature Boy Himself, <strong>Ric Flair!</strong> On one of the ring posts, you see a <strong>bell</strong> with a hammer, and leading from the ring by a rough-looking red carpet, is a stage, with a sidepart of the stage being colored differently and labled 'The<strong> Deadman's Stage'</strong> by a sign above it. You feel like you're standing in a realm of mad gods.",

        "lookatricflair": "The Marvelous Nature Boy may be in his 70s, but he can still strut about the stage, popping off his signature 'Whooo!' like it was 1987 again! He doesn't seem to really notice you, but you wonder if <strong>fighting</strong> him will change things.",

        "fightricflair": "You leap into the ring like an absolute fool and am met with the wild, primal gaze of one of the dirtiest player in the game. He lunges at you, mercelesly pummeling you to near unconciousness, before delivering a brutal knife-edge chop that breaks your neck in 3 places, sending you into a fabulous oblivion. WHat else would you expect from messing with a limousine-ridin', jet-flyin', kiss stealin', wheelin' dealin', son-of-a-gun (who kissed all the girls worldwide and made em cry)?",

        "rickflairdeath": "<strong>YOU HAVE DIED BY RIC FLAIR'S HANDS!<strong><br>Please type <strong>'restart'</strong> to restart the game.",

        "lookatbell": "The bell is slightly rust, and several dents can be seen around it's surface. But you still think it can work just fine if you <strong>ring</strong> it.",

        "ringbell": "You ring the bell, and the stage beyond the ring is illuminated with strobing lights of the colors of the Iranian flag. Before you the Iron Sheik, one of the greatest heels in WWE history! As he approaches the ring, he insults the American way and how he could have totally defeated Hulk Hogan before grabbing you by the ankles and hauling you into the ring with him. What proceeded was the most brutal match ever witnessed by man, as your miserable body was used as a bludgeoning ram and folding chair, switching between Rick and Iron Sheik before Iran's favorite son uses your now lifeless body to knock Ric Flair out enough to get the 3 count, while your discarded corpse disintegrates to ash upon contact with the ground. The Iron Sheik is not repremanded for using a bystandard as a weapon to their absolute death and even goes home with the DemoQuest International Heavyweight Belt, although he is later arrested alongside 'Hacksaw' Jim Duggan by New Jersey PD for cocaine use and possession, and was placed on one year probation.",

        "ironsheikdeath": "<strong>YOU HAVE DIED BY THE IRON SHIEKS'S HANDS!<strong><br>Please type <strong>'restart'</strong> to restart the game.",

        "lookatdeadmansstage": "The stage is heavily furnished with cobwebs and black candles, and there is an upright coffin in the center of the setup. From here, you can make out the distinct apperance of famous wrestling manager Paul Bearer standing right beside the coffin, pruning the well-known golden urn he is always seen carrying. A camera is also set up right in front of the stage. You should probably <strong>step on Deadman's Stage</strong> and see if you can meet the one, the only, Undertaker...",

        "stepondeadmansstage": "You decided to step up onto the stage and see if you can meet one of the most famous wrestlers of all time, but his pudgy manager starts making his promo to the camera, glanciong between you and the camera as he howls about 'MY UNDERTAKERRRR, MMMMMM', while also doing that weird nodding head shake that he usually does. Before he goes any further, you ask if he can calm down and if you can see the actual Undertaker...<br>'NOT MY UNDERTAKERRRRR!' he squeals like a greased piglet, as he swings his urn in front of you. As he does this, the top of the urn comes loose, letting fly the ceremonial brick buried in the ash, where it flies directly at your head, breaking your skull open and killing you instantly.",

    },


    "room5": {
        "description": "There seems to be a lot of commotion about alturism and money goin' on in this room!",

        "lookatroom5": " You scoot past what seemd to be a <strong>cute stage hand</strong> in order to get a better look at the scene. You appear to be stage left of a large television production. That's when you hear the announcment: 'Live, from DemoQuest, California, it's the <strong>DemoQuest Charity Telethon!</strong>, hosted by Golem Jerry Lewis!' 'DemoQuest may be just a school project made by three people,' Golem Jerry Lewis says to the camera, 'but that doesn't mean the good people and monsters at DemoQuest can't use your help. This telethon will be live for the next 72 hours, nonstop <strong>stage</strong> performances by top artist from front to back! All for our callers, standing by at their <strong>telephones</strong>, ready to take anything you can offer. So please,we can't stay on the airwaves without the kind donations you give us every year. Coming up next, it's Coldplay But They're Werewolves! Stay tuned!'",

        "lookatstage": "The stage is left open for someone to <strong>perform</strong>, adorend with a multitude of lights and furnsiehd with glitzy beaded curtains. There's a microphone, a few instruments, and boundless opportunity for ~talent~.",

        "performonstage": "You decide that there's nothing stopping you from becoming a star! You immediatly run up stage, push past Golem Jerry Lewis, and start belting your heart out. You don't notice that the audience are a bunch of living skeletons, but you don't care, you're more alive then you've ever been before. Everyone LOVES what you're putting out, the whole place is going nuts! One of the skeletons get's too excited, rushes the stage, and beats you over the head with a brick, breaking your skull open and killing you instantly...<br>...but the next thing you know, you burst from your own flesh, now a rockin' talkin' SKELETON! The pledges for the teleton go through the roof! Everyone goes absolutely BANANAS! You're a star kid! You're dead, yeah, but you're a star!",

        "lookattelephone": "You see an old plastic telephone, yellowed with age. You can hear it ringing, the red light flashing, but it's completely vacant. You consider being a good samaritan and <strong>answer</strong> the telephone.",

        "answertelephone": "Sitting between a kyonshī to the left and Oakland Raiders Quarterback Jim Plunkett to the right, you take your place at the pledge table and answer the phone. The next thing you know you're taking pledges at a pretty reasonable pace, scoring from a couble of bucks to talking your way up to a few grand. You're so on a roll, that you don't even hear Golem Jerry Lewis announcing the 'Hourly Operator Snack Attack', nor do you hear the clacking of the spinning wheel land on your seat number. As you're about to take down your latest pledge of $400 from a kindly old Beholder from Missouri, you are flung into the audience of skeletons, who waste no time ripping and devouring your sweet, juicy body. What can we say: That's show biz!",

        "skeletondeath": "<strong>YOU HAVE DIED BY SKELETONS!<strong><br>Please type <strong>'restart'</strong> to restart the game.",

        "lookatcutestagehand": "You turn back to see that slice of hot stuff that you just passed by. She has her back to you, but you can tell from her phisique that she's a bombshell in those Dickie's working slacks. If you can just <strong>call</strong> to the cute stage hand, probaby get a coffee after all this...?",

        "calltocutestagehand": "You call out to her, and you are surprised when she perks up at your voice over the commotion. She turns around to meet you. 'Hey, good lookin~' she says, winking at you. You feel your hear skip a beat...<br> Which is the last thing your heart does, as you peer into the gaze of the cute stage hand medusa, her strands of serpentine hair framed around her gorgeous smile being the last things you see before turning into stone. 'Aw, dang tootin'...' She huffs. 'This old country girl is gonna be a single stallion for a good long while, I reckon...'",

        "stagehanddeath": "<strong>YOU HAVE DIED BY THE MEDUSA!<strong> (totally worth it though)<br>Please type <strong>'restart'</strong> to restart the game.",
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
            const input = $('#user-input').val().toLowerCase().replace(/\s+/g, '').replace(/[.,\/'#!$%\^&\*;:{}=\-_`~()]/g, "").trim();
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

                        //
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
                    case "lookatricflair":
                        $("#game-text").append("<p>" + rooms.room4.lookatricflair + "</p>");
                        break;
                    case "fightricflair":
                        $("#game-text").append("<p>" + rooms.room4.fightricflair + "</p>");
                        $("#game-text").append("<p>" + rooms.room4.rickflairdeath + "</p>");
                        death = true;
                        gamedeath = "Ric Flair";
                        console.log("gamedeath: ", gamedeath);
                        break;
                    case "lookatbell":
                        $("#game-text").append("<p>" + rooms.room4.lookatbell + "</p>");
                        break;
                    case "ringbell":
                        $("#game-text").append("<p>" + rooms.room4.ringbell + "</p>");
                        $("#game-text").append("<p>" + rooms.room4.ironsheikdeath + "</p>");
                        death = true;
                        gamedeath = "The Iron Sheik";
                        console.log("gamedeath: ", gamedeath);
                        break;
                    case "lookatdeadmansstage":
                        $("#game-text").append("<p>" + rooms.room4.lookatdeadmansstage + "</p>");
                        break;
                    case "stepondeadmansstage":
                        $("#game-text").append("<p>" + rooms.room4.stepondeadmansstage + "</p>");
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
                // room 5: Telethon room
            } else if (roomnumber === 5) {
                switch (input) {
                    case "lookatroom5":
                        $("#game-text").append("<p>" + rooms.room5.lookatroom5 + "</p>");
                        break;
                    case "lookatstage":
                        $("#game-text").append("<p>" + rooms.room5.lookatstage + "</p>");
                        break;
                    case "performonstage":
                        $("#game-text").append("<p>" + rooms.room5.performonstage + "</p>");
                        $("#game-text").append("<p>" + rooms.other.brickdeath + "</p>");
                        death = true;
                        gamedeath = "a brick";
                        console.log("gamedeath: ", gamedeath);
                        break;
                    case "lookattelephone":
                        $("#game-text").append("<p>" + rooms.room5.lookattelephone + "</p>");
                        break;
                    case "answertelephone":
                        $("#game-text").append("<p>" + rooms.room5.answertelephone + "</p>");
                        $("#game-text").append("<p>" + rooms.room5.skeletondeath + "</p>");
                        death = true;
                        gamedeath = "skeletons";
                        console.log("gamedeath: ", gamedeath);
                        break;
                    case "lookatcutestagehand":
                        $("#game-text").append("<p>" + rooms.room5.lookatcutestagehand + "</p>");
                        break;
                    case "calltocutestagehand":
                        $("#game-text").append("<p>" + rooms.room5.calltocutestagehand + "</p>");
                        $("#game-text").append("<p>" + rooms.room5.stagehanddeath + "</p>");
                        death = true;
                        gamedeath = "medusa";
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