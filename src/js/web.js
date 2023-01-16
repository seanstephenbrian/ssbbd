import webHtml from '../html/web.html';

function renderWeb() {
    const lowerSection = document.querySelector('.lower-section');
    lowerSection.innerHTML = webHtml;
}

export default renderWeb;