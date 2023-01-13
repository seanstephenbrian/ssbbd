import animateExpansion from "./animate-expansion";
import clearExpansion from "./clear-expansion";
import returnExpansionHtml from "./expansion-steps";

function renderContact() {
    clearExpansion();
    const contactExpansion = document.querySelector('.contact-expansion');
    contactExpansion.innerHTML = returnExpansionHtml('contact');
    animateExpansion('contact', test, '50');
}

function test() {
}

export default renderContact;