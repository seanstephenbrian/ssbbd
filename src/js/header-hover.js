function showStudio() {
    const s1 = document.querySelector('#s1');
    s1.classList.add('faded');
    const s2 = document.querySelector('#s2');
    s2.classList.add('faded');
    const hiddenB1 = document.querySelector('#hidden-b1');
    hiddenB1.textContent = 'b';
    const hiddenB2 = document.querySelector('#hidden-b2');
    hiddenB2.textContent = 'b';
    const hiddenD = document.querySelector('#hidden-d');
    hiddenD.textContent = 'd';
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
    s1.classList.remove('faded');
    const s2 = document.querySelector('#s2');
    s2.classList.remove('faded');
    const hiddenB1 = document.querySelector('#hidden-b1');
    hiddenB1.textContent = '';
    const hiddenB2 = document.querySelector('#hidden-b2');
    hiddenB2.textContent = '';
    const hiddenD = document.querySelector('#hidden-d');
    hiddenD.textContent = '';
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

export default showStudio;