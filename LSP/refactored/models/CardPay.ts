import PaymentAbstraction from "../abastract/PaymentAbstraction";
import ValidatePaymentType from "../Interface/ValidatePaymentType";
import Logger from "../logger/Loger";

class CardPay extends PaymentAbstraction implements  ValidatePaymentType {

    public pay(payAmount: number): boolean {
        Logger.info("Card Pay -> " + payAmount);
        return true;
    }
    
    public validatePaymentOption(_pyamentTypeIdentity: number): boolean {
        Logger.info("call Card validation  externaml api for validate identitty")
        return true
    }
}
export default CardPay;