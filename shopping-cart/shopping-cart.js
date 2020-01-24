import cart from '../cart.js';
import surfboards from '../surfboards.js';
import { findById, calcOrderTotal, toUSD } from '../utils.js';
import renderLineItem from './render-line-items.js';

const tbody = document.querySelector('tbody');

const orderTotalCell = document.getElementById('order-total-cell');

for (let i = 0; i < cart.length; i++) {
    const lineItem = cart[i];
    const surfboard = findById(surfboards, lineItem.id);
    const dom = renderLineItem(lineItem, surfboard);

    tbody.appendChild(dom);
}

const orderTotal = calcOrderTotal(cart, surfboards);
orderTotalCell.textContent = toUSD(orderTotal);