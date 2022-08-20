import Logger from "../logger/Loger";

class Payment {
    public payWithCash(payAmount: number) 
    {
        Logger.info("Cash Pay -> " + payAmount);
    }
    public payWithCredit(payAmount: number) 
    {
        Logger.info("Credit Card Pay -> " + payAmount);
    }
}
export default Payment;