import clearExpansion from "./clear-expansion";
import animateExpansion from "./animate-expansion";
import returnExpansionHtml from "./expansion-steps";

function renderExtras() {
    clearExpansion();
    const extrasExpansion = document.querySelector('.extras-expansion');
    extrasExpansion.innerHTML = returnExpansionHtml('extras');
    animateExpansion('extras', test, '50', '↓!↓!↓');
}

function test() {
}

export default renderExtras;