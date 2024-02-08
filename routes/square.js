const Routes = require('express');
const { squareArea, squarePerimeter } = require('../calculator');
const routes = Routes();

routes.get('/perimeter/:side', (req, res) => {
    const side = req.params.side;
    const perimeter = squarePerimeter(side);
    res.json({ perimeter });
});

routes.get('/area/:side', (req, res) => {
    const side = req.params.side;
    const area = squareArea(side);
    res.json({ area });
});

module.exports = routes;