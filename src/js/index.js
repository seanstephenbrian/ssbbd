import '../style/index.scss';
import indexBody from '../html/index.html';

import showStudio from './header-hover';

document.body.innerHTML = indexBody;

addHeaderEffect();

function addHeaderEffect() {
    const ssbbd = document.querySelector('.ssbbd');
    ssbbd.addEventListener('mouseover', showStudio);
}