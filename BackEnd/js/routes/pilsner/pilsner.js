"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var pilsner_1 = __importDefault(require("../../models/save-temp/pilsner/pilsner"));
var route = '/pilsner';
function routePilsner(server, beers) {
    server.post(route, function (req, res) { return pilsner_1["default"](req, res, beers); });
}
exports["default"] = routePilsner;
