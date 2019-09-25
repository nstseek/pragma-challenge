"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var getTemps_1 = __importDefault(require("../../models/get-temp/getTemps"));
var route = '/temps';
function routeTemps(server, beers) {
    server.get(route, function (req, res) { return getTemps_1["default"](req, res, beers); });
}
exports["default"] = routeTemps;
