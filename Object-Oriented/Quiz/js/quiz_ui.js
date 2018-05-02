/*
* quiz_ui js
*
* Copyright (c) 2016 Gavin Schilling Marketing
* Licensed under the GNU Affero General Public License
* 
*/

const QuizUI = {
  displayNext() {
    if (quiz.hasEnded()) {
      this.displayScore();
    } else {
      this.displayQuestion();
      this.displayChoices();
      this.displayProgress();
    }
  },
  
  displayQuestion() {
    this.populateIdWithHTML("question", quiz.getCurrentQuestion().text);
  },
                            
  displayChoices() {
    const choices = quiz.getCurrentQuestion().choices;

    for(let i = 0; i < choices.length; i++) {
      this.populateIdWithHTML(`choice${i}`, choices[i]);
      this.guessHandler(`guess${i}`, choices[i]);
    }
  },
    
  displayScore() {
    let gameOverHTML = "<h1>Complete</h1>";
    gameOverHTML += `<h2> Your score is: ${quiz.score}</h2>`;
    this.populateIdWithHTML("quiz", gameOverHTML);
  },
    
  populateIdWithHTML(id, text) {
    const element = document.getElementById(id);
    element.innerHTML = text;
  },
  guessHandler(id, guess) {
    const button = document.getElementById(id);
    button.onclick = () => {
      quiz.guess(guess);
      QuizUI.displayNext();
    }
  },

  displayProgress() {
    const currentQuestionNumber = quiz.currentQuestionIndex + 1;
    this.populateIdWithHTML("progress", `Question ${currentQuestionNumber} of ${quiz.questions.length}`);
  }
};
