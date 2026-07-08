import type { GraphQlContext } from '../../graphql/context';
import { userService } from './user.service';

export const userResolvers = {
  Query: {
    users: (_: unknown, __: unknown, ctx: GraphQlContext) =>
      userService.findAll(),
    user: (_: unknown, args: { id: string,name?:string }, ctx: GraphQlContext) =>
      userService.findById(args.id, args.name),
  },
  Mutation: {
    createUser: (
      _: unknown,
      args: { name: string; email: string },
      ctx: GraphQlContext
    ) => userService.createUser(args),
  },
};
