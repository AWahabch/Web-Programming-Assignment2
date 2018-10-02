"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nconf = require("nconf");
const path = require("path");
//Read Configurations
const configs = new nconf.Provider({
    env: true,
    argv: true,
    store: {
        type: 'file',
        file: path.join(__dirname, `./config.${process.env.NODE_ENV || "dev"}.json`)
    }
});
function getDatabaseConfig() {
    return configs.get("database");
}
exports.getDatabaseConfig = getDatabaseConfig;
function getServerConfigs() {
    return configs.get("server");
}
exports.getServerConfigs = getServerConfigs;
function getMailConfigs() {
    return configs.get("mail");
}
exports.getMailConfigs = getMailConfigs;
function getUploadConfig() {
    return configs.get("upload");
}
exports.getUploadConfig = getUploadConfig;
//# sourceMappingURL=index.js.map