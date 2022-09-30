import { Injectable, NotFoundException } from "@nestjs/common";
import { Favorites, Prisma } from "@prisma/client";
import { PrismaService } from "../prisma/prisma.service";
import { DislikeKindredDto } from "./dto/dislike.kindred.dto";
import { FavoriteKindredDto } from "./dto/favorite.kindred.dto";

@Injectable()
export class FavoritesService {
	constructor(private readonly prisma: PrismaService) {}

	async verifyIdAndReturnProductFav(favoriteId: string): Promise<Favorites> {
		const favorite: Favorites = await this.prisma.favorites.findUnique({
			where: { id: favoriteId },
		});

		if (!favorite) {
			throw new NotFoundException(`Favorite Id: '${favoriteId}' not found`);
		}

		return favorite;
	}

	async favoriteKindred(dto: FavoriteKindredDto): Promise<Favorites> {
		const data: Prisma.FavoritesCreateInput = {
			user: {
				connect: {
					id: dto.userId,
				},
			},
			kindred: {
				connect: {
					id: dto.kindredId,
				},
			},
		};

		return await this.prisma.favorites.create({ data });
	}

	async getUserFavorites(id: string): Promise<Favorites[]> {
		return await this.prisma.favorites.findMany({
			where: { userId: id },
			include: { kindred: true },
		});
	}

	async dislikeKindred({ favoriteId }: DislikeKindredDto): Promise<Favorites> {
		this.verifyIdAndReturnProductFav(favoriteId);

		return this.prisma.favorites.delete({
			where: {
				id: favoriteId,
			},
		});
	}
}
