const Bank = require('./interfaces/Bank');

class BBVA extends Bank {
  processPayment() {
    console.log(`Pago por $ ${this.amount} de la cuenta: [${this.account}] ha sido procesado | BBVA`);
  }
  processRefund() {
    console.log(`Devolución de: $ ${this.amount} ha sido procesado | BBVA`);
  }
}

module.exports = BBVA;
