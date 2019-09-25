"use strict";
exports.__esModule = true;
var postBeerTemperature = function (req, res, beers, beer) {
    if (!req.body.temperature && req.body.temperature !== 0) {
        res.status(400);
        res.json({ message: 'Bad request - missing temperature value' });
    }
    else if (typeof req.body.temperature !== 'number') {
        res.status(400);
        res.json({ message: 'Bad request - wrong type on temperature value' });
    }
    else {
        beers[beer] = req.body.temperature;
        res.status(200);
        res.json({ message: 'OK' });
    }
};
exports["default"] = postBeerTemperature;
