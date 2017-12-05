/*
* quiz js
*
* Copyright (c) 2016 Gavin Schilling Marketing
* Licensed under the GNU Affero General Public License
* 
*/

var userResponse;
var correctAnswersCounter = 0;
var html;

function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

function buildList(arr) {
  var listHTML = '<ol>';
    for (var i = 0; i < arr.length; i ++) {
      listHTML += "<li>" + arr[i] + "</li>";
    }
  listHTML += "</ol>";
  return listHTML;
}

var quiz = [
  ["What are 3 feet long on many adult Triceratops?", "horns"],
  ["What dinosaur was about the size of a swan with a deadly claw on each foot?", "velociraptor"],
  ["What kind of dinosaur has been credited with the largest dinasaur poop ever found?", "t-rex"]
];

var questionsCorrect = [];
var questionsIncorrect = [];

for (i = 0; i < quiz.length; i += 1) {
  userResponse = prompt(quiz[i][0]);
  if (userResponse.toLowerCase() === quiz[i][1]){
    questionsCorrect.push(quiz[i][0]);
    correctAnswersCounter += 1;
  } else {
    questionsIncorrect.push(quiz[i][0]);
  }
}
html = "You got " + correctAnswersCounter + " correct.";
html += "<h2>You got these questions correct:</h2>";
html += buildList(questionsCorrect);
html +="<h2>You got these questions wrong:</h2>";
html += buildList(questionsIncorrect);
print(html);