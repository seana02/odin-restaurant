export function component() {
    const element = document.createElement('div');
    element.id = 'content';

    const p = document.createElement('p');
    p.innerText = 'contact';
    element.appendChild(p);

    return element;
}