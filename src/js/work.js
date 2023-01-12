const delay = '50';

function renderWork() {
    const stepOne = document.querySelector('.work-expansion-step-1');
    if (stepOne.innerHTML === '<span>=</span>') return;
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
    localStorage.setItem('menuExpansion', 'work');
}

function insertSpan(textContent, parentSelector) {
    const parent = document.querySelector(parentSelector);
    const span = document.createElement('span');
    span.textContent = textContent;
    parent.appendChild(span);
}

function renderWebLink() {
    const webLink = document.querySelector('.expanded-line-1');
    webLink.innerHTML = `<span class="link web-link">web</span>`;
    setTimeout(() => {
        renderCookingLink();
    }, delay);
}

function renderCookingLink() {
    const cookingLink = document.querySelector('.expanded-line-2');
    cookingLink.innerHTML = `<span class="link cooking-link">cooking</span>`;
    setTimeout(() => {
        renderVisualLink();
    }, delay);
}

function renderVisualLink() {
    const visualLink = document.querySelector('.expanded-line-3');
    visualLink.innerHTML = `<span class="link visual-link">visual</span>`;
    setTimeout(() => {
        renderWritingLink();
    }, delay);
}

function renderWritingLink() {
    const writingLink = document.querySelector('.expanded-line-4');
    writingLink.innerHTML = `<span class="link writing-link">writing</span>`;
}

export default renderWork;