"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var wheat_beer_1 = __importDefault(require("../../models/save-temp/wheat-beer/wheat-beer"));
var route = '/wheat-beer';
function routeWheatBeer(server, beers) {
    server.post(route, function (req, res) { return wheat_beer_1["default"](req, res, beers); });
}
exports["default"] = routeWheatBeer;
