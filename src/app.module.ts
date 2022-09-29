import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { KindredsModule } from "./kindreds/kindreds.module";
import { UsersModule } from "./users/users.module";
import { FavoritesModule } from "./favorites/favorites.module";

@Module({
	imports: [UsersModule, KindredsModule, FavoritesModule],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
