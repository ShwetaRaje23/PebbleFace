/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */
//Story Data
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
      "time":"Monday 10:35 am",
      "challenge_text":"You hear someone screaming in the adjoining room",
      "clue_text":"The Wife is complaining on the phone about how there is no money left.",
      "clue_id":0
    },
    {
      "time":"Monday 12:26 pm",
      "challenge_text":"There is something in the bushes there",
      "clue_text":"You find a bloody red pipe",
      "clue_id":1
    },
    {
      "time":"Monday 3:41 pm",
      "challenge_text":"You hear muffled sounds nearby",
      "clue_text":"The Secretary is crying in his room. He sees you and quickly wipes his tears. He says that the Governor was a good boss.",
      "clue_id":2
    },
    {
      "time":"Monday 4:55 pm",
      "challenge_text":"You are walking toward the kitchen. Sounds like running water.",
      "clue_text":"The Brother is washing something in the sink. The water runs red.",
      "clue_id":3
    },
    {
      "time":"Monday 5:30 pm",
      "challenge_text":"You hear voices arguing in the next room.",
      "clue_text":"The Brother and Secretary are arguing near the fireplace. You hear the words 'millions embezzled'.",
      "clue_id":4
    },
    {
      "time":"Monday 6:15 pm",
      "challenge_text":"You decide to search the crime scene. Walk to the Governor's study.",
      "clue_text":"There are two ledgers under the Governor's desk. The transactions are over the same quarter but do not match.",
      "clue_id":5
    },
    {
      "time":"Monday 6:22 pm",
      "challenge_text":"Something moves behind you",
      "clue_text":"Bam ! Everything goes dark.",
      "clue_id":6
    }]
};

//Story Functions

// function getNumberOfChallenges(){
//   return story.history.length;
// }

// function getChallengeTimeAtIndex(index){
//   return story.history[index].time;
// }

// function getChallengeAtIndex(index){
//   return story.history[index].challenge_text;
// }

// function getClueAtIndex(index){
//   return story.history[index].clue_text;
// }


var UI = require('ui');
//var ajax = require('ajax');

var main = new UI.Card({
  title: 'GWAP Walk!',
  icon: 'images/menu_icon.png',
  subtitle: 'Games With A Purpose',
  body: 'Press any button.'
});

main.show();

main.on('click', 'up', function(e) {
  
  doThing();
//   var menu = new UI.Menu({
//     sections: [{
//       items: [{
//         title: 'Pebble.js',
//         icon: 'images/menu_icon.png',
//         subtitle: 'Can do Menus'
//       }, {
//         title: 'Second Item',
//         subtitle: 'Subtitle Text'
//       }]
//     }]
//   });
//   menu.on('select', function(e) {
//     console.log('Selected item #' + e.itemIndex + ' of section #' + e.sectionIndex);
//     console.log('The item is titled "' + e.item.title + '"');
//   });
//   menu.show();
});

// Create a new card in which to show our stellar wearable concepts.
var conceptCard = new UI.Card({scrollable: true, style: 'small'});

// We need this function so that we can use it in two different cases.
function doThing() {
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
 console.log(" detailCard jjj" );
  // Show a card with clicked item details
  var detailCard = new UI.Card({
    title: story.characters[event.itemIndex].title,
    body: story.characters[event.itemIndex].subtitle
  });
  
 console.log("event     " + event.itemIndex );
 console.log("Hi");
  if (event.itemIndex == 2)    
    detailCard.body(" You have found the killer !");
  else
    detailCard.body(" Oops ! You have to try again ");
  // Show the new Card
  detailCard.show();
});
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
}

//conceptCard.on('click', 'select', doThing);

main.on('click', 'select', function(e) {
  // Do the thing! As defined above.
  doThing();
  // When they press the select button, we want to get them another quote.
  // Let's do the thing again.
  // Finally, make sure it actually shows up on-screen.
 // conceptCard.show();
  
});

main.on('click', 'down', function(e) {
  doThing();
//   var card = new UI.Card();
//   card.title('A Card');
//   card.subtitle('Is a Window');
//   card.body('The simplest window type in Pebble.js.');
//   card.show();
});