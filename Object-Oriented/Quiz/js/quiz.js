/*
* quiz js
*
* Copyright (c) 2016 Gavin Schilling Marketing
* Licensed under the GNU Affero General Public License
* 
*/

class Quiz {
  constructor(questions) {
    this.score = 0;
    this.questions = questions;
    this.currentQuestionIndex = 0;
  }

  guess(answer) {
    if(this.getCurrentQuestion().isCorrectAnswer(answer)) {
      this.score++;
    }
    this.currentQuestionIndex++;
  }

  getCurrentQuestion() {
    return this.questions[this.currentQuestionIndex];
  }

  hasEnded() {
    return this.currentQuestionIndex >= this.questions.length;
  }
}
