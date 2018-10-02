"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("joi");
exports.createUserActivityModel = Joi.object().keys({
    userId: Joi.string().trim().required(),
    channelId: Joi.string().trim().required(),
    action: Joi.number().required(),
});
exports.updateUserActivityModel = Joi.object().keys({
    userId: Joi.string().trim().required(),
    channelId: Joi.string().trim().required(),
    action: Joi.number().required(),
});
exports.jwtValidator = Joi.object({ 'authorization': Joi.string().required() }).unknown();
//# sourceMappingURL=userActivity.validator.js.map