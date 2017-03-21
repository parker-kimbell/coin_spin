import { observable, computed } from 'mobx';
import {
  HEADS,
  TAILS
} from './_constants/coinFlipConstants';

class coinFlip {

  constructor() {
    this.increaseNumberOfFlips = this.increaseNumberOfFlips.bind(this);
    this.decreaseNumberOfFlips = this.decreaseNumberOfFlips.bind(this);
  }

  @observable numberOfFlips = 0;

  increaseNumberOfFlips() {
    this.numberOfFlips += 1;
    console.log(this.numberOfFlips)
  }

  decreaseNumberOfFlips() {
    this.numberOfFlips -= 1;
    console.log(this.numberOfFlips)
  }

  // Returns true for heads, false for tails
  generateCoinFlip() {
    let coinFlip = Math.floor(Math.random() * 100);
    if (coinFlip > 50) return HEADS;
    else return TAILS;
  }
}

const coinFlipStore = new coinFlip;
export default coinFlipStore;
