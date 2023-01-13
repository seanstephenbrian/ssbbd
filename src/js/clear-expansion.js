function clearExpansion() {
    const visuals = document.querySelectorAll('.expansion');
    visuals.forEach(visual => {
        visual.innerHTML = '';
    });
    const links = document.querySelectorAll('.expanded-line');
    links.forEach(link => {
        link.innerHTML = '';
    });
}

export default clearExpansion;