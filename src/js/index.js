// style imports:
import '../style/index.scss';

// html imports:
import indexBody from '../html/index.html';

// js imports:
import renderBackground from './background';
import renderContact from './contact';
import renderExtras from './extras';
import renderWork, { renderWebLink } from './work';
import showStudio from './header-hover';
import renderWeb from './web';

document.body.innerHTML = indexBody;

addHeaderEffect();
addMenuListeners();

function addHeaderEffect() {
    const ssbbd = document.querySelector('.ssbbd');
    ssbbd.addEventListener('mouseover', showStudio);
}

function addMenuListeners() {
    const work = document.querySelector('.work-link');
    work.addEventListener('click', renderWork);

    const background = document.querySelector('.background-link');
    background.addEventListener('click', renderBackground);

    const contact = document.querySelector('.contact-link');
    contact.addEventListener('click', renderContact);

    const extras = document.querySelector('.extras-link');
    extras.addEventListener('click', renderExtras);
}

renderWork();
renderWeb();