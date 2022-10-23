import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { KindredsModule } from "./kindreds/kindreds.module";
import { UsersModule } from "./users/users.module";
import { FavoritesModule } from "./favorites/favorites.module";
import { AuthModule } from "./auth/auth.module";
import { CampaignsModule } from "./campaigns/campaigns.module";

@Module({
	imports: [UsersModule, KindredsModule, FavoritesModule, AuthModule, CampaignsModule],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
