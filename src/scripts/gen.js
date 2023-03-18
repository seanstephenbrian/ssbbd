function generateHex() {
    // variable #1 - ms since 1970:
    const time = Date.now();
    
    // variable #2 - random number between 1 and 100:
    const num = Math.floor(Math.random() * 99 + 1);
    const fIndex = Math.floor(Math.random() * 4 + 1);
    const hexNumbers = (time / num).toString().slice(0, 6);
    const hex = '#' + hexNumbers.substring(0, fIndex) + 'f' + hexNumbers.substring(fIndex + 1);

    return hex;
}

const backgroundStyles = () => ({
    backgroundElement: {
        backgroundColor: generateHex()
    },
    axes: [
        {
            backgroundColor: generateHex(),
        }
        // axis1: {
        //     backgroundColor: generateHex()
        // },
        // axis2: {
        //     backgroundColor: generateHex()
        // },
        // axis3: {
        //     backgroundColor: generateHex()
        // },
        // axis4: {
        //     backgroundColor: generateHex()
        // }
    ]
});

export { backgroundStyles }