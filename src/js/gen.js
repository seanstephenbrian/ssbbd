function dropShadow(randomNum1, randomNum2, randomNum3, hex) {
    return `drop-shadow(${randomNum1}px ${randomNum2}px ${randomNum3}px ${hex})`;
}

function grayscale(randomNum) {
    return `grayscale(${randomNum}%)`;
}

function hex(randomNum1, randomNum2) {
    // ms since 1970:
    const time = Date.now();
    
    // get first 6 numbers from time string:
    const hexNumbers = (time / randomNum1).toString().slice(0, 6);

    // create hex string, randomly replacing one of the numbers with 'f':
    const hexString = '#' + hexNumbers.substring(0, randomNum2) + 'f' + hexNumbers.substring(randomNum2 + 1);

    return hexString;
}

function randomNum(max) {
    return Math.floor(Math.random() * (max - 1) + 1);
}

function sepia(randomNum) {
    return `sepia(${randomNum}%)`;
}

export {
    dropShadow,
    grayscale,
    hex,
    randomNum,
    sepia
}
