export class GlobalCounter {
  private static count = 0;

  public static increment() {
    this.count++;
  }

  public static decrement() {
    this.count--;
  }

  public static multiply(num: number) {
    this.count *= num;
  }

  public static getValue(): number {
    return this.count;
  }
}
