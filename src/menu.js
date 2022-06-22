export function component() {

    function menuItemFactory(name, price) {
        const item = document.createElement('div');
        item.classList.add('menu-item');
        const nameDiv = document.createElement('div');
        nameDiv.innerText = name;
        nameDiv.classList.add('item-name');
        const priceDiv = document.createElement('div');
        priceDiv.innerText = price;
        priceDiv.classList.add('item-price');

        item.appendChild(nameDiv);
        item.appendChild(priceDiv);
        return item;
    }

    const element = document.createElement('div');
    element.id = 'content';

    const menu = document.createElement('div');
    menu.classList.add('menu');

    const h1 = document.createElement('h1');
    h1.innerText = 'Menu';

    menu.appendChild(h1);
    menu.appendChild(menuItemFactory('Spaghetti and Meatballs', '$9.99'));
    menu.appendChild(menuItemFactory('Carbonara', '$10.99'));
    menu.appendChild(menuItemFactory('Cacio e Pepe', '$11.99'));
    menu.appendChild(menuItemFactory('Seafood Special', '$14.99'));
    menu.appendChild(menuItemFactory('Creamy Three-Cheese Spaghetti', '$14.99'));
    menu.appendChild(menuItemFactory('Green Spaghetti', '$10.99'));


    element.appendChild(menu);
    return element;
}