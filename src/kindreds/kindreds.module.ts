import { Module } from "@nestjs/common";
import { KindredsService } from "./kindreds.service";
import { KindredController } from "./kindreds.controller";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({
	imports: [PrismaModule],
	controllers: [KindredController],
	providers: [KindredsService],
})
export class UsersModule {}
