import PaymentAbstraction from "../abastract/PaymentAbstraction";
import ValidatePaymentType from "../Interface/ValidatePaymentType";
import Logger from "../logger/Loger";

class BkashPay extends PaymentAbstraction implements  ValidatePaymentType{
    
    public pay(payAmount: number): boolean {
        Logger.info("Bkash payment->"+payAmount);
        return true;
    }
    public validatePaymentOption(_pyamentTypeIdentity: number): boolean {
        //call baksh externaml api for validate identitty
        Logger.info("call baksh externaml api for validate identitty")
        return true
    }
}
export default BkashPay;