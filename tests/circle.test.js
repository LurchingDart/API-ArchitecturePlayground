//Test de las rutas del circulo

const { circleArea, circlePerimeter } = require('../calculator');

describe('Circle', () => {
    test('Area', () => {
        expect(circleArea(1)).toBe(Math.PI);
    });
    test('Perimeter', () => {
        expect(circlePerimeter(1)).toBe(2 * Math.PI);
    });
}, 30000);