"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PaymentAbstraction_1 = __importDefault(require("../abastract/PaymentAbstraction"));
const Loger_1 = __importDefault(require("../logger/Loger"));
class CashPay extends PaymentAbstraction_1.default {
    pay(payAmount) {
        Loger_1.default.info("Cash Pay -> " + payAmount);
        return true;
    }
}
exports.default = CashPay;
