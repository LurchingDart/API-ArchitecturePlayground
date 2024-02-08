const Router = require('express');
const { circleArea, circlePerimeter } = require('../calculator')
const routes = Router();

routes.get('/perimeter/:radius', (req, res) =>  {
    const radius = req.params.radius;
    const perimeter = circlePerimeter(radius);
    res.json({ perimeter });
});

routes.get('/area/:radius', (req, res) =>  {
    const radius = req.params.radius;
    const area = circleArea(radius);
    res.json({ area });
});

module.exports = routes;