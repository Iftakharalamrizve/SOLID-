import PaymentInterface from "../Interface/PaymentInterface";
import Logger from "../logger/Loger";

class BkashPay implements PaymentInterface{
    
    public pay(payAmount: number): void {
        Logger.info("Bkash payment->"+payAmount);
    }
}
export default BkashPay;