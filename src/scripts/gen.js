function generateHex() {
    // ms since 1970:
    const time = Date.now();
    
    // random number between 1 and 100:
    const num = Math.floor(Math.random() * 99 + 1);

    // use these variables to generate a hex string:
    const fIndex = Math.floor(Math.random() * 4 + 1);
    const hexNumbers = (time / num).toString().slice(0, 6);
    const hex = '#' + hexNumbers.substring(0, fIndex) + 'f' + hexNumbers.substring(fIndex + 1);

    return hex;
}

const backgroundStyles = {
    backgroundElement: {
        backgroundColor: '#ffffff'
    },
    axes: [
        {
            // axis 0
            backgroundColor: generateHex(),
            width: '1.5%',
            height: '23%',
            left: '35.1%',
            top: '55%',
            transform: 'rotate(7deg)'
        },
        {
            // axis 1
            backgroundColor: generateHex(),
            width: '1%',
            height: '25%',
            left: '15%',
            top: '44.3%',
            transform: 'rotate(91.7deg)'
        },
        {
            // axis 2
            backgroundColor: generateHex(),
            width: '0.5%',
            height: '20%',
            top: '38%',
            left: '4%',
            transform: 'rotate(48deg)'
        },
        {
            // axis 3
            backgroundColor: generateHex(),
            width: '0.5%',
            height: '10%',
            left: '5%',
            top: '35.7%',
            transform: 'rotate(94deg)'
        },
        {
            // 4
            backgroundColor: generateHex(),
            width: '0.5%',
            height: '20%',
            left: '45%',
            top: '26%',
            transform: 'rotate(65deg)'
        },
        {
            // 5
            backgroundColor: generateHex(),
            width: '1%',
            height: '35%',
            left: '33%',
            top: '30%',
            transform: 'rotate(56deg)'
        },
        {
            // 6
            backgroundColor: generateHex(),
            width: '0.8%',
            height: '40%',
            left: '35%',
            top: '35%',
            transform: 'rotate(146deg)'
        },
        {
            // 7
            backgroundColor: generateHex(),
            width: '1.2%',
            height: '40%',
            left: '43%',
            top: '35%',
            transform: 'rotate(7deg)'
        },
        {
            // 8
            backgroundColor: generateHex(),
            width: '0.5%',
            height: '50%',
            left: '47%',
            top: '36%',
            transform: 'rotate(71deg)'
        },
        {
            // 9
            backgroundColor: generateHex(),
            width: '1%',
            height: '40%',
            left: '51.5%',
            top: '41%',
            transform: 'rotate(162deg)'
        },
        {
            // 10
            backgroundColor: generateHex(),
            width: '0.6%',
            height: '55%',
            left: '53%',
            top: '20%',
            transform: 'rotate(154deg)'
        },
        {
            // 11
            backgroundColor: generateHex(),
            width: '0.8%',
            height: '50%',
            left: '45%',
            top: '24%',
            transform: 'rotate(77deg)'
        },
        {
            // 12
            backgroundColor: generateHex(),
            width: '0.8%',
            height: '45%',
            left: '45%',
            top: '25.5%',
            transform: 'rotate(148deg)'
        },
        {
            // 13
            backgroundColor: '#000000',
            width: '0.5%',
            height: '20%',
            left: '6%',
            top: '50%',
            transform: 'rotate(38deg)'
        },
        {
            // 14
            backgroundColor: generateHex(),
            width: '0.5%',
            height: '50%',
            left: '60%',
            top: '31%',
            transform: 'rotate(77deg)'
        },
        {
            // 15
            backgroundColor: generateHex(),
            width: '0.6%',
            height: '70%',
            left: '70%',
            top: '31%',
            transform: 'rotate(40deg)'
        },
        {
            // 16
            backgroundColor: generateHex(),
            width: '0.7%',
            height: '40%',
            left: '70%',
            top: '11%',
            transform: 'rotate(54deg)'
        },
        {
            // 17
            backgroundColor: generateHex(),
            width: '0.7%',
            height: '60%',
            left: '70%',
            top: '5%',
            transform: 'rotate(73deg)'
        },
        {
            // 18
            backgroundColor: generateHex(),
            width: '0.9%',
            height: '30%',
            left: '83%',
            top: '20%',
            transform: 'rotate(160deg)'
        },
        {
            // 19
            backgroundColor: generateHex(),
            width: '0.6%',
            height: '40%',
            left: '86%',
            top: '10%',
            transform: 'rotate(50deg)'
        },
        {
            // 20
            backgroundColor: generateHex(),
            width: '0.6%',
            height: '40%',
            left: '86%',
            top: '10%',
            transform: 'rotate(50deg)'
        },
        {
            // 21
            backgroundColor: generateHex(),
            width: '0.6%',
            height: '20%',
            left: '92%',
            top: '17%',
            transform: 'rotate(133deg)'
        },
        {
            // 22
            backgroundColor: generateHex(),
            width: '0.6%',
            height: '15%',
            left: '94%',
            top: '28%',
            transform: 'rotate(44deg)'
        }





        // TEMPLATE
        // {
        //     backgroundColor: generateHex(),
        //     width: '1%',
        //     height: '10%',
        //     left: '5%',
        //     top: '25%',
        //     transform: 'rotate(90deg)'
        // }
    ]
};

export { backgroundStyles }