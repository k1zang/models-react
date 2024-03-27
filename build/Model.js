"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("@k1zang/models");
const GraphqlManager_1 = __importDefault(require("./GraphqlManager"));
class Model extends models_1.Model {
    constructor() {
        super(...arguments);
        this.managers = {
            ...models_1.Model.prototype.managers,
            graphql: GraphqlManager_1.default,
        };
    }
}
exports.default = Model;
//# sourceMappingURL=Model.js.map