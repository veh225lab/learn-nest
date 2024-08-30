import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}
  getUser() {
    return this.prisma.user.findMany({
      select: {
        id: true,
        email: true,
        name: true,
      },
    });
  }
}
