var customName = document.getElementById('customname');
var randomize = document.querySelector('.randomize');
var story = document.querySelector('.story');

function randomValueFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}

var storyText =
  "It was frigid cold outside, probably 20 farenheit, so :insertx: decided to stay inside. But, suddenly, :insertx: got drowsy, and was teleported to :inserty:. :insertx: was terrified until the evil cyborg staring at him with his single eyeball :insertz:. The king man arrived, scooping :insertx: up, saving him from the odd world they had descended into. With 5000 pounds of strength, :insertx: was able to get back home, the king man on his arm.";

var insertX = ["Shane the Wayne Dog", "Smaller Daddy", "Pam"];

var insertY = ["Planet Zorg", "your mom's house", "the grand egg house 2.0"];

var insertZ = ["exploded into a cloud of sprinkling confetti", "kissed the king man on the mouth then died", "started crying, drowning in his own tears"];

randomize.addEventListener('click', result);

function result() {
  var newStory = storyText;
  var xItem = randomValueFromArray(insertX);
  var yItem = randomValueFromArray(insertY);
  var zItem = randomValueFromArray(insertZ);

  var newStory = newStory.replace(':insertx:', xItem);
  var newStory = newStory.replace(':insertx:', xItem);
  var newStory = newStory.replace(':insertx:', xItem);
  var newStory = newStory.replace(':insertx:', xItem);
  var newStory = newStory.replace(':insertx:', xItem);
  var newStory = newStory.replace(':inserty:', yItem);
  var newStory = newStory.replace(':insertz:', zItem);
 
  if (customName.value != '') {
    var name = customName.value;
    newStory = newStory.replace('Bob', name);

  }

  if (document.getElementById("uk").checked) {
    var weight = Math.round(300 * 0.0714286) + ' stone';
    var temperature = Math.round((94 - 32) * (5/9)) + ' centigrade';
    var newStory = newStory.replace('20 farenheit', temperature);
    var newStory = newStory.replace('5000 pounds', weight);

  }

 
  story.textContent = newStory;
  story.style.visibility = 'visible';
}