const { test } = require('node:test');
const assert = require('node:assert');
const { calculateTotal } = require('./checkout');

test('returns 0 for an empty cart', () => {
  assert.strictEqual(calculateTotal([]), 0);
});

test('multiplies price by quantity', () => {
  assert.strictEqual(calculateTotal([{ price: 10, quantity: 3 }]), 30);
});

test('sums multiple items', () => {
  const items = [
    { price: 5, quantity: 2 },
    { price: 20, quantity: 1 },
  ];
  assert.strictEqual(calculateTotal(items), 30);
});
