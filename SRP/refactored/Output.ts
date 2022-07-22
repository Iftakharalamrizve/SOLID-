import {MultipleItemTypes} from './types';
import Customer from './Customer';
import Item from "./Item"
import ItemPriceCalculationService from './services/ItemPriceCalculationService';


class Output{
    public bookItem: Item;
    public waterBottole: Item;
    public macBookKeyboard: Item;
    public tax: number = 10;
    public numberOfBag = 2;
    
    public constructor()
    {
        this.bookItem = new Item("Javascript Eloquant ORM", 500.50);
        this.waterBottole = new Item("Water Bottle", 400);
        this.macBookKeyboard = new Item("Macbook Keyboard", 1100);
    }
    
    public  totalPurchasedAmount(): number
    {
        let priceCalculateService: ItemPriceCalculationService = new ItemPriceCalculationService();
        let listOfItem: MultipleItemTypes = [this.bookItem, this.waterBottole, this.macBookKeyboard];
        return priceCalculateService.calculateCustomerPurchaseAmount(listOfItem,this.numberOfBag,this.tax)
    }
}

let outPutRun = new Output();
console.log(outPutRun.totalPurchasedAmount());