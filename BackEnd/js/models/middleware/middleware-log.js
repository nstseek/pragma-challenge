"use strict";
exports.__esModule = true;
function logger(req, res, next) {
    console.log('///// Request /////');
    console.log(req.ip);
    console.log(req.method);
    console.log(req.path);
    console.log(new Date().toLocaleString());
    next();
}
exports["default"] = logger;
