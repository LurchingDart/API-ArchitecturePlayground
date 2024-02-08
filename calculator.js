const operations = {
    squarePerimeter: (squareSide) => {
        return parseInt(squareSide) * 4;
    },
    squareArea: (squareSide) => {
        return parseInt(squareSide) * parseInt(squareSide);
    },
    circlePerimeter: (circleRadius) => {
        return 2 * Math.PI * parseInt(circleRadius);
    },
    circleArea: (circleRadius) => {
        return Math.PI * Math.pow(circleRadius, 2)
    },
    trianglePerimeter: (sideT1, sideT2, sideT3) => {
        return parseInt(sideT1) + parseInt(sideT2) + parseInt(sideT3)
    },
    triangleArea: (baseT, heightT) => {
        return (parseInt(baseT) * parseInt(heightT)) / 2
    }
}

module.exports = operations;