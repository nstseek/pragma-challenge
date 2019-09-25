"use strict";
exports.__esModule = true;
var getTemperatures = function (req, res, beers) {
    res.status(200);
    res.json(beers);
};
exports["default"] = getTemperatures;
