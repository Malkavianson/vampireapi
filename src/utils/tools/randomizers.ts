import { Skill } from "../../types/types";
import { uniqueNamesGenerator, Config, names } from "unique-names-generator";

export const randomizer = (i: number): number => {
	return Math.floor(Math.random() * i);
};

export const idCreator = (): string => {
	const char = () => String.fromCharCode(randomizer(26) + 65);
	let random: string | string[] = `${Date.now() * randomizer(42) * 0.22113169185}`;
	random = random.replace(".", "0").split("").reverse().join("").substring(0, 15);
	random = random.split("");
	random.splice(3, 2, char(), char());
	random.splice(9, 3, char(), char(), char());
	random = random.join("");
	return `_${random}`;
};

export const DicePlay = {
	dice: (sides: number = 6): number => {
		return randomizer(sides) + 1;
	},

	action: (dices: number = 2, sides: number = 6): number[] => {
		let dropped: number[] = [];
		for (let i = 0; dices > i; i++) {
			const drop = DicePlay.dice(sides);
			dropped.push(drop);
		}
		return dropped;
	},
};

export const nameGenerator = (): string => {
	const config: Config = {
		dictionaries: [names, names],
		separator: " ",
		length: 2,
		style: "capital",
	};

	const name = uniqueNamesGenerator(config);
	return name;
};

export const clanSelector = (): string => {
	const clans = ["Brujah", "Gangrel", "Nosferatu", "Malkavian", "Toreador", "Tremere", "Ventrue", "LaSombra", "Tzimisce", "Assamite", "Followers of Set", "Giovanni", "Ravnos"];
	const selected = randomizer(clans.length);
	return clans[selected];
};

export const fillSkills = (features: Skill[], pts: number, generation: number, type: string, clan?: string): Skill[] => {
	let maxPoints = 13 - generation + 5;
	switch (type) {
		// case 'virtues':
		// 	break;

		default:
			if (features.length) {
				while (pts > 0) {
					const fortuna = randomizer(features.length);
					if (features[fortuna].value < maxPoints) {
						switch (clan) {
							case "Nosferatu":
								if (features[fortuna].skill === "Appearance") {
									features[fortuna].value = 0;
								} else {
									features[fortuna].value++;
									pts--;
								}
								break;
							default:
								features[fortuna].value++;
								pts--;
								break;
						}
					}
				}
			}
			break;
	}
	return features;
};
