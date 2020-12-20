function hash(key, arrLength) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
        const char = key[i];
        const value = char.charCodeAt(0) - 96;
        total = (total * WEIRD_PRIME + value) % arrLength;
    }
    console.log(total);
    return total;
}

hash("hello", 13);
hash("goodbye", 13);
hash("cyan", 13);
hash("hi", 13);
