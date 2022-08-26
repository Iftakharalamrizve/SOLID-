import PaymentInterface from "../Interface/PaymentInterface";

abstract class PaymentAbstraction implements PaymentInterface {
    abstract pay(payAmount: number): boolean;
}

export default PaymentAbstraction;