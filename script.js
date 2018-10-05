var customName = document.getElementById('customname');
var randomize = document.querySelector('.randomize');
var story = document.querySelector('.story');
var storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
var newStory = storyText;


var insertx = ["Willy the Goblin","Big Daddy","Father Christmas"];
var inserty = ["the soup kitchen","Disneyland","the White House"];
var insertz = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];

  function randomValueFromArray(array){
    var random = Math.floor(Math.random()*array.length);
    return array[random];
  };

var xitem=randomValueFromArray(insertx);
var yitem=randomValueFromArray(inserty);
var zitem=randomValueFromArray(insertz);
  console.log(xitem, yitem, zitem);

//replace "insertx" with randomly selected item
newStory=newStory.replace(":insertx:", xitem);
newStory=newStory.replace(":inserty:", yitem);
newStory=newStory.replace(":insertz:", zitem);
newStory=newStory.replace(':insertx:', xitem);
  console.log(newStory);


//listen for custom name and replace if available

randomize.addEventListener('click', result);

function result() {

  if(customName.value !== '') {
    var name = customName.value;
    newStory=newStory.replace("Bob", name);
  }
//change to UK measures if UK checked

  if(document.getElementById("uk").checked) {
    var weight = Math.round(300/14) + " stone";
    var temperature =  Math.round((94-32)*5/9) + " Celius";
    newStory=newStory.replace('94 fahrenheit', temperature);
    newStory=newStory.replace('300 pounds', weight);
}
  story.textContent = newStory;
  story.style.visibility = 'visible';
}
