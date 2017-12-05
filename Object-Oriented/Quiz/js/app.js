/*
* app js
*
* Copyright (c) 2016 Gavin Schilling Marketing
* Licensed under the GNU Affero General Public License
* 
*/

//Creates Questions
var questions = [
  new Question("Who was the first United States president?", [ "President George Washington", "President Thomas Jefferson" ], "President George Washington"),
  new Question("Where was the first capital city of the United States?", [ "Philadelphia", "Washington DC" ], "Philadelphia"),
  new Question("What country did Christopher Columbus believe he landed in 1492 upon the Mayflower?", [ "The United States of America", "India" ], "India")
];

// Creates Quiz
var quiz = new Quiz(questions);

// Displays Quiz
QuizUI.displayNext();