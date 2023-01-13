function returnExpansionHtml(keyword) {
    return `
        <div class="${keyword}-expansion-step-1 expansion-step"></div>
        <div class="${keyword}-expansion-step-2 expansion-step"></div>
        <div class="${keyword}-expansion-step-3 expansion-step"></div>
        <div class="${keyword}-expansion-step-4 expansion-step"></div>
        <div class="${keyword}-expansion-step-5 expansion-step"></div>
    `;
}

export default returnExpansionHtml;