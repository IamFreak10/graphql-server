import { PrismaClient, Prisma } from '../../../generated/prisma/client';
import { prisma } from '../../../lib/prisma';
const rawPrisma = new PrismaClient();
const findAll = async () => {
  return prisma.user.findMany();
};

const findById = async (id: string, name?: string) => {
  // return prisma.user.findUnique({
  //   where: { id },
  // });
  if (name) {
    return (rawPrisma as any).$queryRaw(
      Prisma.sql`SELECT * FROM "User" WHERE name = ${name}`
    );
  }
  return prisma.user.findUnique({
    where: { id },
  });
};

const createUser = async (payload: { name: string; email: string }) => {
  return prisma.user.create({
    data: payload,
  });
};

export const userService = {
  findAll,
  findById,
  createUser,
};
