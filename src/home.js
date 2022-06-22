import spaghettiImage from "./spaghetti.jpg";

export function component() {
    const element = document.createElement('div');
    element.id = "content";

    const image = new Image();
    image.src = spaghettiImage;
    image.width *= 1.5;
    image.height *= 1.5;
    image.alt = 'Spaghetti';
    element.appendChild(image);

    const heading = document.createElement('h1');
    heading.innerText = 'Special Spaghet';
    element.appendChild(heading);

    const para = document.createElement('p');
    para.innerText ='The best spaghetti in town';
    element.appendChild(para);

    return element;
}
