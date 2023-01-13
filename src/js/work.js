import renderWeb from "./web";
import renderCooking from './cooking';
import renderPhoto from "./photo";
import renderOther from "./other";
import insertSpan from "./insert-span";
import clearExpansion from "./clear-expansion";
import returnExpansionHtml from "./expansion-steps";
import animateExpansion from "./animate-expansion";

function renderWork() {
    clearExpansion();
    const workExpansion = document.querySelector('.work-expansion');
    workExpansion.innerHTML = returnExpansionHtml('work');
    animateExpansion('work', renderWebLink, '50');
}

function renderWebLink(delay) {
    const expansion1 = document.querySelector('.expanded-line-1');
    const webLink = document.createElement('span');
    webLink.classList.add('link', 'web-link');
    webLink.textContent = 'web';
    expansion1.appendChild(webLink);
    webLink.addEventListener('click', renderWeb);
    setTimeout(() => {
        renderCookingLink(delay);
    }, delay);
}

function renderCookingLink(delay) {
    const expansion2 = document.querySelector('.expanded-line-2');
    const cookingLink = document.createElement('span');
    cookingLink.classList.add('link', 'cooking-link');
    cookingLink.textContent = 'cooking';
    expansion2.appendChild(cookingLink);
    cookingLink.addEventListener('click', renderCooking);
    setTimeout(() => {
        renderPhotoLink(delay);
    }, delay);
}

function renderPhotoLink(delay) {
    const expansion3 = document.querySelector('.expanded-line-3');
    const photoLink = document.createElement('span');
    photoLink.classList.add('link', 'photo-link');
    photoLink.textContent = 'photo';
    expansion3.appendChild(photoLink);
    photoLink.addEventListener('click', renderPhoto);
    setTimeout(() => {
        renderOtherLink(delay);
    }, delay);
}

function renderOtherLink() {
    const expansion4 = document.querySelector('.expanded-line-4');
    const otherLink = document.createElement('span');
    otherLink.classList.add('link', 'other-link');
    otherLink.textContent = 'other';
    expansion4.appendChild(otherLink);
    otherLink.addEventListener('click', renderOther);
}



export default renderWork;
export { renderWebLink };