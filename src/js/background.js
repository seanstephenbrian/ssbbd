import animateExpansion from "./animate-expansion";
import clearExpansion from "./clear-expansion";
import returnExpansionHtml from "./expansion-steps";

function renderBackground() {
    clearExpansion();
    const backgroundExpansion = document.querySelector('.background-expansion');
    backgroundExpansion.innerHTML = returnExpansionHtml('background');

    animateExpansion('background', test, '50');
    
}

function test() {
}

export default renderBackground;