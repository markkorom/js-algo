class Node {
    constructor(value, priority) {
        this.value = value;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor() {
        this.values = [];
    }
    get valuesArr() {
        return this.values;
    }

    enqueue(value, priority) {
        const newNode = new Node(value, priority);
        this.values.push(newNode);
        this.bubbleUp();
    }

    bubbleUp() {
        let index = this.values.length - 1;
        const element = this.values[index];
        while(index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.values[parentIndex];
            if (element.priority >= parent.priority) break;
            this.values[parentIndex] = element;
            this.values[index] = parent;
            index = parentIndex; 
        }
    }

    dequeue() {
        const min = this.values[0];
        const end = this.values.pop();
        if (this.values.length > 0) this.values[0] = end;
        this.bubbleDown();
        return min;
    }

    bubbleDown() {
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        while(true) {
            let leftChildIndex = 2 * idx + 1;
            let rightChildIndex = 2 * idx + 2;
            let leftChild;
            let rightChild;
            let swap = null;

            if (leftChildIndex < length) {
                leftChild = this.values[leftChildIndex];
                if (leftChild.priority < element.priority) {
                    swap = leftChildIndex;
                }
            }
            if (rightChildIndex < length) {
                rightChild = this.values[rightChildIndex];
                if (
                      (!swap && rightChild.priority < element.priority) ||
                      (swap && rightChild.priority < leftChild.priority)
                    ) 
                {
                    swap = rightChildIndex;
                }
            }

            if (!swap) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }
}

let ER = new PriorityQueue();
ER.enqueue('common cold', 5);
ER.enqueue('gunshot wound', 1);
ER.enqueue('high fever', 4);
ER.enqueue('broken arm', 2);
ER.enqueue('glass in foot', 2);

console.log(ER.dequeue());
console.log(ER.dequeue());
console.log(ER.dequeue());
console.log(ER.dequeue());
console.log(ER.dequeue());

