"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Item {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    setName(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
    setPrice(price) {
        this.price = price;
    }
    getPrice() {
        return this.price;
    }
}
exports.default = Item;
