class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    get adjacencyListObj() {
        return this.adjacencyList;
    }

    addVertex(vertex) {
        if (!this.adjacencyListObj[vertex]) this.adjacencyListObj[vertex] = [];
    }

    addEdge(vertex1, vertex2) {
        this.adjacencyListObj[vertex1].push(vertex2); 
        this.adjacencyListObj[vertex2].push(vertex1); 
    }

    removeEdge(vertex1, vertex2) {
        this.adjacencyListObj[vertex1] = this.adjacencyListObj[vertex1].filter(v => v !== vertex2);
        this.adjacencyListObj[vertex2] = this.adjacencyListObj[vertex2].filter(v => v !== vertex1);
    }

    removeVertex(vertex) {
        this.adjacencyListObj[vertex].forEach(v => this.removeEdge(vertex, v));
        delete this.adjacencyListObj[vertex];
    }

    depthFirstRecursive(start) {
        const result = [];
        let visited = {};
        const adjencyList = this.adjacencyListObj;

        (function dfs(vertex) {
            if (!vertex) return null;
            visited[vertex] = true;
            result.push(vertex);
            adjencyList[vertex].forEach(neighbor => {
                if (!visited[neighbor]) dfs(neighbor);
            })
        })(start)

        return result;
    }

    depthFirstIterative(start) {
        const stack = [start];
        const visited = {};
        const result = [];
        let currentVertex;

        visited[start] = true;

        while(stack.length) {
            console.log(stack);
            currentVertex = stack.pop();
            result.push(currentVertex);

            this.adjacencyListObj[currentVertex].forEach(neighbor => {
                if(!visited[neighbor]) {
                    visited[neighbor] = true;
                    stack.push(neighbor);
                }
            });
        }

        return result;
    }

    breadthFirst(start) {
        const queue = [start];
        const result = [];
        const visited = {};
        let currentVertex;

        visited[start] = true;

        while(queue.length) {
            currentVertex = queue.shift();
            result.push(currentVertex);
            
            this.adjacencyListObj[currentVertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            });
        }

        return result;
    }
}

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");
graph.addEdge("D", "F");
graph.addEdge("E", "F");

console.log(graph.breadthFirst("A"));
