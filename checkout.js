// checkout.js - a tiny checkout calculator

/**
 * Calculate the total cost of a cart.
 * @param {Array<{price: number, quantity: number}>} items - cart items
 * @param {number} [discountPercent=0] - optional coupon discount, e.g. 20 for 20% off
 * @returns {number} the cart total after any coupon is applied
 */
function calculateTotal(items, discountPercent = 0) {
  let total = 0;
  for (const item of items) {
    total += item.price * item.quantity;
  }
  return applyCoupon(total, discountPercent);
}

/**
 * Apply a percentage coupon to a total.
 * @param {number} total - the amount before the discount
 * @param {number} discountPercent - the percentage to take off
 * @returns {number} the discounted total, rounded to cents
 */
function applyCoupon(total, discountPercent) {
  const discount = total * (discountPercent / 100);
  return Math.round((total - discount) * 100) / 100;
}

module.exports = { calculateTotal, applyCoupon };
