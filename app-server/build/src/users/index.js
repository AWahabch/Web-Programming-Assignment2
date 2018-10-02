"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_routing_1 = require("./user.routing");
function init(server, configs, database) {
    user_routing_1.default(server, configs, database);
}
exports.init = init;
//# sourceMappingURL=index.js.map