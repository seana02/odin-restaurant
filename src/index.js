import './style.css';
import { component as homePage } from './home.js';
import { component as menuPage } from './menu.js';
import { component as contactPage } from './contact.js';

function newButton(name) {
    const lbl = document.createElement('label');
    const btn = document.createElement('input');
    btn.classList.add('tab');
    btn.type = 'radio';
    btn.name = 'tabs';
    btn.value = name;
    lbl.innerText = name.charAt(0).toUpperCase() + name.slice(1);
    lbl.appendChild(btn);
    return lbl;
}

function clearSelected() {
    for (let btn of buttons.children) {
        btn.classList.remove('selected');
    }
}

function updatePage() {
    // value of this is the label of the radio button

    let tab = this.children[0].value;
    clearSelected();
    this.classList.add('selected');

    let pageScripts = {
        'home': homePage,
        'menu': menuPage,
        'contact': contactPage
    };

    document.querySelector('body')
            .removeChild(
                document.querySelector('#content')
            );

    body.appendChild(pageScripts[tab]());

}

const body = document.querySelector('body');

const home = newButton('home');
home.children[0].checked = true;
home.classList.add('selected');
home.addEventListener('change', updatePage);
const menu = newButton('menu');
menu.addEventListener('change', updatePage);
const contact = newButton('contact');
contact.addEventListener('change', updatePage);

const buttons = document.createElement('div');
buttons.id = 'tabs';
buttons.appendChild(home);
buttons.appendChild(menu);
buttons.appendChild(contact);

body.appendChild(buttons);
body.appendChild(homePage());
