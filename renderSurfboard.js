function renderSurfboard(surfboard) {

    const li = document.createElement('li');
    li.classList.add('surfDesign');
    li.className = surfboard.category;
    li.title = surfboard.decription;

    const h2 = document.createElement('h2');
    h2.textContent = surfboard.name;
    li.appendChild(h2);

    const img = document.createElement('img');
    img.src = '../assets/' + surfboard.image;
    img.alt = surfboard.name + 'image';
    li.appendChild(img);

    const p1 = document.createElement('p');
    p1.textContent = surfboard.description;
    li.appendChild(p1);

    const p2 = document.createElement('p');
    p2.textContent = surfboard.color;
    li.appendChild(p2);

    const p3 = document.createElement('p');
    p3.textContent = surfboard.fin;
    li.appendChild(p3);

    const p4 = document.createElement('p');
    p4.textContent = surfboard.category;
    li.appendChild(p4);

    const p5 = document.createElement('p');
    const usd = '$' + surfboard.price.toFixed(2);
    p5.textContent = usd;
    
    const button = document.createElement('button');
    button.textContent = 'Add to Cart';
    button.value = surfboard.code;
    p5.appendChild(button);

    li.appendChild(p5);

    return li;

}

export default renderSurfboard;
