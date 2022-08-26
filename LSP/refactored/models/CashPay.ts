import PaymentAbstraction from "../abastract/PaymentAbstraction";
import PaymentInterface from "../Interface/PaymentInterface";
import Logger from "../logger/Loger";

class CashPay extends PaymentAbstraction {
    public pay(payAmount: number): boolean {
        Logger.info("Cash Pay -> " + payAmount);
        return true;
    }
    
}
export default CashPay;