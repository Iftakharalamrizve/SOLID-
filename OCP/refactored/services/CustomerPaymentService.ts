import Logger from "../logger/Loger";
import Payment from "../models/PaymentModel";

class CustomerPaymentService {

    public makePayment(payMethod: string, payAmount: number) 
    {
        const payment = new Payment();
        if (payMethod === 'cash') {
            payment.payWithCash(payAmount);
            Logger.info("Cash pay successfully  Completed");
            return true;
        } else if (payMethod === 'card') {
            payment.payWithCredit(payAmount);
            Logger.info("Card pay successfully  Completed");
            return true;
        }
        return false;
    }

}
export default CustomerPaymentService;