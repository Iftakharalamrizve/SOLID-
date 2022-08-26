"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("./index"));
const Item_1 = __importDefault(require("./Item"));
const BkashPay_1 = __importDefault(require("./models/BkashPay"));
const CardPay_1 = __importDefault(require("./models/CardPay"));
const CashPay_1 = __importDefault(require("./models/CashPay"));
describe('Sell Store Module', () => {
    let outputObj = new index_1.default([
        new Item_1.default('Macbook Pro', 1900),
        new Item_1.default('Macbook Keybord', 120),
        new Item_1.default('Macbook Mouse', 90)
    ], 10, 2);
    it('calculate price the all purchase item ', () => {
        let itemPurchasePrice = outputObj.totalPurchasedAmount();
        expect(itemPurchasePrice).toEqual(2124);
    });
    it('checking payment process via cash', () => {
        let paymentStatus = outputObj.makeCustomerPayment(new CashPay_1.default);
        expect(paymentStatus).toBeTruthy;
    });
    it('checking payment process via card', () => {
        let paymentStatus = outputObj.makeCustomerPayment(new CardPay_1.default);
        expect(paymentStatus).toBeTruthy;
    });
    it('checking payment process via bkash', () => {
        let paymentStatus = outputObj.makeCustomerPayment(new BkashPay_1.default);
        expect(paymentStatus).toBeTruthy;
    });
});
