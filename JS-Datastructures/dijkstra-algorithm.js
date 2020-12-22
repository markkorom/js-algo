class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }

    get adjacencyListObj() {
        return this.adjacencyList;
    }

    addVertex(vertex) {
        if (!this.adjacencyListObj[vertex]) this.adjacencyListObj[vertex] = [];
    }

    addEdge(vertex1, vertex2, weight) {
        this.adjacencyListObj[vertex1].push({node: vertex2, weight}); 
        this.adjacencyListObj[vertex2].push({node: vertex1, weight});
    }

    dijkstra(start, finish) {
        const distances = {};
        const priorityQueue = new PriorityQueue();
        const previous = {};
        const path = [];
        let smallest;

        for (const key in this.adjacencyListObj) {
            const priority = key === start ? 0 : Infinity;
            distances[key] = priority;
            priorityQueue.enqueue(key, priority);
            previous[key] = null;
        }

        while(priorityQueue.values.length) {
            smallest = priorityQueue.dequeue().val;
            if (smallest === finish) {
                while(previous[smallest]) {
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                break;
            };
            if (smallest || distances[smallest] !== Infinity) {
                for (const neighbor in this.adjacencyListObj[smallest]) {
                    // find neighboring node
                    let nextNode = this.adjacencyListObj[smallest][neighbor];
                    // calculate new distance to neighboring node
                    let candidate = distances[smallest] + nextNode.weight;
                    let nextNeighbor = nextNode.node;
                    if (candidate < distances[nextNeighbor]) {
                        // update new smallest distance
                        distances[nextNeighbor] = candidate;
                        // updating previous - How we got to neighbor
                        previous[nextNeighbor] = smallest;
                        // enqueue in prority queue with new priority
                        priorityQueue.enqueue(nextNeighbor, candidate);
                    }
                }

            }
        }

        return path.concat(smallest).reverse();
    }
}

// class PriorityQueue {
//     constructor() {
//         this.values = [];
//     }
//     enqueue(val, priority) {
//         this.values.push({ val, priority });
//         this.sort();
//     }
//     dequeue() {
//         return this.values.shift();
//     }
//     sort() {
//         this.values.sort((a, b) => a.priority - b.priority);
//     }
// }

class PriorityQueue {
    constructor() {
        this.values = [];
    }
    get valuesArr() {
        return this.values;
    }

    enqueue(val, priority) {
        const newNode = new Node(val, priority);
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

class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}

const weightedGraph = new WeightedGraph();

weightedGraph.addVertex("A");
weightedGraph.addVertex("B");
weightedGraph.addVertex("C");
weightedGraph.addVertex("D");
weightedGraph.addVertex("E");
weightedGraph.addVertex("F");

weightedGraph.addEdge("A", "B", 4);
weightedGraph.addEdge("A", "C", 2);
weightedGraph.addEdge("B", "E", 3);
weightedGraph.addEdge("C", "D", 2);
weightedGraph.addEdge("C", "F", 4);
weightedGraph.addEdge("D", "E", 3);
weightedGraph.addEdge("D", "F", 1);
weightedGraph.addEdge("E", "F", 1);

// console.log(weightedGraph.adjacencyListObj);
console.log(weightedGraph.dijkstra("A", "E"));
