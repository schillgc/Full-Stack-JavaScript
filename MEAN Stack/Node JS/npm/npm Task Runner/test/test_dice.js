/*
* test_dice js
*
* Copyright (c) 2016 Gavin Schilling Marketing
* Licensed under the GNU Affero General Public License
* 
*/

import assert from "assert";

import Dice from "../src/models/dice.js";

describe("Dice", () => {
	describe("roll()", () => {
		it("should return a number over 0 and less than 7", () => {
				const dice = new Dice(6);
				assert(dice.roll() < 7);
				assert(dice.roll() > 0);
		});
	});
});
