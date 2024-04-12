import { Model as BaseModel } from "@k1zang/models";
import GraphqlManager from "./GraphqlManager";

export default class Model extends BaseModel {
  protected managers = {
    graphql: GraphqlManager,
  };
}
