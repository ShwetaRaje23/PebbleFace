/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */
//Story Data
var steps=0;
var story = {
  "characters": [
    {
      "title": "Governor",
       "characterid": 0,
      "subtitle": "Governor Arnold Capaldi has been running the small town of Amberlee for 3 years. He is known for his promiscuity and poor treatment of his employees."
    },
    {
      "title": "Wife",
       "characterid": 1,
      "subtitle": "Governor Arnold's wife, Lynda is a kind, beautiful woman. She trained as a doctor but left a promising career to support her husband in his long campaigns."
    },
    {
      "title": "Brother",
       "characterid": 2,
      "subtitle": "Thomas Capaldi, Governor Arnold's brother, is hot-headed and sincere but his efforts always seem to go un-noticed "
    },
    {
      "title": "Maid",
       "characterid": 3,
      "subtitle": "Their maid Marta has been working with the Capaldi's for about 8 years now. She loves gossip, but doesn't everyone? "
    },
    {
      "title": "Secretary",
       "characterid": 4,
      "subtitle": "Governor Arnold's secratary Julia loves attention. She knows a little too much about the Governor than his wife Lynda would like. "
    }
  ],
  "killer": 2,
  "victim": 0,
  "motive": "The Brother was embezzling money from the Governor. He was found out. During their argument, the Governor pulled a gun on the Brother, who grabbed hold of the closest thing he could find - a lead pipe leftover from a recent renovation, and swung it.",
  "history": [
    {
      "time":"Mon 10:35 am",
      "challenge_text":"You hear someone screaming in the adjoining room",
      "clue_text":"The Wife is complaining on the phone about how there is no money left.",
      "clue_id":0
    },
    {
      "time":"Mon 12:26 pm",
      "challenge_text":"There is something in the bushes there",
      "clue_text":"You find a bloody red pipe",
      "clue_id":1
    },
    {
      "time":"Mon 3:41 pm",
      "challenge_text":"You hear muffled sounds nearby",
      "clue_text":"The Secretary is crying in his room. He sees you and quickly wipes his tears. He says that the Governor was a good boss.",
      "clue_id":2
    },
    {
      "time":"Mon 4:55 pm",
      "challenge_text":"You are walking toward the kitchen. Sounds like running water.",
      "clue_text":"The Brother is washing something in the sink. The water runs red.",
      "clue_id":3
    },
    {
      "time":"Mon 5:30 pm",
      "challenge_text":"You hear voices arguing in the next room.",
      "clue_text":"The Brother and Secretary are arguing near the fireplace. You hear the words 'millions embezzled'.",
      "clue_id":4
    },
    {
      "time":"Mon 6:15 pm",
      "challenge_text":"You decide to search the crime scene. Walk to the Governor's study.",
      "clue_text":"There are two ledgers under the Governor's desk. The transactions are over the same quarter but do not match.",
      "clue_id":5
    },
    {
      "time":"Mon 6:22 pm",
      "challenge_text":"Something moves behind you",
      "clue_text":"Bam ! Everything goes dark.",
      "clue_id":6
    }]
};

var Accel = require('ui/accel');
Accel.init();

//Story Functions

function getNumberOfChallenges(){
  return story.history.length;
}

function getChallengeTimeAtIndex(index){
  return story.history[index].time;
}

function getChallengeAtIndex(index){
  return story.history[index].challenge_text;
}

function getClueAtIndex(index){
  return story.history[index].clue_text;
}


var UI = require('ui');
var Vibe = require('ui/vibe');
//var ajax = require('ajax');

//Flags
var lastGWasPositive = false;
var isShowingChallengeCard = true;

var main = new UI.Card({
  title: 'GWAP Walk!',
  icon: 'images/menu_icon.png',
  subtitle: 'Games With A Purpose',
  body: 'Press any button.'
});

main.show();

var lastChallengeIndex = 0;
main.on('click', 'up', function(e) {
  console.log("Clicked Up from Main Menu");
  showChallengeCardAtIndex(lastChallengeIndex);
});


main.on('click', 'select', function(e) {
  console.log("Clicked Select from Main Menu");
//   showSuspectMenu();
});

main.on('click', 'down', function(e) {
  console.log("Clicked Down from Main Menu");
//   showSuspectMenu();
});

function showChallengeCardAtIndex(index){
  isShowingChallengeCard = true;
  console.log("Show Challenge Card at Index");
  lastChallengeIndex = index;
  var walk;
  
  var card = new UI.Card();
  card.title('Walk');
  card.subtitle(getChallengeTimeAtIndex(index));
  card.body(getChallengeAtIndex(index));
  card.show();
  
  Vibe.vibrate('short');
  steps=0;
  walk = countStep();
}



function showClueCardAtIndex(index){
  
  isShowingChallengeCard = false;
  console.log("Show Clue Card at Index");
  Vibe.vibrate('short');
  
  var card = new UI.Card();
  card.title(getChallengeTimeAtIndex(index));
  card.body(getClueAtIndex(index) + " Continue ? Press anything.");
  card.show();
  
  card.on('click', 'up', function(e) {
  console.log("Clicked Up from Challenge Card");
    if (index < (getNumberOfChallenges() -1)){
       showChallengeCardAtIndex(index+1); 
    }else{
      console.log("All clues done");
      showSuspectCard();
    }
});

  card.on('click', 'select', function(e) {
  console.log("Clicked Up from Challenge Card");
    if (index < (getNumberOfChallenges() -1)){
       showChallengeCardAtIndex(index+1); 
    }else{
      console.log("All clues done");
      showSuspectCard();
    }
});

  card.on('click', 'down', function(e) {
  console.log("Clicked Up from Challenge Card");
    if (index < (getNumberOfChallenges() -1)){
       showChallengeCardAtIndex(index+1); 
    }else{
      console.log("All clues done");
      showSuspectCard();
    }
});
}


function showSuspectCard(){
  
  isShowingChallengeCard = false;
  console.log("Show Suspect Card at Index");
  
  var card = new UI.Card();
  card.title("Who is the murderer ?");
  card.body("Click any button to accuse a member of the household");
  card.show();
  
  card.on('click', 'up', function(e) {
    showSuspectMenu();
});

  card.on('click', 'select', function(e) {
    showSuspectMenu();
});

  card.on('click', 'down', function(e) {
    showSuspectMenu();
});
}


var conceptCard = new UI.Card({scrollable: true, style: 'small'});
function showSuspectMenu() {
  
  isShowingChallengeCard = false;
  console.log("Showing Suspect Menu");
  
  // Loading this could take some time; it'd be a good idea to show something/
  // while they wait.
  conceptCard.body('Loading...');
  
  var fruitMenu = new UI.Menu({
  sections: [{
    title: 'Suspect List',
    items: story.characters
  }]
});
  
  fruitMenu.show();
  
  // Add a click listener for select button click
  fruitMenu.on('select', function(event) {
  // Show a card with clicked item details
  var detailCard = new UI.Card({
    scrollable:true,
    title: story.characters[event.itemIndex].title,
    subtitle: "It was the Brother",
    body: story.motive,
  });
  
//     detailCard.subtitle("It was the Brother");
//     detailCard.body(story.motive);
  if (event.itemIndex == 2)
    detailCard.title("Solved !");
  else
    detailCard.title("Maybe you're not Sherlock");
  
  // Show the new Card
  detailCard.show();
});
} 

// var g = 0;
function countStep(){

    Accel.on('tap', function(e) {
//       console.log('Tap event on axis: ' + e.axis + ' and direction: ' + e.direction);
    });
    
  Accel.on('data', function(e) {  
      if (isShowingChallengeCard){
        var tempg = 0;
          var accel = 0;
          for (var sc = 0; sc < e.samples; sc++){
            accel = e.accels[sc];
            tempg = tempg + (accel.x*accel.y*accel.z);
          }
          tempg = tempg/e.samples; //average g over tthe sample range
          
          if (tempg > 0){
            if (!lastGWasPositive){
              steps ++;
              console.log("Incrementing steps to " + steps);
              setDelay();
            }
            lastGWasPositive = true;
          }else{
            if (lastGWasPositive){
              steps ++;
              console.log("Incrementing steps to " + steps);
              setDelay();
            }
            lastGWasPositive = false;
          }
      }
    });
  
  return steps;
}

var maxSteps = 5;
function setDelay(){
    if (steps == maxSteps){
      steps = 0;
      isShowingChallengeCard = false;
      showClueCardAtIndex(lastChallengeIndex);
    }
  
  setTimeout(function(){
    if (steps != maxSteps){
      console.log("count step again after delay");
      countStep();
    }  
}, 400);
  
}

  // This makes a simple 'GET' request to our API; 'type': 'json' makes it parse out
  // the JSON into something we can use.
//   ajax({url: 'http://wearables-api.herokuapp.com/phrase', 'type': 'json'},
//       function(data) {
//         // It worked! Construct a sentence to show on screen.
//         conceptCard.body(data.preamble + " " + data.thing + ".\n\n" + data.action);
//       }, function(data) {
//         // It didn't work. :(
//         conceptCard.body("I don't know. :(");
//       });

//conceptCard.on('click', 'select', doThing);