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
    s3.classList.add('faded');
    const b1 = document.querySelector('#b1');
    b1.textContent = 't';
    b1.classList.add('faded');
    const b2 = document.querySelector('#b2');
    b2.textContent = 'u';
    b2.classList.add('faded');
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
    s3.classList.remove('faded');
    const b1 = document.querySelector('#b1');
    b1.textContent = 'b';
    b1.classList.remove('faded');
    const b2 = document.querySelector('#b2');
    b2.textContent = 'b';
    b2.classList.remove('faded');
    const i = document.querySelector('#i');
    i.textContent = '';
    const o = document.querySelector('#o');
    o.textContent = '';
}

export default showStudio;