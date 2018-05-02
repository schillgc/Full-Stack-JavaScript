/*
* calculator js
*
* Copyright (c) 2016 Gavin Schilling Marketing
* Licensed under the GNU Affero General Public License
* 
*/

const calculator = {
		sum: 0,
		add(value) {
      this.sum += value;
    },
    clear() {
      this.sum = 0;
    }, 
    equals() {
      return this.sum;
    }
};
