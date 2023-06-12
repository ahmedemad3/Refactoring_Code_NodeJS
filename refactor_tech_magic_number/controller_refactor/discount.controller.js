// DiscountController.js

const  APP_CONSTANT = require("../constant/constant")

class DiscountController {
  constructor() {
   
  }

  calculateDiscount(age, amount) {
    let discount = 0;
    

    if (age >= 18 && age <= 25) {
      discount = amount * APP_CONSTANT.TWENTY_PERCENT_DISCOUNT;
    } else if (age >= 26 && age <= 30) {
      discount = amount * APP_CONSTANT.FIFTEEN_PERCENT_DISCOUNT;
    } else {
      discount = amount * APP_CONSTANT.TEN_PERCENT_DISCOUNT;
    }

    const finalAmount = amount - discount;

    return finalAmount;
  }
}

module.exports = DiscountController;
