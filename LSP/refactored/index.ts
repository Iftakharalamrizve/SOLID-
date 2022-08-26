import { MultipleItemTypes } from './types/types';
import Item from "./Item"
import ItemPriceCalculationService from './services/ItemPriceCalculationService';
import PaymentAbstraction from './abastract/PaymentAbstraction';
import ValidatePaymentType from './Interface/ValidatePaymentType';


class Output {
    public tax: number;
    public numberOfBag: number;
    private listOfItem: MultipleItemTypes = [];

    public constructor(item: Item[], tax: number, bags: number) {
        this.listOfItem = [...item];
        this.tax = tax;
        this.numberOfBag = bags;
    }

    public totalPurchasedAmount(): number {
        let priceCalculateService: ItemPriceCalculationService = new ItemPriceCalculationService();
        return priceCalculateService.calculateCustomerPurchaseAmount(this.listOfItem, this.numberOfBag, this.tax);
    }

    public customerPaymentTypeValidate(payMethod:ValidatePaymentType, paymentIdentityNumber: number): boolean {
        let customrePayMethodType = payMethod;
        return customrePayMethodType.validatePaymentOption(paymentIdentityNumber);
    }

    public makeCustomerPayment(payMethod: PaymentAbstraction): boolean {
        let totalPurchaseAmount: number = this.totalPurchasedAmount();
        let customrePayMethodType = payMethod;
        return customrePayMethodType.pay(totalPurchaseAmount);
    }
}
export default Output;