import { PrismaClient, Prisma } from '../../../generated/prisma/client';
import { prisma } from '../../../lib/prisma';
const rawPrisma = new PrismaClient();
const findAll = async () => {
  const res = await prisma.user.findMany();
  console.log(res);
  return res;
};

const findById = async (id?: string, email?: string, name?: string) => {
  const res = await prisma.user.findFirst({
    where: {
      OR: [id ? { id } : {}, email ? { email } : {}, name ? { name } : {}],
    },
  });
  console.log(res);
  return res;
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
