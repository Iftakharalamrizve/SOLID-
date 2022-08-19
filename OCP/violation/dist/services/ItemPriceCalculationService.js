"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Loger_1 = __importDefault(require("../logger/Loger"));
const TaxCalculationService_1 = __importDefault(require("./TaxCalculationService"));
class ItemPriceCalculationService {
    constructor() {
        this.plasticBagPrice = 2.0;
        this.TaxCalculationService = new TaxCalculationService_1.default();
    }
    totalItemPrice(listOfItem) {
        let itemPrice = 0;
        for (let item of listOfItem) {
            itemPrice += item.getPrice();
        }
        return itemPrice;
    }
    calculatePlasticBagPrice(totalBagNumber) {
        if (totalBagNumber > 2) {
            this.plasticBagPrice = this.plasticBagPrice * 0.5;
        }
    }
    calculateCustomerPurchaseAmount(listOfItem, numberOfBag, tax) {
        let totalitemAmount = this.totalItemPrice(listOfItem);
        this.calculatePlasticBagPrice(numberOfBag);
        let totalTaxAmount = this.TaxCalculationService.calculateTax(totalitemAmount, tax);
        let totalPrice = totalitemAmount + totalTaxAmount + numberOfBag * this.plasticBagPrice;
        Loger_1.default.info("Total Price of the items -> " + totalPrice);
        return totalPrice;
    }
}
exports.default = ItemPriceCalculationService;
