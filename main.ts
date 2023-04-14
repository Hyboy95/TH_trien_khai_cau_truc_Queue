import {Queue} from "./Queue";

let queue: Queue<number> = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
console.log(queue.list);
console.log(queue.size());
console.log(queue.dequeue());
console.log(queue.size());