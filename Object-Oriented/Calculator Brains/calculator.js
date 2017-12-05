/*
* calculator js
*
* Copyright (c) 2016 Gavin Schilling Marketing
* Licensed under the GNU Affero General Public License
* 
*/

var calculator = {
		sum: 0,
		add: function(value) {
      this.sum += value;
    },
    clear: function() {
      this.sum = 0;
    }, 
    equals: function() {
      return this.sum;
    }
}
