// checkout.js - a tiny checkout calculator

/**
 * Calculate the total cost of a cart.
 * @param {Array<{price: number, quantity: number}>} items - cart items
 * @returns {number} the sum of price * quantity for every item
 */
function calculateTotal(items) {
  let total = 0;
  for (const item of items) {
    total += item.price * item.quantity;
  }
  return total;
}

module.exports = { calculateTotal };
