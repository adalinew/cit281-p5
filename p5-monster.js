module.exports = class Monster {
    constructor({ monsterName = "Unknown", minimumLife = 0, currentLife = 100 }) {
      this.monsterName = monsterName;
      this.minimumLife = minimumLife;
      this.currentLife = currentLife;
      this.isAlive = currentLife >= minimumLife;
    }
  
    updateLife(lifeChangeAmount) {
      this.currentLife += lifeChangeAmount;
      this.currentLife = this.currentLife < 0 ? 0 : this.currentLife;
      this.isAlive = this.currentLife >= this.minimumLife;
    }
  
    randomLifeDrain(minimumLifeDrain, maximumLifeDrain) {
      if (minimumLifeDrain < maximumLifeDrain) {
        let randomDrain = getRandomInteger(minimumLifeDrain, maximumLifeDrain + 1);
        console.log(`-${this.monsterName} random power drain ${randomDrain}`);
        this.updateLife(-randomDrain);
      }
      // If the minimum life drain is less than the maximum life drain, create a variable that gets the parameter function,
      // add one, and output the monster's name and the amount of power that was drained from their life.
    }
  };
  
  function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  