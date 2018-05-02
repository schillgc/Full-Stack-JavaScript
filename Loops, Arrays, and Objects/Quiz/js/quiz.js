/*
* quiz js
*
* Copyright (c) 2016 Gavin Schilling Marketing
* Licensed under the GNU Affero General Public License
* 
*/

let userResponse;
let correctAnswersCounter = 0;
let html;

function print(message) {
  const outputDiv = document.getElementById("output");
  outputDiv.innerHTML = message;
}

function buildList(arr) {
  let listHTML = "<ol>";
  for (let i = 0; i < arr.length; i++) {
    listHTML += `<li>${arr[i]}</li>`;
  }
  listHTML += "</ol>";
  return listHTML;
}

const quiz = [
  ["What are 3 feet long on many adult Triceratops?", "horns"],
  [
    "What dinosaur was about the size of a swan with a deadly claw on each foot?",
    "velociraptor"
  ],
  [
    "What kind of dinosaur has been credited with the largest dinasaur poop ever found?",
    "t-rex"
  ]
];

const questionsCorrect = [];
const questionsIncorrect = [];

for (i = 0; i < quiz.length; i += 1) {
  userResponse = prompt(quiz[i][0]);
  if (userResponse.toLowerCase() === quiz[i][1]) {
    questionsCorrect.push(quiz[i][0]);
    correctAnswersCounter += 1;
  } else {
    questionsIncorrect.push(quiz[i][0]);
  }
}
html = `You got ${correctAnswersCounter} correct.`;
html += "<h2>You got these questions correct:</h2>";
html += buildList(questionsCorrect);
html += "<h2>You got these questions wrong:</h2>";
html += buildList(questionsIncorrect);
print(html);
