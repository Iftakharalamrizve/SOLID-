import PaymentInterface from "../Interface/PaymentInterface";

class CustomerPaymentService {
    private Payment : PaymentInterface;

    constructor(Payment: PaymentInterface) 
    {
        this.Payment = Payment;
    }

    public makePayment(payAmount: number) 
    {
        this.Payment.pay(payAmount);
        return false;
    }

}
export default CustomerPaymentService;