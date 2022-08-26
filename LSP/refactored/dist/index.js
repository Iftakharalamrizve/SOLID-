"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ItemPriceCalculationService_1 = __importDefault(require("./services/ItemPriceCalculationService"));
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
    customerPaymentTypeValidate(payMethod, paymentIdentityNumber) {
        let customrePayMethodType = payMethod;
        return customrePayMethodType.validatePaymentOption(paymentIdentityNumber);
    }
    makeCustomerPayment(payMethod) {
        let totalPurchaseAmount = this.totalPurchasedAmount();
        let customrePayMethodType = payMethod;
        return customrePayMethodType.pay(totalPurchaseAmount);
    }
}
exports.default = Output;
