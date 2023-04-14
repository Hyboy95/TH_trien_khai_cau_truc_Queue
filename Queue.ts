export class Queue<G> {
    list: G[] = [];
    constructor() {
    }
    enqueue(data: G) {
        this.list.push(data);
    }
    dequeue(): G | undefined {
        return this.list.shift();
    }
    size(): number {
        return this.list.length;
    }
}