function backgroundFilter() {
    return `brightness(${randomNum(90, 80)}%) opacity(${randomNum(90, 60)}%)`;
}

function backgroundGradient() {
    return `linear-gradient(${randomNum(360)}deg, ${hex() + 'ff'}, ${hex() + 'ff'})`;
}

function border() {
    return `${randomNum(3)}px solid ${hex()}`;
}

function dropShadow() {
    return `drop-shadow(${randomNum(5)}px ${randomNum(5)}px ${randomNum(25)}px ${hex()})`;
}

function grayscale() {
    return `grayscale(${randomNum(50)}%)`;
}

function hex() {
    // ms since 1970:
    const time = Date.now();
    
    // get first 6 numbers from time string:
    const hexNumbers = (time / randomNum(100)).toString().slice(0, 6);

    const index = randomNum(5)
    // create hex string, randomly replacing one of the numbers with 'f':
    const hexString = '#' + hexNumbers.substring(0, index) + 'f' + hexNumbers.substring(index + 1);

    return hexString;
}

function randomNum(max, min = 1) {
    return Math.floor(Math.random() * (max - min) + min);
}

function sepia() {
    return `sepia(${randomNum(15)}%)`;
}

export {
    backgroundFilter,
    backgroundGradient,
    border,
    dropShadow,
    grayscale,
    hex,
    randomNum,
    sepia
}
