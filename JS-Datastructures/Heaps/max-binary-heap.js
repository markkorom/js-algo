class MaxBinaryHeap {
    constructor() {
        this.values = [41, 39, 33, 18, 27, 12];
    }
    get valuesArr() {
        return this.values;
    }

    insert(value) {
        this.values.push(value);
        this.bubbleUp();
    }

    bubbleUp() {
        let index = this.values.length - 1;
        const element = this.values[index];
        while(index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.values[parentIndex];
            if (element <= parent) break;
            this.values[parentIndex] = element;
            this.values[index] = parent;
            index = parentIndex; 
        }
    }

    extractMax() {
        const max = this.values[0];
        const end = this.values.pop();
        if (this.values.length > 0) this.values[0] = end;
        this.bubbleDown();
        return max;
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
                if (leftChild > element) {
                    swap = leftChildIndex;
                }
            }
            if (rightChildIndex < length) {
                rightChild = this.values[rightChildIndex];
                if (
                      (!swap && rightChild > element) ||
                      (swap && rightChild > leftChild)
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

const heap = new MaxBinaryHeap();

heap.insert(55);
console.log(heap.extractMax());
console.log(heap.extractMax());

