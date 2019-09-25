"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var root_1 = __importDefault(require("../../models/root/root"));
var route = '/';
function routeRoot(server) {
    server.get(route, function (req, res) { return root_1["default"](req, res); });
}
exports["default"] = routeRoot;
