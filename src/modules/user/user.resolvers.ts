import type { GraphQlContext } from "../../graphql/context";
import { userService } from "./user.service";

export const userResolvers = {
  Query: {
    users: (_: unknown, __: unknown, ctx: GraphQlContext) => userService.findAll(),
    user: (_: unknown, args: { id: string }, ctx: GraphQlContext) =>
      userService.findById(args.id),
  },
  Mutation: {
    createUser: (_: unknown, args: {payload: any}) =>
      userService.createUser(args.payload),
  },
};