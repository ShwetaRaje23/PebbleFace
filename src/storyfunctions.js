//Story Data
var story = {
  "characters": [
    {
      "name": "Governor",
      "characterid": 0,
      "characterDescription": "Governor Arnold Capaldi has been running the small town of Amberlee for 3 years. He is known for his promiscuity and poor treatment of his employees."
    },
    {
      "name": "Wife",
      "characterid": 1,
      "characterDescription": "Governor Arnold's wife, Lynda is a kind, beautiful woman. She trained as a doctor but left a promising career to support her husband in his long campaigns."
    },
    {
      "name": "Brother",
      "characterid": 2,
      "characterDescription": "Thomas Capaldi, Governor Arnold's brother, is hot-headed and sincere but his efforts always seem to go un-noticed "
    },
    {
      "name": "Maid",
      "characterid": 3,
      "characterDescription": "Their maid Marta has been working with the Capaldi's for about 8 years now. She loves gossip, but doesn't everyone? "
    },
    {
      "name": "Secretary",
      "characterid": 4,
      "characterDescription": "Governor Arnold's secratary Julia loves attention. She knows a little too much about the Governor than his wife Lynda would like. "
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

function getAllCharacters(){
  return story.characters;
}

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

function getMotive(){
  return story.motive;
}