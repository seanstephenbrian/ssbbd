import animateExpansion from "./animate-expansion";
import clearExpansion from "./clear-expansion";
import returnExpansionHtml from "./expansion-steps";

function renderBackground() {
    clearExpansion();
    const backgroundExpansion = document.querySelector('.background-expansion');
    backgroundExpansion.innerHTML = returnExpansionHtml('background');

    animateExpansion('background', continueBackgroundAnimation, '100', '=====');
}

function continueBackgroundAnimation() {
    const firstStep = document.querySelector('.expanded-line-2');
    firstStep.textContent = '▪';
    const secondStep = document.querySelector('.expanded-line-3');
    const thirdStep = document.querySelector('.expanded-line-4');
    setTimeout(() => {
        secondStep.textContent = '||';
        setTimeout(() => {
            thirdStep.textContent = 'V';
        }, '200');
    }, '200');
}

export default renderBackground;