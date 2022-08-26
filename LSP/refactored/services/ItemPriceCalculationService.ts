import { MultipleItemTypes } from "../types/types";
import Logger from "../logger/Loger";
import TaxCalculationService from "./TaxCalculationService";

export default class ItemPriceCalculationService{
    private plasticBagPrice: number = 2.0;
    private TaxCalculationService:TaxCalculationService = new TaxCalculationService()

    private totalItemPrice(listOfItem: MultipleItemTypes):number
    {
        let itemPrice: number = 0 ;
        for (let item of listOfItem){
            itemPrice += item.getPrice()
        }
        return itemPrice;
    }

    private calculatePlasticBagPrice(totalBagNumber: number): void
    {
        if(totalBagNumber > 2){
            this.plasticBagPrice = this.plasticBagPrice * 0.5;
        }
        
    }

    public calculateCustomerPurchaseAmount(listOfItem : MultipleItemTypes, numberOfBag: number, tax: number): number
    {
        let totalitemAmount: number = this.totalItemPrice(listOfItem);
        this.calculatePlasticBagPrice(numberOfBag);
        let totalTaxAmount: number = this.TaxCalculationService.calculateTax(totalitemAmount,tax);
        let totalPrice: number = totalitemAmount + totalTaxAmount + numberOfBag * this.plasticBagPrice;
        Logger.info("Total Price of the items -> " + totalPrice);
        return totalPrice;
    }
}