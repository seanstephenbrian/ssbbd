const delay = '50';

function renderWork() {
    insertSpan('=', '.work-expansion-step-1');
    setTimeout(() => {

        insertSpan('=', '.work-expansion-step-2');
        setTimeout(() => {

            insertSpan('=', '.work-expansion-step-3');
            setTimeout(() => {

                insertSpan('>', '.work-expansion-step-4');
                setTimeout(() => {

                    insertSpan('{', '.work-expansion-step-5');
                    renderWebLink();

                }, delay);
                
            }, delay);
        }, delay);
    }, delay);
}

function insertSpan(textContent, parentSelector) {
    const parent = document.querySelector(parentSelector);
    const span = document.createElement('span');
    span.textContent = textContent;
    parent.appendChild(span);
}

function renderWebLink() {
    const webLink = document.querySelector('.expanded-line-1');
    webLink.textContent = 'web';
    setTimeout(() => {
        renderCookingLink();
    }, delay);
}

function renderCookingLink() {
    const cookingLink = document.querySelector('.expanded-line-2');
    cookingLink.textContent = 'cooking';
    setTimeout(() => {
        renderVisualLink();
    }, delay);
}

function renderVisualLink() {
    const visualLink = document.querySelector('.expanded-line-3');
    visualLink.textContent = 'visual';
    setTimeout(() => {
        renderWritingLink();
    }, delay);
}

function renderWritingLink() {
    const writingLink = document.querySelector('.expanded-line-4');
    writingLink.textContent = 'writing';
}

export default renderWork;