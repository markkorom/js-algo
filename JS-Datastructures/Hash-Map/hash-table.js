class HashTable {
    constructor(size=53) {
        this.keyMap = new Array(size);
    }

    _hash(key) {
        let total = 0;
        let WEIRD_PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            const char = key[i];
            const value = char.charCodeAt(0) - 96;
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        return total;
    }

    set(key, value) {
        const index = this._hash(key);
        if (!this.keyMap[index]) this.keyMap[index] = [];
        this.keyMap[index].push([key, value]);
    }

    get(key) {
        const index = this._hash(key);
        if (this.keyMap[index]) {
            for (let i = 0; i < this.keyMap[index].length; i++) {
                if (this.keyMap[index][i][0] === key) {
                    return this.keyMap[index][i][1];
                }
            }
        }
        return undefined;
    }

    values() {
        const keyssArr = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if (!keyssArr.includes(this.keyMap[i][j][1])) {
                        keyssArr.push(this.keyMap[i][j][1]);
                    }
                }
            }
        }
        return keyssArr;
    }

    keys() {
        const valuesArr = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if (!valuesArr.includes(this.keyMap[i][j][0])) {
                        valuesArr.push(this.keyMap[i][j][0]);
                    }
                }
            }
        }
        return valuesArr;
    }
}

const ht = new HashTable();
ht.set("hello", 3);
ht.set("hello", 3);
ht.set("pink", "#1");
ht.set("yellow", "#5");
ht.set("cyan", "#199");
ht.set("hello", "#1858");

console.log(ht.values());
console.log(ht.keys());
