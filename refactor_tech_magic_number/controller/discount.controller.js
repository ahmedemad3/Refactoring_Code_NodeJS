// DiscountController.js
class DiscountController {
  constructor() {
    
  }

  calculateDiscount(age, amount) {
    let discount = 0;
    if (age >= 18 && age <= 25) {
      discount = amount * 0.2; // Magic number 0.2 represents 20% discount
    } else if (age >= 26 && age <= 30) {
      discount = amount * 0.15; // Magic number 0.15 represents 15% discount
    } else {
      discount = amount * 0.1; // Magic number 0.1 represents 10% discount
    }

    const finalAmount = amount - discount;

    return finalAmount;
  }
}

module.exports = DiscountController;
