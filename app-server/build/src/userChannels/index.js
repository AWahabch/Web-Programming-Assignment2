"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userChannel_routing_1 = require("./userChannel.routing");
function init(server, configs, database) {
    userChannel_routing_1.default(server, configs, database);
}
exports.init = init;
//# sourceMappingURL=index.js.map