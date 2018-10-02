"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Hapi = require("hapi");
// Controllers
const Users = require("./users");
const Groups = require("./groups");
const Channels = require("./channels");
const Roles = require("./roles");
const UserRoles = require("./userRoles");
const UserChannels = require("./userChannels");
const UserActivities = require("./userActivities");
const Messages = require("./messages");
const Chat = require("./chat");
function init(configs, database) {
    return new Promise(resolve => {
        const port = process.env.PORT || configs.port;
        const server = new Hapi.Server();
        server.connection({
            port: port,
            routes: {
                cors: true
            }
        });
        server.connection({ port: 4001, labels: ['chat'] }); //seperated port for chatting
        if (configs.routePrefix) {
            server.realm.modifiers.route.prefix = configs.routePrefix;
        }
        //  Setup Hapi Plugins
        const plugins = configs.plugins;
        const pluginOptions = {
            database: database,
            serverConfigs: configs
        };
        let pluginPromises = [];
        plugins.forEach((pluginName) => {
            var plugin = (require("./@plugins/" + pluginName)).default();
            console.log(`Register Plugin ${plugin.info().name} v${plugin.info().version}`);
            pluginPromises.push(plugin.register(server, pluginOptions));
        });
        Promise.all(pluginPromises).then(() => {
            console.log('All plugins registered successfully.');
            console.log('Register Routes');
            Users.init(server, configs, database);
            Groups.init(server, configs, database);
            Channels.init(server, configs, database);
            Roles.init(server, configs, database);
            UserRoles.init(server, configs, database);
            UserActivities.init(server, configs, database);
            UserChannels.init(server, configs, database);
            Messages.init(server, configs, database);
            Chat.init(server, configs, database);
            console.log('Routes registered successfully.');
            resolve(server);
        });
    });
}
exports.init = init;
//# sourceMappingURL=server.js.map