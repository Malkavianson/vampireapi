import { Module } from "@nestjs/common";
import { CampaignsService } from "./campaigns.service";
import { CampaignsController } from "./campaigns.controller";
import { PrismaModule } from "src/prisma/prisma.module";
import { PassportModule } from "@nestjs/passport";

@Module({
	imports: [PrismaModule, PassportModule.register({ defaultStrategy: "jwt" })],
	controllers: [CampaignsController],
	providers: [CampaignsService],
})
export class CampaignsModule {}
