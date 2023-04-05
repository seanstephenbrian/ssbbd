import * as Generate from "./gen";

function createAxis(width, height, left, top, transform) {
    return {
        backgroundColor: Generate.hex(),
        width: width,
        height: height,
        left: left,
        top: top,
        transform: transform,
        filter: 
            Generate.grayscale() + 
            ' ' + 
            Generate.dropShadow() + 
            ' ' + 
            Generate.sepia(),
        border: Generate.border()
    }
}

function generateFullBackground() {

    return {
        backgroundElement: {
            background: Generate.backgroundGradient(),
            filter: Generate.backgroundFilter()
        },
    
        axes: [
            createAxis('1.5%', '23%', '35.1%', '55%', 'rotate(7deg)'),  // 0
            createAxis('1%', '25%', '15%', '44.3%', 'rotate(91.7deg)'), // 1
            createAxis('0.5%', '20%', '38%', '4%', 'rotate(48deg)'),    // 2
            createAxis('0.5%', '10%', '5%', '35.7%', 'rotate(94deg)'),  // 3
            createAxis('0.5%', '20%', '45%', '26%', 'rotate(65deg)'),   // 4
            createAxis('1%', '35%', '33%', '30%', 'rotate(56deg)'),     // 5
            createAxis('0.8%', '40%', '35%', '35%', 'rotate(146deg)'),  // 6
            createAxis('1.2%', '40%', '43%', '35%', 'rotate(7deg)'),    // 7
            createAxis('0.5%', '50%', '47%', '36%', 'rotate(71deg)'),   // 8
            createAxis('1%', '40%', '51.5%', '41%', 'rotate(162deg)'),  // 9
            createAxis('0.6%', '55%', '53%', '20%', 'rotate(154deg)'),  // 10
            createAxis('0.8%', '50%', '45%', '24%', 'rotate(77deg)'),   // 11
            createAxis('0.8%', '45%', '45%', '25.5%', 'rotate(148deg)'),  // 12
            createAxis('0.5%', '20%', '6%', '50%', 'rotate(38deg)'),    // 13
            createAxis('0.5%', '50%', '60%', '31%', 'rotate(77deg)'),   // 14
            createAxis('0.6%', '70%', '70%', '31%', 'rotate(40deg)'),   // 15
            createAxis('0.7%', '40%', '70%', '11%', 'rotate(54deg)'),   // 16
            createAxis('0.7%', '60%', '70%', '5%', 'rotate(73deg)'),    // 17
            createAxis('0.9%', '30%', '83%', '20%', 'rotate(160deg)'),  // 18
            createAxis('0.6%', '40%', '86%', '10%', 'rotate(50deg)'),   // 19
            createAxis('0.6%', '20%', '92%', '17%', 'rotate(133deg)'),  // 20
            createAxis('0.6%', '15%', '94%', '28%', 'rotate(44deg)')
        ]
    }
}

function generateMinimalBackground() {
    return {
        background: Generate.backgroundGradient(),
        filter: Generate.backgroundFilter()
    }
}

export { 
    generateFullBackground,
    generateMinimalBackground
}