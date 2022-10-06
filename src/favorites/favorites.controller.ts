import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiOperation, ApiTags } from "@nestjs/swagger";
import { DislikeKindredDto } from "./dto/dislike.kindred.dto";
import { FavoriteKindredDto } from "./dto/favorite.kindred.dto";
import { FavoritesService } from "./favorites.service";
import { AuthGuard } from "@nestjs/passport";
import { Favorites } from "@prisma/client";

@UseGuards(AuthGuard())
@ApiBearerAuth()
@ApiTags("Favorites")
@Controller("favorites")
export class FavoritesController {
	constructor(private readonly favoritesService: FavoritesService) {}

	@Post()
	@ApiOperation({
		summary: "Favorite a kindred",
	})
	async favoriteKindred(@Body() dto: FavoriteKindredDto): Promise<Favorites> {
		return await this.favoritesService.favoriteKindred(dto);
	}

	@Get("/user/:id")
	@ApiOperation({
		summary: "Returns all user's favorites by ID",
	})
	async getUserFavorites(@Param("_id") id: string): Promise<Favorites[]> {
		return await this.favoritesService.getUserFavorites(id);
	}

	@Delete()
	@ApiOperation({
		summary: "Dislike a kindred",
	})
	@HttpCode(HttpStatus.NO_CONTENT)
	async dislikeKindred(@Body() dto: DislikeKindredDto): Promise<Favorites> {
		return this.favoritesService.dislikeKindred(dto);
	}
}
