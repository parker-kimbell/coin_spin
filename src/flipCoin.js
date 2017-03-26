import { observable, computed } from 'mobx';
import {
  HEADS,
  TAILS
} from './_constants/coinFlipConstants';
// TODO: decouple. Mixes abstractions for a coin flip and a coin
class coinFlip {

  constructor() {
    this.increaseNumberOfFlips = this.increaseNumberOfFlips.bind(this);
    this.decreaseNumberOfFlips = this.decreaseNumberOfFlips.bind(this);
    this.flipAllCoins = this.flipAllCoins.bind(this);
    this.recursiveFlip = this.recursiveFlip.bind(this);
    this.isHeads = this.isHeads.bind(this);
    this.isTails = this.isTails.bind(this);
    this.generateCoinFlip = this.generateCoinFlip.bind(this);
  }

  @observable numberOfFlips = 0;
  @observable flipResultsHeads = 0;
  @observable flipResultsTails = 0;

  increaseNumberOfFlips() {
    this.numberOfFlips += 1;
    console.log(this.numberOfFlips)
  }

  decreaseNumberOfFlips() {
    if (this.numberOfFlips > 0) this.numberOfFlips -= 1;
    console.log(this.numberOfFlips)
  }

  flipAllCoins() {
    this.flipResultsHeads = 0;
    this.flipResultsTails = 0;
    this.recursiveFlip(this.numberOfFlips);
    return {
      tails : this.flipResultsTails,
      heads : this.flipResultsHeads
    };
  }

  recursiveFlip(flipsRemaining) {
    if (flipsRemaining === 0) return;

    let flipResult = this.generateCoinFlip();
    if (this.isHeads()) {
      this.flipResultsHeads += 1;
    } else { // Case: we have tails
      this.flipResultsTails += 1;
    }
    flipsRemaining -= 1;
    this.recursiveFlip(flipsRemaining);
  }

  generateCoinFlip() {
    this.currentFlip = Math.floor(Math.random() * 100);
    return this.currentFlip;
  }

  isHeads() {
    if (this.currentFlip >= 50) return true;
    else return false;
  }

  isTails() {
    if (this.currentFlip < 50) return true;
    else return false;
  }
}

const coinFlipStore = new coinFlip;
export default coinFlipStore;
