import { ApiProperty } from "@nestjs/swagger";

export class CreateCampaignDto {
	@ApiProperty({
		example: "City of the dead",
		description: "Campaign's name",
	})
	name: string;

	@ApiProperty({
		example: "http://www.randomimages.com/image.jpg",
		description: "Campaign's image",
	})
	image: string;

	@ApiProperty({
		example: "a0e893c4-5192-11ed-bdc3-0242ac120002",
		description: "Narrator's ID",
	})
	narratorId: string;
}
