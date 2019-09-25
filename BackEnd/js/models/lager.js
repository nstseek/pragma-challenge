"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var BodyTypes = __importStar(require("../types/models"));
var saveTemp_1 = __importDefault(require("./saveTemp"));
var postLagerTemperature = function (req, res, beers) { return saveTemp_1["default"](req, res, beers, BodyTypes.Beer.Lager); };
exports["default"] = postLagerTemperature;
