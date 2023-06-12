// PaymentHandler.js
class PaymentHandler {
  
    processPayment(paymentMethod, amount) {
      let paymentResult;
  
      switch (paymentMethod) {
        case 'creditCard':
          paymentResult = this.processCreditCardPayment(amount);
          break;
        case 'paypal':
          paymentResult = this.processPayPalPayment(amount);
          break;
        case 'bankTransfer':
          paymentResult = this.processBankTransferPayment(amount);
          break;
        case 'bitcoin':
          paymentResult = this.processBitcoinPayment(amount);
          break;
        default:
          throw new Error('Invalid payment method');
      }
  
      return paymentResult;
    }
  
    processCreditCardPayment(amount) {
      // Logic to process credit card payment
      return 'Credit card payment processed successfully';
    }
  
    processPayPalPayment(amount) {
      // Logic to process PayPal payment
      return 'PayPal payment processed successfully';
    }
  
    processBankTransferPayment(amount) {
      // Logic to process bank transfer payment
      return 'Bank transfer payment processed successfully';
    }

    processBitcoinPayment(amount){
      // Logic to process Bitcoin payment
      return 'Bitcoin payment processed successfully';
    }
  }
  
  module.exports = PaymentHandler;
  