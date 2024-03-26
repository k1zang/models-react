import { ApolloClient, InMemoryCache } from "@apollo/client";

export default class GraphqlManager {
  static provider(uri: string) {
    return new ApolloClient({
      uri,
      cache: new InMemoryCache(),
    });
  }
}
