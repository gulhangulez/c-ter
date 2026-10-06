export const systemClock = { now: () => new Date() };
export class TestClock {
    t;
    constructor(t) {
        this.t = t;
    }
    now() {
        return new Date(this.t.getTime());
    }
    set(d) {
        this.t = new Date(d);
    }
    advanceHours(h) {
        this.t = new Date(this.t.getTime() + h * 3600_000);
    }
    advanceMinutes(m) {
        this.t = new Date(this.t.getTime() + m * 60_000);
    }
}
