"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CustomerPaymentService {
    constructor(Payment) {
        this.Payment = Payment;
    }
    makePayment(payAmount) {
        this.Payment.pay(payAmount);
        return false;
    }
}
exports.default = CustomerPaymentService;
