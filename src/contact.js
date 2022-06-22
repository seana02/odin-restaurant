export function component() {
    const element = document.createElement('div');
    element.id = 'content';

    const h1 = document.createElement('h1');
    h1.innerText = 'Contact';
    element.appendChild(h1);

    const p = document.createElement('p');
    p.innerText = 'Restaurant: +1 202-555-0648';

    const owner = document.createElement('p');
    owner.innerText = 'Owner: Sean Aoki\n+1 404-555-0118';

    element.appendChild(p);
    element.appendChild(owner);
    return element;
}