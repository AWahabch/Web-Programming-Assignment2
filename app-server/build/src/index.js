"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Server = require("./server");
const Database = require("./database");
const Configs = require("./@configurations");
const fs = require("fs");
console.log(`Running environment ${process.env.NODE_ENV || "dev"}`);
// Catch unhanding unexpected exceptions
process.on('uncaughtException', (error) => {
    console.error(`uncaughtException ${error.message}`);
});
// Catch unhanding rejected promises
process.on('unhandledRejection', (reason) => {
    console.error(`unhandledRejection ${reason}`);
});
// Init Database
const dbConfigs = Configs.getDatabaseConfig();
const database = Database.init(dbConfigs);
const uploadConfig = Configs.getUploadConfig();
// Starting Application Server
const serverConfigs = Configs.getServerConfigs();
Server.init(serverConfigs, database).then((server) => {
    server.start(() => {
        if (!fs.existsSync(uploadConfig.folder)) {
            fs.mkdirSync(uploadConfig.folder);
        }
        // console.log('Server running at:', server.info.uri);
    });
});
//# sourceMappingURL=index.js.map