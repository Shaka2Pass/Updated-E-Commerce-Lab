import surfboards from './surfboards.js';
import renderSurfboard from './renderSurfboard.js';

const list = document.getElementById('surfboards'); 

for (let i = 0; i < surfboards.length; i++) {
    const surfboard = surfboards[i];
    const dom = renderSurfboard(surfboard);
    list.appendChild(dom);
}
