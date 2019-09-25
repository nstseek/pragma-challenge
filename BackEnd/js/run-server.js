"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var body_parser_1 = __importDefault(require("body-parser"));
var cors_1 = __importDefault(require("cors"));
var express_1 = __importDefault(require("express"));
var ipa_1 = __importDefault(require("./routes/ipa/ipa"));
var lager_1 = __importDefault(require("./routes/lager/lager"));
var pale_ale_1 = __importDefault(require("./routes/pale-ale/pale-ale"));
var pilsner_1 = __importDefault(require("./routes/pilsner/pilsner"));
var root_1 = __importDefault(require("./routes/root/root"));
var stout_1 = __importDefault(require("./routes/stout/stout"));
var temps_1 = __importDefault(require("./routes/temps/temps"));
var wheat_beer_1 = __importDefault(require("./routes/wheat-beer/wheat-beer"));
var server_1 = __importDefault(require("./server"));
var server = new server_1["default"](express_1["default"], cors_1["default"], body_parser_1["default"], ipa_1["default"], lager_1["default"], pale_ale_1["default"], pilsner_1["default"], stout_1["default"], wheat_beer_1["default"], root_1["default"], temps_1["default"], 7000);
