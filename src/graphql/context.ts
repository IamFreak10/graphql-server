import { prisma } from '../../lib/prisma';

export interface GraphQlContext {
  prisma: typeof prisma;
}

export async function createContext(): Promise<GraphQlContext> {
  return {
    prisma,
  };
}
