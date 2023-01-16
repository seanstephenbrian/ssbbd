import webHtml from '../html/web.html';

function renderWeb() {

    // STYLE 'web' LINK TO BE BOLD, OTHER WORK LINKS FADED

    const lowerSection = document.querySelector('.lower-section');
    lowerSection.innerHTML = webHtml;
}

export default renderWeb;