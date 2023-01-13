import insertSpan from "./insert-span";

function animateExpansion(keyword, firstStep, delay) {
    // clear the lower contents:
    const lower = document.querySelector('.lower-section');
    lower.innerHTML = '';

    const stepOne = document.querySelector(`.${keyword}-expansion-step-1`);
    if (stepOne.innerHTML === '<span>=</span>') return;
    insertSpan('=', `.${keyword}-expansion-step-1`);
    setTimeout(() => {
        insertSpan('=', `.${keyword}-expansion-step-2`);
        setTimeout(() => {
            insertSpan('=', `.${keyword}-expansion-step-3`);
            setTimeout(() => {
                insertSpan('>', `.${keyword}-expansion-step-4`);
                setTimeout(() => {
                    insertSpan('{', `.${keyword}-expansion-step-5`);
                    firstStep(delay);
                }, delay);
            }, delay);
        }, delay);
    }, delay);
}

export default animateExpansion;