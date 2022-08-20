"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Loger_1 = __importDefault(require("../logger/Loger"));
class CardPay {
    pay(payAmount) {
        Loger_1.default.info("Card Pay -> " + payAmount);
    }
}
exports.default = CardPay;
