import { MultipleItemTypes } from "./types";

class Customer{
    public  name: string;
    public age: number;
    public items: MultipleItemTypes;
    public numberOfBag: number;
    public plasticBagPrice: number = 2.00;

    public constructor(name: string, age: number, items: MultipleItemTypes, numberOfBag: number) {
        this.name = name;
        this.age = age;
        this.items = items;
        this.numberOfBag = numberOfBag
    }
    
    public calculatePrice(tax: number):number
    {
        let totalItemSize: number = this.items.length;
        let itemPrice: number = 0 ;
        for (let item of this.items){
            itemPrice += item.getPrice()
        }

        if(totalItemSize > 2){
            this.plasticBagPrice  = this.numberOfBag * 0.5;
            console.log("More than 2 items purchased. Reducing plastic bag price");
        }

        if(itemPrice <= 100)
        {
            tax = tax * .80;
            console.log("Item price is more than 100. 80 Percent of the actual tax applicable");
        }else if(itemPrice >= 100 && itemPrice <= 150){
            console.log("Item price is more than 100 but less than 150. 90 Percent of the actual tax applicable");
            tax = tax * .90
        }
        let totalPrice: number = itemPrice * tax + this.numberOfBag * this.plasticBagPrice;
        return totalPrice;
    }
}
export default Customer;