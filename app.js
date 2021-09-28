const Payment = require('./strategies/interfaces/Payment');
const Citibank = require('./strategies/Citibank');
const BBVA = require('./strategies/BBVA');

const payment = new Payment();

// Citibank
payment.pay(new Citibank(200, '0011-188129391-10'));
payment.refund(new Citibank(200, '0011-188129391-11'));

// BBVA
payment.pay(new BBVA(1350, '0011-188129391-12'));
payment.refund(new BBVA(1350, '0011-188129391-12'));