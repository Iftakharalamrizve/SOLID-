import Output from './index';
import Item from './Item';
import ItemPriceCalculationService from './services/ItemPriceCalculationService';
describe('Sell Store Module', () => {
    let outputObj = new Output(
        [
            new Item('Macbook Pro', 1900),
            new Item('Macbook Keybord', 120),
            new Item('Macbook Mouse', 90)
        ],10,2);

    it('calculate price the all purchase item ', () => {
        let itemPurchasePrice: number = outputObj.totalPurchasedAmount();
        expect(itemPurchasePrice).toEqual(2124);
    })

    it('checking payment process via cash', () => {
        let paymentStatus: boolean = outputObj.makeCustomerPayment('cash');
        expect(paymentStatus).toBeTruthy;
    })

    it('checking payment process via card', () => {
        let paymentStatus: boolean = outputObj.makeCustomerPayment('card');
        expect(paymentStatus).toBeTruthy;
    })
})
