import { MultipleItemTypes } from "./types";

class Customer{
    public  name: string;
    public age: number;
    public items: MultipleItemTypes;
    public numberOfBag: number;
    public plasticBagPrice: number = 2.00;

    public constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}
export default Customer;