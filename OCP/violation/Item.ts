class Item {
    public name: string;
    public price: number;
    
    public constructor(name: string , price: number) 
    {
        this.name = name;
        this.price = price;
    }

    public setName(name: string)
    {
        this.name= name;
    }

    public getName(): string
    {
        return this.name
    }

    public setPrice(price: number)
    {
        this.price = price;
    }

    public getPrice(): number

    {
        return this.price;
    }


}

export default Item;