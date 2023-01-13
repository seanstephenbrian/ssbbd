import insertSpan from "./insert-span";

function animateExpansion(keyword, firstStep, delay, chars) {
    // clear the lower contents:
    const lower = document.querySelector('.lower-section');
    lower.innerHTML = '';

    const stepOne = document.querySelector(`.${keyword}-expansion-step-1`);
    if (stepOne.innerHTML === '<span>=</span>') return;
    insertSpan(chars[0], `.${keyword}-expansion-step-1`);
    setTimeout(() => {
        insertSpan(chars[1], `.${keyword}-expansion-step-2`);
        setTimeout(() => {
            insertSpan(chars[2], `.${keyword}-expansion-step-3`);
            setTimeout(() => {
                insertSpan(chars[3], `.${keyword}-expansion-step-4`);
                setTimeout(() => {
                    insertSpan(chars[4], `.${keyword}-expansion-step-5`);
                    firstStep(delay);
                }, delay);
            }, delay);
        }, delay);
    }, delay);
}

export default animateExpansion;