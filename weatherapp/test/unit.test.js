const summing = require('./functions.js');

test('summing 2 and 7', () => {
    expect(summing(1,1)).toBe(2);
});
test('summing 1 and 5', () => {
    expect(summing(1,5)).toBe(6);
})

// console.assert(summing(2, 7) === 9, "Sum is correct");
// console.assert(summing(2, 7) === 6, "Sum is wrong");