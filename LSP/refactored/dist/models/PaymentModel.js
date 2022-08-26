"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Loger_1 = __importDefault(require("../logger/Loger"));
class Payment {
    payWithCash(payAmount) {
        Loger_1.default.info("Cash Pay -> " + payAmount);
    }
    payWithCredit(payAmount) {
        Loger_1.default.info("Credit Card Pay -> " + payAmount);
    }
}
exports.default = Payment;
