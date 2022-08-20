import { MultipleItemTypes } from './types';
import Customer from './Customer';
import Item from "./Item"
import ItemPriceCalculationService from './services/ItemPriceCalculationService';
import CustomerPaymentService from './services/CustomerPaymentService';


class Output {
    public tax: number ;
    public numberOfBag: number;
    private listOfItem: MultipleItemTypes = [];

    public constructor(item:Item[],tax: number, bags: number) {
        this.listOfItem = [...item];
        this.tax = tax;
        this.numberOfBag = bags;
    }

    public totalPurchasedAmount(): number {
        let priceCalculateService: ItemPriceCalculationService = new ItemPriceCalculationService();
        return priceCalculateService.calculateCustomerPurchaseAmount(this.listOfItem, this.numberOfBag, this.tax);
    }

    public makeCustomerPayment(payMethod: string): boolean {
        let totalPurchaseAmount: number = this.totalPurchasedAmount();
        let customerPaymentService: CustomerPaymentService = new CustomerPaymentService();
        return customerPaymentService.makePayment(payMethod, totalPurchaseAmount);
    }
}
export default Output;