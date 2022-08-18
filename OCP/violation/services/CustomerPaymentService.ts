class Payment{
    public payWithCash(){
    // handle cash pay logic here
    }
    public payWithCredit(){
    // handle credit pay logic here
    }
}

class CustomerPaymentService{

    public  makePayment(payMethod: string) {
        const payment = new Payment();
        
        if(payMethod === 'cash'){
            payment.payWithCash();
        } else if(payMethod === 'credit'){
            payment.payWithCredit();
        }
    }

}