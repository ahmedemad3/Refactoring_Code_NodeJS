// PaymentHandler.js
class PaymentHandler {
    constructor(paymentMethods) {
      this.paymentMethods = paymentMethods;
    }
  
    processPayment(method, amount) {

      // method [creditcard , paypal , bitcoin , banktransfer]
      const paymentProcessor = this.paymentMethods[method];
  
      if (!paymentProcessor) {
        throw new Error('Invalid payment method');
      }
  
      return paymentProcessor.processPayment(amount);
    }
  }
  
  module.exports = PaymentHandler;
  