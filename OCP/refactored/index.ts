import { MultipleItemTypes } from './types/types';
import Item from "./Item"
import ItemPriceCalculationService from './services/ItemPriceCalculationService';
import CustomerPaymentService from './services/CustomerPaymentService';
import CashPay from './models/CashPay';
import PaymentInterface from './Interface/PaymentInterface';


class Output {
    public tax: number ;
    public numberOfBag: number;
    private listOfItem: MultipleItemTypes = [];

    public constructor(item:Item[],tax: number, bags: number) 
    {
        this.listOfItem = [...item];
        this.tax = tax;
        this.numberOfBag = bags;
    }

    public totalPurchasedAmount(): number 
    {
        let priceCalculateService: ItemPriceCalculationService = new ItemPriceCalculationService();
        return priceCalculateService.calculateCustomerPurchaseAmount(this.listOfItem, this.numberOfBag, this.tax);
    }

    public makeCustomerPayment(payMethod:PaymentInterface): boolean 
    {
        let totalPurchaseAmount: number = this.totalPurchasedAmount();
        let customrePayType = payMethod;
        let customerPaymentService: CustomerPaymentService = new CustomerPaymentService(customrePayType);
        return customerPaymentService.makePayment(totalPurchaseAmount);
    }
}
export default Output;