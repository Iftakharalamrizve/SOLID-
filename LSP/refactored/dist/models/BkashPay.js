"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PaymentAbstraction_1 = __importDefault(require("../abastract/PaymentAbstraction"));
const Loger_1 = __importDefault(require("../logger/Loger"));
class BkashPay extends PaymentAbstraction_1.default {
    pay(payAmount) {
        Loger_1.default.info("Bkash payment->" + payAmount);
        return true;
    }
    validatePaymentOption(_pyamentTypeIdentity) {
        //call baksh externaml api for validate identitty
        Loger_1.default.info("call baksh externaml api for validate identitty");
        return true;
    }
}
exports.default = BkashPay;
