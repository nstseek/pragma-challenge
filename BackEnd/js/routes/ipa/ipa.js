"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var ipa_1 = __importDefault(require("../../models/save-temp/ipa/ipa"));
var route = '/ipa';
function routeIpa(server, beers) {
    server.post(route, function (req, res) { return ipa_1["default"](req, res, beers); });
}
exports["default"] = routeIpa;
