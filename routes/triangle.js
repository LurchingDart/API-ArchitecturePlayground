const Routes = require('express');
const { triangleArea, trianglePerimeter } = require('../calculator');
const routes = Routes();

routes.get('/perimeter/:side1/:side2/:side3', (req, res) => {
    const side1 = req.params.side1;
    const side2 = req.params.side2;
    const side3 = req.params.side3;
    const perimeter = trianglePerimeter(side1, side2, side3);
    res.json({ perimeter });
});

routes.get('/area/:base/:height', (req, res) => {
    const base = req.params.base;
    const height = req.params.height;
    const area = triangleArea(base, height);
    res.json({ area });
});

module.exports = routes;