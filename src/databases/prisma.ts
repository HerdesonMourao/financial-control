import { PrismaClient } from '@prisma/client';

class PrismaService {
  private static instance: PrismaService;
  public prisma: PrismaClient;

  private constructor() {
    this.prisma = new PrismaClient();
  }

  public static getInstance(): PrismaService {
    if (!PrismaService.instance) {
      PrismaService.instance = new PrismaClient();
    }

    return PrismaService.instance;
  }
}

export const prismaService = PrismaService.getInstance();
