import surfboards from '../surfboards.js';
import cart from '../cart.js';
import { findById, calcLineTotal, calcOrderTotal } from '../utils.js';
const test = QUnit.test;


QUnit.module('Utilities');

test('find product by id', assert => {

    const id = 'longboard';
   
    const expected = {
        id: 'longboard',
        name: 'Log Longboard',
        image: 'Longboard.jpg',
        description: 'Heavy, long, cumbersome - everyones first board, until your bored.',
        color: 'Blue',
        fin: 'Single-Fin',
        category: 'Beginner',
        price: 1000.00,
        buy: 'Add to Cart'
    };

    const resultSurfboard = findById(surfboards, id);

    assert.deepEqual(resultSurfboard, expected);

});

test('find product by id returns null if not found', assert => {
    const id = 'not found';
    const expected = null;
    const foundSurfboard = findById(surfboards, id);

    assert.equal(foundSurfboard, expected);
});

test('find the total of some quantity and some amount', 
    assert => {
        const quantity = 2;
        const price = 700.00;
        const expected = 1400.00;

        const total = calcLineTotal(quantity, price);

        assert.equal(total, expected);

    });

test('calculate surfboard order total', (assert) => {

    const expected = 5900.00;

    const orderTotal = calcOrderTotal(cart, surfboards);

    assert.equal(orderTotal, expected);

    return console.log('YOU OWE US MORE MONEY!');
});


