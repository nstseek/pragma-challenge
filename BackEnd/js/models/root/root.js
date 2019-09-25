"use strict";
exports.__esModule = true;
var logStatus = function (req, res) {
    res.status(200);
    res.json({ message: 'Server listening' });
};
exports["default"] = logStatus;
