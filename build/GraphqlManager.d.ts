import { ApolloClient } from "@apollo/client";
export default class GraphqlManager {
    static provider(uri: string): ApolloClient<import("@apollo/client").NormalizedCacheObject>;
}
