"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Loger_1 = __importDefault(require("../logger/Loger"));
const PaymentModel_1 = __importDefault(require("../models/PaymentModel"));
class CustomerPaymentService {
    makePayment(payMethod, payAmount) {
        const payment = new PaymentModel_1.default();
        if (payMethod === 'cash') {
            payment.payWithCash(payAmount);
            Loger_1.default.info("Cash pay successfully  Completed");
            return true;
        }
        else if (payMethod === 'card') {
            payment.payWithCredit(payAmount);
            Loger_1.default.info("Card pay successfully  Completed");
            return true;
        }
        return false;
    }
}
exports.default = CustomerPaymentService;
