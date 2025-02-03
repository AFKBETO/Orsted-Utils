declare global {
    interface Array<T> {
        randomItem(): T;
    }
}

Array.prototype.randomItem = function () {
    const result = Math.floor(Math.random() * this.length);

    return this[result];
};
