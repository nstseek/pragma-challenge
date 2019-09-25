"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var lager_1 = __importDefault(require("../../models/save-temp/lager/lager"));
var route = '/lager';
function routeLager(server, beers) {
    server.post(route, function (req, res) { return lager_1["default"](req, res, beers); });
}
exports["default"] = routeLager;
