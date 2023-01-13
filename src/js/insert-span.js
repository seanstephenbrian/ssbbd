function insertSpan(textContent, parentSelector) {
    const parent = document.querySelector(parentSelector);
    const span = document.createElement('span');
    span.textContent = textContent;
    parent.appendChild(span);
}

export default insertSpan;