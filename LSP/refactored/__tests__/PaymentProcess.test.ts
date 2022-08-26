import Output from '../index';
import Item from '../Item';
import BkashPay from '../models/BkashPay';
import CardPay from '../models/CardPay';
import CashPay from '../models/CashPay';

describe('Sell Store Module', () => {
    let outputObj = new Output(
        [
            new Item('Macbook Pro', 1900),
            new Item('Macbook Keybord', 120),
            new Item('Macbook Mouse', 90)
        ], 10, 2);

    it('calculate price the all purchase item ', () => {
        let itemPurchasePrice: number = outputObj.totalPurchasedAmount();
        expect(itemPurchasePrice).toEqual(2124);
    })

    it('checking payment process via cash', () => {
        let paymentStatus: boolean = outputObj.makeCustomerPayment(new CashPay);
        expect(paymentStatus).toBeTruthy;
    })

    it('checking payment process via card', () => {
        let paymentMethodVarified = outputObj.customerPaymentTypeValidate(new CardPay,41414141414141414141);
        expect(paymentMethodVarified).toBeTruthy;
        let paymentStatus: boolean = outputObj.makeCustomerPayment(new CardPay);
        expect(paymentStatus).toBeTruthy;
    });

    it('checking payment process via bkash', () => {
        let paymentMethodVarified = outputObj.customerPaymentTypeValidate(new BkashPay,1686790963);
        expect(paymentMethodVarified).toBeTruthy;
        let paymentStatus: boolean = outputObj.makeCustomerPayment(new BkashPay);
        expect(paymentStatus).toBeTruthy;
    })
})
 