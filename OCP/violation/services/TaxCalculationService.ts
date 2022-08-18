import Logger from "../logger/Loger";

export default class TaxCalculationService{

    public calculateTax(totalitemAmount: number, tax: number): number
    {
        if(totalitemAmount <= 100)
        {
            tax = tax * .80;
            Logger.info("Item price is more than 100. 80 Percent of the actual tax applicable");
        }else if(totalitemAmount >= 100 && totalitemAmount <= 150){
            Logger.info("Item price is more than 100 but less than 150. 90 Percent of the actual tax applicable");
            tax = tax * .90
        }
        return tax;
    }
}