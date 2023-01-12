import '../style/index.scss';
import indexBody from '../html/index.html';

document.body.innerHTML = indexBody;

addHeaderEffect();

function addHeaderEffect() {
    const ssbbd = document.querySelector('.ssbbd');
    ssbbd.addEventListener('mouseover', showStudio);
}

function showStudio() {
    const s1 = document.querySelector('#s1');
    s1.textContent = '';
    const s2 = document.querySelector('#s2');
    s2.textContent = '';
    const s3 = document.querySelector('#s3');
    s3.textContent = 's';
    const b1 = document.querySelector('#b1');
    b1.textContent = 't';
    const b2 = document.querySelector('#b2');
    b2.textContent = 'u';
    const i = document.querySelector('#i');
    i.textContent = 'i';
    const o = document.querySelector('#o');
    o.textContent = 'o';

    const ssbbd = document.querySelector('.ssbbd');
    ssbbd.addEventListener('mouseout', removeStudio, {once: true});
}

function removeStudio() {
    const s1 = document.querySelector('#s1');
    s1.textContent = 's';
    const s2 = document.querySelector('#s2');
    s2.textContent = 's';
    const s3 = document.querySelector('#s3');
    s3.textContent = '';
    const b1 = document.querySelector('#b1');
    b1.textContent = 'b';
    const b2 = document.querySelector('#b2');
    b2.textContent = 'b';
    const i = document.querySelector('#i');
    i.textContent = '';
    const o = document.querySelector('#o');
    o.textContent = '';
}