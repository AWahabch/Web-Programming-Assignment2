
import MessageController from "../messages/message.controller";
import UserController from "../users/user.controller";
import ChannelController from "../channels/channel.controller";
exports.message = async function (serverConfigs, database, socket, message) {
    var msg = JSON.parse(message);
    var userId = msg.userId;
    var channelId = msg.channelId;
    var text = msg.text;
    var image = msg.image;
    const messageController = new MessageController(serverConfigs, database);
    const userController = new UserController(serverConfigs, database);
    const channelController = new ChannelController(serverConfigs, database);
    var user = await userController.getUserById(userId);
    var channel = await channelController.getChannelById(channelId);
    messageController.createMessageFromSocket(userId, channelId, text, image);
    const fullMsg = {
        user: {
            username: user.username,
            email: user.email,
            imageUrl: user.imageUrl,
        },
        channel: {
            channelId: channelId,
            name: channel.name,
        },
        text,
        image
    };
    socket.broadcast.emit('message', JSON.stringify(fullMsg));
};