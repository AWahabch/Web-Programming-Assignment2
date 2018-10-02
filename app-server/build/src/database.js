"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Mongoose = require("mongoose");
// Entities
const user_model_1 = require("./users/user.model");
const group_model_1 = require("./groups/group.model");
const channel_model_1 = require("./channels/channel.model");
const role_model_1 = require("./roles/role.model");
const userRole_model_1 = require("./userRoles/userRole.model");
const userChannel_model_1 = require("./userChannels/userChannel.model");
const message_model_1 = require("./messages/message.model");
const userActivity_model_1 = require("./userActivities/userActivity.model");
function init(config) {
    Mongoose.Promise = Promise;
    Mongoose.connect(process.env.MONGO_URL || config.connectionString);
    let mongoDb = Mongoose.connection;
    mongoDb.on('error', () => {
        console.log(`Unable to connect to database: ${config.connectionString}`);
    });
    mongoDb.once('open', () => {
        console.log(`Connected to database: ${config.connectionString}`);
    });
    return {
        userModel: user_model_1.UserModel,
        groupModel: group_model_1.GroupModel,
        channelModel: channel_model_1.ChannelModel,
        roleModel: role_model_1.RoleModel,
        userRoleModel: userRole_model_1.UserRoleModel,
        userChannelModel: userChannel_model_1.UserChannelModel,
        messageModel: message_model_1.MessageModel,
        userActivityModel: userActivity_model_1.UserActivityModel
    };
}
exports.init = init;
//# sourceMappingURL=database.js.map