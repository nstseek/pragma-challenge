"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var middleware_log_1 = __importDefault(require("./models/middleware/middleware-log"));
var Server = (function () {
    function Server(expressLib, corsLib, bodyParserLib, ipaRoutes, lagerRoutes, paleAleRoutes, pilsnerRoutes, stoutRoutes, wheatBeerRoutes, rootRoutes, tempsRoutes, port) {
        this.Cors = corsLib;
        this.Express = expressLib;
        this.BodyParser = bodyParserLib;
        this.server = this.Express();
        this.server.use(this.Cors());
        this.server.use(this.BodyParser({ limit: '10mb' }));
        this.server.use(middleware_log_1["default"]);
        this.server.listen(port, function (err) {
            if (err) {
                throw new Error(err);
            }
            else {
                console.log("Listening on port " + port);
            }
        });
        this.beers = {
            ipa: 0,
            lager: 0,
            paleAle: 0,
            pilsner: 0,
            stout: 0,
            wheatBeer: 0
        };
        rootRoutes(this.server);
        ipaRoutes(this.server, this.beers);
        lagerRoutes(this.server, this.beers);
        paleAleRoutes(this.server, this.beers);
        pilsnerRoutes(this.server, this.beers);
        stoutRoutes(this.server, this.beers);
        wheatBeerRoutes(this.server, this.beers);
        tempsRoutes(this.server, this.beers);
    }
    return Server;
}());
exports["default"] = Server;
