const Bank = require('./interfaces/Bank');

class Citibank extends Bank {
  processPayment() {
    console.log(`Pago por: $ ${this.amount} de la cuenta: [${this.account}] ha sido procesado | Citibank`);
  }
  processRefund() {
    console.log(`Devolución de: $ ${this.amount} ha sido procesado | Citibank`);
  }
}

module.exports = Citibank;
