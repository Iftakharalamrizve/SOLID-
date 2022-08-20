"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ItemPriceCalculationService_1 = __importDefault(require("./services/ItemPriceCalculationService"));
const CustomerPaymentService_1 = __importDefault(require("./services/CustomerPaymentService"));
class Output {
    constructor(item, tax, bags) {
        this.listOfItem = [];
        this.listOfItem = [...item];
        this.tax = tax;
        this.numberOfBag = bags;
    }
    totalPurchasedAmount() {
        let priceCalculateService = new ItemPriceCalculationService_1.default();
        return priceCalculateService.calculateCustomerPurchaseAmount(this.listOfItem, this.numberOfBag, this.tax);
    }
    makeCustomerPayment(payMethod) {
        let totalPurchaseAmount = this.totalPurchasedAmount();
        let customrePayType = payMethod;
        let customerPaymentService = new CustomerPaymentService_1.default(customrePayType);
        return customerPaymentService.makePayment(totalPurchaseAmount);
    }
}
exports.default = Output;
