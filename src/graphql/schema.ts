import { userTypeDefs } from '../modules/user/user.schema';
import { userResolvers } from '../modules/user/user.resolvers';

export const typeDefs = [userTypeDefs]; // add more modules here later
export const resolvers = [userResolvers]; // merge more resolvers here later