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
}

// var tree = new BinarySearchTree();
// tree.insert(10);
// tree.insert(15);
// tree.insert(7);
// tree.insert(30);
// tree.insert(4);
// tree.insert(4);

// console.log(tree.find(4));
// console.log(tree.find(40));

// console.log(tree);
