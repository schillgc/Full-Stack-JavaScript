/*
* dice js
*
* Copyright (c) 2016 Gavin Schilling Marketing
* Licensed under the GNU Affero General Public License
* 
*/

class diceToRoll {
  constructor(sides) {
    this.sides = sides;
  }

  roll() {
      const randomNumber = Math.floor(Math.random() * this.sides) + 1;
      return randomNumber;
  }
}

const numberofSides = window.prompt("Enter number of sides on dice");
const dice = new diceToRoll(numberofSides);
