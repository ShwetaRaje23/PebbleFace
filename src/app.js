/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */

var people = [
  {
    title: "Governor",
    subtitle: "Green and crispy!"
  },
  {
    title: "Wife",
    subtitle: "Peel first!"
  },
  {
    title: "Brother",
    subtitle: "Only three left!"
  },
  {
    title: "Maid",
    subtitle: "Only three left!"
  },
  {
    title: "Secratary",
    subtitle: "Only three left!"
  }
];

var UI = require('ui');
//var ajax = require('ajax');

var main = new UI.Card({
  title: 'Pebble.js',
  icon: 'images/menu_icon.png',
  subtitle: 'Hello World!',
  body: 'Press any button.'
});

main.show();

main.on('click', 'up', function(e) {
  var menu = new UI.Menu({
    sections: [{
      items: [{
        title: 'Pebble.js',
        icon: 'images/menu_icon.png',
        subtitle: 'Can do Menus'
      }, {
        title: 'Second Item',
        subtitle: 'Subtitle Text'
      }]
    }]
  });
  menu.on('select', function(e) {
    console.log('Selected item #' + e.itemIndex + ' of section #' + e.sectionIndex);
    console.log('The item is titled "' + e.item.title + '"');
  });
  menu.show();
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
    items: people
  }]
});
  
  fruitMenu.show();
  
  // Add a click listener for select button click
fruitMenu.on('select', function(event) {
 console.log(" detailCard jjj" );
  // Show a card with clicked item details
  var detailCard = new UI.Card({
    title: people[event.itemIndex].title,
    body: people[event.itemIndex].subtitle
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
  var card = new UI.Card();
  card.title('A Card');
  card.subtitle('Is a Window');
  card.body('The simplest window type in Pebble.js.');
  card.show();
});