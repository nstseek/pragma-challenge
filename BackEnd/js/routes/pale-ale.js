"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var pale_ale_1 = __importDefault(require("../models/pale-ale"));
var route = '/pale-ale';
function routePaleAle(server, beers) {
    server.post(route, function (req, res) { return pale_ale_1["default"](req, res, beers); });
}
exports["default"] = routePaleAle;
