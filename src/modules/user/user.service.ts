import { prisma } from '../../../lib/prisma';
const findAll = async () => {
  return prisma.user.findMany();
};

const findById = async (id: string) => {
  return prisma.user.findUnique({
    where: { id },
  });
};

const createUser = async (payload: any) => {
  prisma.user.create({
    data: payload,
  });
};
export const userService = {
  findAll,
  findById,
  createUser,
};
