
class LinkedList {
    constructor() {
        this.headNode = null;
    }

    append(value) {
        const newNode = new Node(value);

        if (this.headNode === null) {
            this.headNode = newNode;
            return;
        }

        let current = this.headNode;

        while (current.nextNode !== null) {
            current = current.nextNode;
        }

        current.nextNode = newNode;
    }

    prepend(value) {
        const newNode = new Node(value);

        if (this.headNode === null) {
            this.headNode = newNode;
            return;
        }

        newNode.nextNode = this.headNode;
        this.headNode = newNode;
    }

    size() {
        let count = 0;
        let current = this.headNode;

        while (current !== null) {
            count++;
            current = current.nextNode;
        }

        return count;
    }

    head() {
        if (this.headNode === null) {
            return undefined;
        }

        return this.headNode.value;
    }

    tail() {
        if (this.headNode === null) {
            return undefined;
        }

        let current = this.headNode;

        while (current.nextNode !== null) {
            current = current.nextNode;
        }

        return current.value;
    }

    at(index) {
        if (index < 0 || this.headNode === null) {
            return undefined;
        }

        let current = this.headNode;
        let currentIndex = 0;

        while (current !== null && currentIndex < index) {
            current = current.nextNode;
            currentIndex++;
        }

        if (current === null) {
            return undefined;
        }

        return current.value;
    }

    pop() {
        if (this.headNode === null) {
            return undefined;
        }

        // Only one node
        if (this.headNode.nextNode === null) {
            const removedValue = this.headNode.value;
            this.headNode = null;
            return removedValue;
        }

        let current = this.headNode;

        // Stop at the node before the last node
        while (current.nextNode.nextNode !== null) {
            current = current.nextNode;
        }

        const removedValue = current.nextNode.value;
        current.nextNode = null;

        return removedValue;
    }

    contains(value) {
        let current = this.headNode;

        while (current !== null) {
            if (current.value === value) {
                return true;
            }

            current = current.nextNode;
        }

        return false;
    }

    findIndex(value) {
        let current = this.headNode;
        let index = 0;

        while (current !== null) {
            if (current.value === value) {
                return index;
            }

            current = current.nextNode;
            index++;
        }

        return -1;
    }

    toString() {
        let result = "";
        let current = this.headNode;

        while (current !== null) {
            result += `( ${current.value} ) -> `;
            current = current.nextNode;
        }

        result += "null";

        return result;
    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.nextNode = null;
    }
}


// Testing
const list = new LinkedList();

list.append("a");
list.append("b");
list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());
console.log("Size:", list.size());
console.log("Head:", list.head());
console.log("Tail:", list.tail());
console.log("At index 2:", list.at(2));
console.log("Contains dog:", list.contains("dog"));
console.log("Index of cat:", list.findIndex("cat"));

console.log("Popped:", list.pop());
console.log(list.toString());

