import type { GraphQlContext } from '../../graphql/context';
import { userService } from './user.service';

export const userResolvers = {
  User:{
    createdAt: (parent: any) => {
      return new Date(parent.createdAt).toISOString();
    },
  },
  Query: {
    users: (_: unknown, __: unknown, ctx: GraphQlContext) =>
      userService.findAll(),
    user: (
      _: unknown,
      args: { id?: string | undefined; email?: string | undefined, name?: string | undefined },
      ctx: GraphQlContext
    ) => userService.findById(args.id , args.email,args.name),
  },
  Mutation: {
    createUser: (
      _: unknown,
      args: { name: string; email: string },
      ctx: GraphQlContext
    ) => userService.createUser(args),
  },
};
