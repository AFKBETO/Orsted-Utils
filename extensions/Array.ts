declare global {
    interface Array<T> {
        randomItem(): T;
    }
}

Array.prototype.randomItem = function () {
    if (this.length === 0) {
        throw new Error('Array is empty');
    }
    const result = Math.floor(Math.random() * this.length);

    return this[result];
};
