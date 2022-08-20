import PaymentInterface from "../Interface/PaymentInterface";
import Logger from "../logger/Loger";

class CashPay implements PaymentInterface {
    public pay(payAmount: number): void {
        Logger.info("Cash Pay -> " + payAmount);
    }
}
export default CashPay;