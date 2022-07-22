import {MultipleItemTypes} from './types';
import Customer from './Customer';
import Item from "./Item"


class Output{
    public bookItem: Item;
    public waterBottole: Item;
    public macBookKeyboard: Item;
    
    public constructor()
    {
        this.bookItem = new Item("Javascript Eloquant ORM", 500.50);
        this.waterBottole = new Item("Water Bottle", 400);
        this.macBookKeyboard = new Item("Macbook Keyboard", 1100);
    }
    
    public  totalPurchasedAmount(name: string, age: number, tax: number, plasticBag: number) 
    {
        let listOfItem: MultipleItemTypes = [this.bookItem, this.waterBottole, this.macBookKeyboard];
        let customerObject: Customer = new Customer(name,age,listOfItem,plasticBag);
        let totalPurchasePrice : number = customerObject.calculatePrice(tax);
        console.log(totalPurchasePrice)
    }
}

let outPutRun = new Output();
outPutRun.totalPurchasedAmount("Iftakhar",25,10,3);