import { ApiProperty, PartialType } from "@nestjs/swagger";
import { CreateCampaignDto } from "./create-campaign.dto";

export class UpdateCampaignDto extends PartialType(CreateCampaignDto) {
	@ApiProperty({
		example: "Rules: Masquerade 3ª edition - Role play in Belo-Horizonte / MG - to join with us call in wpp: (31) 97132-6856 / telegram: @cleitimXVZ2004",
		description: "Campaign's description",
	})
	description: string;

	@ApiProperty({
		example:
			"This year is 1978, we are in London and apparently there is a buzz in the alleys saying that gehenna is coming. Extremist groups of members have turned against the Camarilla and Exiles are being violated and the mask has been broken openly. Leopoldino members have arrived in town and it feels like a witch hunt in the 21st century. Kindreds feeding on TV and people are scared. Apparently the prince's last move was to force a group of vampires to solve this situation for him.",
		description: "Campaign's synopsis",
	})
	synopsis: string;
}
