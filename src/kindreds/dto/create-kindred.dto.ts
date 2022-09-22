import { ApiProperty } from "@nestjs/swagger";

export class CreateKindredDto {
	@ApiProperty({
		example: "John Smith",
		description: "Kindred's name",
	})
	name: string;

	@ApiProperty({
		example: "Jack Thomas",
		description: "Player's name",
	})
	player: string;

	@ApiProperty({
		example: "Malkavian",
		description: "Kindred's clan",
	})
	clan: string;

	@ApiProperty({
		example: 13,
		description: "Kindred's generation",
	})
	generation: number;
}
