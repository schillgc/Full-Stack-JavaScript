/*
* test_dice js
*
* Copyright (c) 2016 Gavin Schilling Marketing
* Licensed under the GNU Affero General Public License
* 
*/

var assert = require("assert");
var Dice = require("../src/models/dice.js");

describe("Dice", function(){
	describe("roll()", function(){
		it("should return a number over 0 and less than 7", function(){
				var dice = new Dice(6);
				assert(dice.roll() < 7);
				assert(dice.roll() > 0);
		});
	});
});