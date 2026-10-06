// Saat soyutlaması: testler zamanı ileri sarabilir (Bölüm 16.1 "test saati").
export interface Clock {
  now(): Date;
}

export const systemClock: Clock = { now: () => new Date() };

export class TestClock implements Clock {
  constructor(private t: Date) {}
  now(): Date {
    return new Date(this.t.getTime());
  }
  set(d: Date | string): void {
    this.t = new Date(d);
  }
  advanceHours(h: number): void {
    this.t = new Date(this.t.getTime() + h * 3600_000);
  }
  advanceMinutes(m: number): void {
    this.t = new Date(this.t.getTime() + m * 60_000);
  }
}
