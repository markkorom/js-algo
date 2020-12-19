class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    // insert(value) {
    //     const newNode = new Node(value);
    //     if (!this.root) {
    //         this.root = newNode;
    //         return this;
    //     } 
    //     const rootValue = this.root.value;
    //     const lessThenRootValue = value < rootValue;
    //     const greaterThenRootValue = value > rootValue;
    //     if (greaterThenRootValue) {
    //         this.root.right ? this.insert(value) : (this.root.right = newNode);
    //     }
    //     if (lessThenRootValue) {
    //         this.root.left ? this.insert(value) : (this.root.left = newNode);
    //     }
    //     return this;
       
    // }

    insert(value) {
        const newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
            return this;
        } 
        let current = this.root;
        while(true) {
            const { value: currentValue } = current;
            const equalToRootValue = value === currentValue;
            if (equalToRootValue) return undefined;

            const greaterThenRootValue = value > currentValue;
            if (greaterThenRootValue) {
                if (!current.right) {
                    current.right = newNode;
                    return this;
                } else {
                    current = current.right;
                }
            }

            const lessThenRootValue = value < currentValue;
            if (lessThenRootValue) {
                if (!current.left) {
                    current.left = newNode;
                    return this;
                } else {
                    current = current.left;
                }
            }
        }
    }

    find(value) {
        if (!this.root) return false;
        let current = this.root;
        let found = false;
        while(!found && current) {
            if (value > current.value) {
                current = current.right;
            } else if (value < current.value) {
                current = current.left;
            } else {
                found = true;
            }
        }
        if (!found) return undefined;
        return current;
    }

    // breadth first search
    BFS() {
        let data = [];
        let queue = [];
        let node = this.root;
        queue.push(node);
        while(queue.length) {
            node = queue.shift();
            data.push(node.value);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        return data;
    }

    // depth first search
    DFSPreOrder() {
        let data = [];
        function traverse(node) {
            data.push(node.value);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }

    DFSPostOrder() {
        let data = [];
        function traverse(node) {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            data.push(node.value);
        }
        traverse(this.root);
        return data;
    }

    DFSInOrder() {
        let data = [];
        function traverse(node) {
            if (node.left) traverse(node.left);
            data.push(node.value);
            if (node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }
}

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

console.log(tree.BFS()); // [ 10, 6, 15, 3, 8, 20 ]
console.log(tree.DFSPreOrder()); // [ 10, 6, 3, 8, 15, 20 ]
console.log(tree.DFSPostOrder()); // [ 3, 8, 6, 20, 15, 10 ]
console.log(tree.DFSInOrder()); // [ 3, 6, 8, 10, 15, 20 ]
