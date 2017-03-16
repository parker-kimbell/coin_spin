import { observable, computed } from 'mobx';
import {
  HEADS,
  TAILS
} from './constants/coinFlipConstants';

class coinFlip {

  @observable numberOfFlips = 0;

  increaseNumberOfFlips() {
    this.numberOfFlips += 1;
  }

  decreaseNumberOfFlips() {
    this.numberOfFlips -= 1;
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
