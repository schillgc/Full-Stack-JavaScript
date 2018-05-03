/*
* frontend js
*
* Copyright (c) 2016 Gavin Schilling Marketing
* Licensed under the GNU Affero General Public License
* 
*/

function displayNumber(number) {
  const placeholder = document.getElementById("placeholder");
  placeholder.innerHTML = number;
}

const dice = new Dice(6);
const button = document.getElementById("button");

button.onclick = () => {
  const result = dice.roll();
  displayNumber(result);
};
