"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var stout_1 = __importDefault(require("../../models/save-temp/stout/stout"));
var route = '/stout';
function routeStout(server, beers) {
    server.post(route, function (req, res) { return stout_1["default"](req, res, beers); });
}
exports["default"] = routeStout;
