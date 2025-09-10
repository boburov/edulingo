// prisma/prisma.module.ts
import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Module({
    providers: [PrismaService], // ✅ Service providersda
    exports: [PrismaService], // ✅ Service ni export qilish
})
export class PrismaModule { }