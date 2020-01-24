import surfboards from '../surfboards.js';
import { findById, calcOrderTotal, toUSD } from '../utils.js';
import renderLineItem from './render-line-items.js';

const tbody = document.querySelector('tbody');

const orderTotalCell = document.getElementById('order-total-cell');

const placeOrderButton = document.getElementById('place-surfboard-order');

const json = localStorage.getItem('CART');
let cart;
if (json) {
    cart = JSON.parse(json);
}
else {
    cart = [];
}

for (let i = 0; i < cart.length; i++) {
    const lineItem = cart[i];
    const surfboard = findById(surfboards, lineItem.id);
    const dom = renderLineItem(lineItem, surfboard);

    tbody.appendChild(dom);
}

const orderTotal = calcOrderTotal(cart, surfboards);
orderTotalCell.textContent = toUSD(orderTotal);

if (cart.length === 0) {
    placeOrderButton.disabled = true;
}
else {
    placeOrderButton.addEventListener('click', () => {
        localStorage.removeItem('CART');
        alert('Surfboard order placed:\n' + JSON.stringify(cart, true, 2));
        window.location = '../';
    });
}
