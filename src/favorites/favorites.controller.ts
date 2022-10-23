import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, UnauthorizedException, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiOperation, ApiTags } from "@nestjs/swagger";
import { DislikeKindredDto } from "./dto/dislike.kindred.dto";
import { FavoriteKindredDto } from "./dto/favorite.kindred.dto";
import { FavoritesService } from "./favorites.service";
import { AuthGuard } from "@nestjs/passport";
import { Favorites } from "@prisma/client";
import { LoggedUser } from "src/auth/loggeduser.decorator";
import { User } from "src/users/entity/users.entity";

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
	async favoriteKindred(@Body() dto: FavoriteKindredDto, @LoggedUser() user: User): Promise<Favorites> {
		if (user.isAdmin || user.id === dto.userId) {
			return await this.favoritesService.favoriteKindred(dto);
		} else {
			throw new UnauthorizedException("Cannot favorite");
		}
	}

	@Get("/user/:id")
	@ApiOperation({
		summary: "Returns all user's favorites by ID",
	})
	async getUserFavorites(@Param("id") id: string, @LoggedUser() user: User): Promise<Favorites[]> {
		if (user.isAdmin || user.id === id) {
			return await this.favoritesService.getUserFavorites(id);
		} else {
			throw new UnauthorizedException("Cannot favorite");
		}
	}

	@Delete()
	@ApiOperation({
		summary: "Dislike a kindred",
	})
	@HttpCode(HttpStatus.NO_CONTENT)
	async dislikeKindred(@Body() dto: DislikeKindredDto, @LoggedUser() user: User): Promise<Favorites | UnauthorizedException> {
		return this.favoritesService.dislikeKindred(dto, user);
	}
}
