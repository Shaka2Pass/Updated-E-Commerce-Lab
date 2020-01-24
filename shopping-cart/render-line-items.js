import { toUSD } from '../utils.js';

function renderLineItem(lineItem, surfboards) {
    const tr = document.createElement('tr');

    const nameCell = document.createElement('td');
    nameCell.className = 'align-left';
    nameCell.textContent = surfboards.name;
    tr.appendChild(nameCell);

    const quantityCell = document.createElement('td');
    quantityCell.textContent = lineItem.quantity;
    tr.appendChild(quantityCell);

    const priceCell = document.createElement('td');
    priceCell.textContent = toUSD(surfboards.price);
    tr.appendChild(priceCell);

    const totalCell = document.createElement('td');
    totalCell.className = 'line-item-total';
    const total = lineItem.quantity * surfboards.price;
    totalCell.textContent = toUSD(total);
    tr.appendChild(totalCell);

    return tr;

}

export default renderLineItem;















//Copy html from the page
// You will need to remove extraneous whitespace. Don't worry, you can adjust the test as need
// Copy the cart line item data for the one that corresponds to the example, and either copy the product or use your findById function to locate the product and use as your input to your function
// Using the DOM API, create your static example programmatically using JavaScript. Start by creating the top level element (<tr> for the line item