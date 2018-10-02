"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const role_routing_1 = require("./role.routing");
function init(server, configs, database) {
    role_routing_1.default(server, configs, database);
}
exports.init = init;
//# sourceMappingURL=index.js.map