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
class RoleController {
    constructor(configs, database) {
        this.database = database;
        this.configs = configs;
    }
    createRole(request, reply) {
        return __awaiter(this, void 0, void 0, function* () {
            const model = request.payload;
            try {
                let role = yield this.database.roleModel.create(model);
                return reply(role);
            }
            catch (error) {
                return reply(Boom.badImplementation(error));
            }
        });
    }
    updateRole(request, reply) {
        return __awaiter(this, void 0, void 0, function* () {
            const model = request.payload;
            try {
                console.log(model);
                let role = yield this.database.roleModel.findByIdAndUpdate(model._id, model);
                role = yield this.database.roleModel.findById(model._id);
                return reply(role);
            }
            catch (error) {
                return reply(Boom.badImplementation(error));
            }
        });
    }
    deleteRole(request, reply) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = request.params['id'];
                let role = yield this.database.roleModel.findByIdAndRemove(id);
                return reply();
            }
            catch (error) {
                return reply(Boom.badImplementation(error));
            }
        });
    }
    infoRole(request, reply) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = request.params['id'];
                console.log(id);
                let role = yield this.database.roleModel.findById(id);
                reply(role);
            }
            catch (error) {
                return reply(Boom.badImplementation(error));
            }
        });
    }
    listRole(request, reply) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const roles = yield this.database.roleModel.find({});
                reply(roles);
            }
            catch (error) {
                return reply(Boom.badImplementation(error));
            }
        });
    }
}
exports.default = RoleController;
//# sourceMappingURL=role.controller.js.map