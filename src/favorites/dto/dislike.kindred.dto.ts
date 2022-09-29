import { ApiProperty } from "@nestjs/swagger";

export class DislikeKindredDto {
	@ApiProperty({
		example: "79653a44-4019-11ed-b878-0242ac120002",
		description: "Favoriting User's id",
	})
	favoriteId: string;
}
