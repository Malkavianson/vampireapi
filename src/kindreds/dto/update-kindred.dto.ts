import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class UpdateKindredDto {
	@IsString()
	@IsNotEmpty()
	@ApiProperty({
		example: "_000AA0000AAA000",
		description: "Kindred's id",
	})
	kindredId: string;

	@IsNumber()
	@IsNotEmpty()
	@ApiProperty({
		example: 1000000000001,
		description: "Kindred's creation in seconds",
	})
	kindredCreation: number;

	@IsString()
	@IsNotEmpty()
	@ApiProperty({
		example: "https://www.yourwebsite/images/pic.jpg",
		description: "Kindred's clan icon",
	})
	image: string;

	@IsString()
	@IsNotEmpty()
	@ApiProperty({
		example: "John Smith",
		description: "Kindred's name",
	})
	name: string;

	@IsString()
	@IsNotEmpty()
	@ApiProperty({
		example: "Jack Thomas",
		description: "Player's name",
	})
	player: string;

	@IsString()
	@IsNotEmpty()
	@ApiProperty({
		example: "Malkavian",
		description: "Kindred's clan",
	})
	clan: string;

	@IsNumber()
	@IsNotEmpty()
	@ApiProperty({
		example: 13,
		description: "Kindred's generation",
	})
	generation: number;

	@IsString()
	@IsNotEmpty()
	@ApiProperty({
		example: `{
	"type": "attributes",
	"physical": {
		"dataType": "attributes",
		"type": "physical",
		"features": [
			{ "skill": "Strength", "value": 1 },
			{ "skill": "Dexterity", "value": 1 },
			{ "skill": "Stamina", "value": 1 }
		]
	},
	"social": {
		"dataType": "attributes",
		"type": "social",
		"features": [
			{ "skill": "Manipulation", "value": 1 },
			{ "skill": "Appearance", "value": 1 },
			{ "skill": "Charisma", "value": 1 }
		]
	},
	"mental": {
		"dataType": "attributes",
		"type": "mental",
		"features": [
			{ "skill": "Intelligence", "value": 1 },
			{ "skill": "Wits", "value": 1 },
			{ "skill": "Perception", "value": 1 }
		]
	}
}`,
		description: "Kindred's attributes",
	})
	attributes: string;
	@IsString()
	@IsNotEmpty()
	@ApiProperty({
		example: `{
	"type": "abilities",
	"talents": {
		"dataType": "abilities",
		"type": "talents",
		"features": [
			{ "skill": "Alertness", "value": 0 },
			{ "skill": "Athletics", "value": 0 },
			{ "skill": "Awareness", "value": 0 },
			{ "skill": "Brawl", "value": 0 },
			{ "skill": "Empathy", "value": 0 },
			{ "skill": "Expression", "value": 0 },
			{ "skill": "Intimidation", "value": 0 },
			{ "skill": "Leadership", "value": 0 },
			{ "skill": "Streetwise", "value": 0 },
			{ "skill": "Subterfuge", "value": 0 }
		]
	},
	"skills": {
		"dataType": "abilities",
		"type": "skills",
		"features": [
			{ "skill": "Animal Ken", "value": 0 },
			{ "skill": "Crafts", "value": 0 },
			{ "skill": "Drive", "value": 0 },
			{ "skill": "Etiquette", "value": 0 },
			{ "skill": "Firearms", "value": 0 },
			{ "skill": "Larceny", "value": 0 },
			{ "skill": "Melee", "value": 0 },
			{ "skill": "Performance", "value": 0 },
			{ "skill": "Stealth", "value": 0 },
			{ "skill": "Survival", "value": 0 }
		]
	},
	"knowledges": {
		"dataType": "abilities",
		"type": "knowledges",
		"features": [
			{ "skill": "Academics", "value": 0 },
			{ "skill": "Computer", "value": 0 },
			{ "skill": "Finance", "value": 0 },
			{ "skill": "Investigation", "value": 0 },
			{ "skill": "Law", "value": 0 },
			{ "skill": "Medicine", "value": 0 },
			{ "skill": "Occult", "value": 0 },
			{ "skill": "Politics", "value": 0 },
			{ "skill": "Science", "value": 0 },
			{ "skill": "Technology", "value": 0 }
		]
	}
}
`,
		description: "Kindred's abilities",
	})
	abilities: string;

	@IsString()
	@IsNotEmpty()
	@ApiProperty({
		example: `{
	"type": "advantages",
	"disciplines": {
		"dataType": "advantages",
		"type": "disciplines",
		"features": []
	},
	"backgrounds": {
		"dataType": "advantages",
		"type": "backgrounds",
		"features": []
	},
	"virtues": {
		"dataType": "advantages",
		"type": "virtues",
		"features": [
			{
				"skill": "Conscience/Conviction",
				"value": 1
			},
			{
				"skill": "Self-Control/Instinct",
				"value": 1
			},
			{ "skill": "Courage", "value": 1 }
		]
	}
}
`,
		description: "Kindred's advantages",
	})
	advantages: string;
}
