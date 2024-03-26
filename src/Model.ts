import { Model as BaseModel } from "@k1/models";
import GraphqlManager from "./GraphqlManager";

export default class Model extends BaseModel {
  //   constructor(data) {
  //     super(data);
  //   }

  protected managers = {
    ...BaseModel.prototype.managers,
    graphql: GraphqlManager,
  };
}
