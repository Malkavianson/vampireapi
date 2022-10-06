import { Module } from "@nestjs/common";
import { PrismaModule } from "src/prisma/prisma.module";
import { UsersController } from "./users.controller";
import { UsersService } from "./users.service";
import { PassportModule } from "@nestjs/passport";

@Module({
	imports: [PrismaModule, PassportModule.register({ defaultStrategy: "jwt" })],
	controllers: [UsersController],
	providers: [UsersService],
})
export class UsersModule {}
