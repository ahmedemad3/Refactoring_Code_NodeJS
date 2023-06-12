// index.js
const PaymentHandler = require('./service_refactor/PaymentHandler');
const CreditCardPayment = require('./service_refactor/CreditCardPayment');
const PayPalPayment = require('./service_refactor/PayPalPayment');
const BankTransferPayment = require('./service_refactor/BankTransferPayment')


const paymentMethods = {
  creditCard: new CreditCardPayment(),
  paypal: new PayPalPayment(),
  bankTransfer : new BankTransferPayment(),
};

const paymentHandler = new PaymentHandler(paymentMethods);
