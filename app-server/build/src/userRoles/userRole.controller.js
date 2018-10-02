"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Boom = require("boom");
class UserRoleController {
    constructor(configs, database) {
        this.database = database;
        this.configs = configs;
    }
    createUserRole(request, reply) {
        return __awaiter(this, void 0, void 0, function* () {
            const model = request.payload;
            try {
                let userRole = yield this.database.userRoleModel.create(model);
                return reply(userRole);
            }
            catch (error) {
                return reply(Boom.badImplementation(error));
            }
        });
    }
    updateUserRole(request, reply) {
        return __awaiter(this, void 0, void 0, function* () {
            const model = request.payload;
            try {
                let userRole = yield this.database.userRoleModel.findByIdAndUpdate(model._id, model);
                userRole = yield this.database.userRoleModel.findById(model._id);
                return reply(userRole);
            }
            catch (error) {
                return reply(Boom.badImplementation(error));
            }
        });
    }
    deleteUserRole(request, reply) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = request.payload['_id'];
                let userRole = yield this.database.userRoleModel.findByIdAndRemove(id);
                return reply();
            }
            catch (error) {
                return reply(Boom.badImplementation(error));
            }
        });
    }
    listUserRolesByUser(request, reply) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userId = request.params['userId'];
                const userRoles = yield this.database.userRoleModel.find({ "userId": userId });
                reply(userRoles);
            }
            catch (error) {
                return reply(Boom.badImplementation(error));
            }
        });
    }
    listUserRolesByRole(request, reply) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const roleId = request.params['roleId'];
                const userRoles = yield this.database.userRoleModel.find({ "roleId": roleId });
                reply(userRoles);
            }
            catch (error) {
                return reply(Boom.badImplementation(error));
            }
        });
    }
}
exports.default = UserRoleController;
//# sourceMappingURL=userRole.controller.js.map