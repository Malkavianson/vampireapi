import { ApiProperty } from "@nestjs/swagger";

export class FavoriteKindredDto {
	@ApiProperty({
		example: "79653a44-4019-11ed-b878-0242ac120002",
		description: "Favoriting User's id",
	})
	userId: string;

	@ApiProperty({
		example: "79653a44-4019-11ed-b878-0242ac120000",
		description: "Favorited Kindred's id",
	})
	kindredId: string;
}
