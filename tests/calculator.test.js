//Test del modulo para calcular el perimetro y area de tres figuras geometricas

const { circleArea, circlePerimeter, squareArea, squarePerimeter, triangleArea, trianglePerimeter } = require('../calculator');

describe('Calculator', () => {
    describe('Circle', () => {
        test('Area', () => {
            expect(circleArea(1)).toBe(Math.PI);
        });
        test('Perimeter', () => {
            expect(circlePerimeter(1)).toBe(2 * Math.PI);
        });
    });
    describe('Square', () => {
        test('Area', () => {
            expect(squareArea(1)).toBe(1);
        });
        test('Perimeter', () => {
            expect(squarePerimeter(1)).toBe(4);
        });
    });
    describe('Triangle', () => {
        test('Area', () => {
            expect(triangleArea(1, 1)).toBe(0.5);
        });
        test('Perimeter', () => {
            expect(trianglePerimeter(1, 1, 1)).toBe(3);
        });
    });
}, 30000);

