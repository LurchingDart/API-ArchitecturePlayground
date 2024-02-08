const operations = {
    squarePerimeter: (squareSide) => {
        return parseInt(squareSide) * 4;
    },
    squareArea: (squareSide) => {
        return parseInt(squareSide) * parseInt(squareSide);
    },
    circlePerimeter: (circleRadius) => {
        let result = 2 * Math.PI * parseInt(circleRadius);
        return result.toFixed(2);
    },
    circleArea: (circleRadius) => {
        let result = Math.PI * Math.pow(circleRadius, 2)
        return result.toFixed(2);
    },
    trianglePerimeter: (sideT1, sideT2, sideT3) => {
        return parseInt(sideT1) + parseInt(sideT2) + parseInt(sideT3)
    },
    triangleArea: (baseT, heightT) => {
        return (parseInt(baseT) * parseInt(heightT)) / 2
    }
}

module.exports = operations;