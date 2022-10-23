import { ApiProperty } from "@nestjs/swagger";

export class ManageCampaignDto {
	@ApiProperty({
		example: "a0e893c4-5192-11ed-bdc3-0242ac120002",
		description: "player's ID",
	})
	playerId: string;
}
