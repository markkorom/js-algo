class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(val) {
        const newNode = new Node(val);
        if (!this.size) {
            this.first = newNode;
            this.last = newNode;
        } else {
            const temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return ++this.size;
    }

    pop() {
        if (!this.size) return null;
        const temp = this.first;
        if (temp === this.last) {
            this.last = null;
        }
        this.first = temp.next;
        this.size--;
        return temp.value;
    }
}

var stack = new Stack();
console.log(stack.push(5));
console.log(stack.push(10));
