import PaymentInterface from "../Interface/PaymentInterface";
import Logger from "../logger/Loger";

class CardPay implements PaymentInterface {

    public pay(payAmount: number): void {
        Logger.info("Card Pay -> " + payAmount);
    }
}
export default CardPay;