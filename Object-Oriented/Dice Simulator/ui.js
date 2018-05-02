/*
* ui js
*
* Copyright (c) 2016 Gavin Schilling Marketing
* Licensed under the GNU Affero General Public License
* 
*/

function printNumber(number) {
  const placeholder = document.getElementById("placeholder");
  placeholder.innerHTML = number;
}

const button = document.getElementById("button");

button.onclick = () => {
  const result = dice.roll();
  printNumber(result);
};
