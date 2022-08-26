"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CustomerPaymentService {
    constructor(Payment) {
        this.Payment = Payment;
    }
    cutomerPaymentMethodVarification(varificationIdentity) {
        return true;
    }
    makePayment(payAmount) {
        return this.Payment.pay(payAmount);
    }
}
exports.default = CustomerPaymentService;
