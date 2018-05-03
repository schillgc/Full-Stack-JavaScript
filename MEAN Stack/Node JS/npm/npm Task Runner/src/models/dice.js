!(root => {
  class Dice {
    constructor(sides) {
      this.sides = sides;
    }

    roll() {
      const randomNumber = Math.floor(Math.random() * this.sides) + 1;
      return randomNumber;
    }
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = Dice;
  } else {
    root.Dice = Dice;
  }
})(this);
