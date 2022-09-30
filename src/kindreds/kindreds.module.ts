import { Module } from "@nestjs/common";
import { KindredsService } from "./kindreds.service";
import { KindredController } from "./kindreds.controller";
import { PrismaModule } from "src/prisma/prisma.module";
import { PassportModule } from "@nestjs/passport";

@Module({
	imports: [PrismaModule, PassportModule.register({ defaultStrategy: "jwt" })],
	controllers: [KindredController],
	providers: [KindredsService],
})
export class KindredsModule {}
