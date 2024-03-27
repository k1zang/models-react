"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@apollo/client");
class GraphqlManager {
    static provider(uri) {
        return new client_1.ApolloClient({
            uri,
            cache: new client_1.InMemoryCache(),
        });
    }
}
exports.default = GraphqlManager;
//# sourceMappingURL=GraphqlManager.js.map