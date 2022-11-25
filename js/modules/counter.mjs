class Counter {
  constructor() {
    this.value = 0;
  }
  increaseCount() {
    this.value++;
  }
  decreaseCount() {
    this.value == 0 ? (this.value = 0) : this.value--;
  }
  resetCount() {
    this.value = 0;
  }
}

export const counter = new Counter();
