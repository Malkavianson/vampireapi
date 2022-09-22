import type { SkillGroup } from "../../types/abstracts";
import type { Skill } from "../../types/types";
import { Attribute } from "../sheet/attributes";

export const prioritySelector = (priority: number, dataType: string): number => {
	let pts: number;
	switch (dataType) {
		case "attributes":
			switch (priority) {
				case 1:
					pts = 7;
					break;
				case 2:
					pts = 5;
					break;
				case 3:
					pts = 3;
					break;
			}
			break;

		case "abilities":
			switch (priority) {
				case 1:
					pts = 13;
					break;
				case 2:
					pts = 9;
					break;
				case 3:
					pts = 5;
					break;
			}
			break;
		case "advantages":
			pts = 0;
			break;

		default:
			break;
	}
	return pts;
};

export const featureSelector = (type: string, dataType: string): Skill[] => {
	let features: Skill[];
	switch (dataType) {
		case "attributes":
			switch (type) {
				case "physical":
					features = [
						{ skill: "Strength", value: 1 },
						{ skill: "Dexterity", value: 1 },
						{ skill: "Stamina", value: 1 },
					];
					break;
				case "social":
					features = [
						{ skill: "Manipulation", value: 1 },
						{ skill: "Appearance", value: 1 },
						{ skill: "Charisma", value: 1 },
					];
					break;
				case "mental":
					features = [
						{ skill: "Intelligence", value: 1 },
						{ skill: "Wits", value: 1 },
						{ skill: "Perception", value: 1 },
					];
					break;
			}
			break;
		case "abilities":
			switch (type) {
				case "talents":
					features = [
						{ skill: "Alertness", value: 0 },
						{ skill: "Athletics", value: 0 },
						{ skill: "Awareness", value: 0 },
						{ skill: "Brawl", value: 0 },
						{ skill: "Empathy", value: 0 },
						{ skill: "Expression", value: 0 },
						{ skill: "Intimidation", value: 0 },
						{ skill: "Leadership", value: 0 },
						{ skill: "Streetwise", value: 0 },
						{ skill: "Subterfuge", value: 0 },
					];
					break;
				case "skills":
					features = [
						{ skill: "Animal Ken", value: 0 },
						{ skill: "Crafts", value: 0 },
						{ skill: "Drive", value: 0 },
						{ skill: "Etiquette", value: 0 },
						{ skill: "Firearms", value: 0 },
						{ skill: "Larceny", value: 0 },
						{ skill: "Melee", value: 0 },
						{ skill: "Performance", value: 0 },
						{ skill: "Stealth", value: 0 },
						{ skill: "Survival", value: 0 },
					];
					break;
				case "knowledges":
					features = [
						{ skill: "Academics", value: 0 },
						{ skill: "Computer", value: 0 },
						{ skill: "Finance", value: 0 },
						{ skill: "Investigation", value: 0 },
						{ skill: "Law", value: 0 },
						{ skill: "Medicine", value: 0 },
						{ skill: "Occult", value: 0 },
						{ skill: "Politics", value: 0 },
						{ skill: "Science", value: 0 },
						{ skill: "Technology", value: 0 },
					];
					break;
			}
			break;
		case "advantages":
			switch (type) {
				case "disciplines":
					features = [];
					break;
				case "backgrounds":
					features = [];
					break;
				case "virtues":
					features = [
						{ skill: "Conscience/Conviction", value: 1 },
						{ skill: "Self-Control/Instinct", value: 1 },
						{ skill: "Courage", value: 1 },
					];
					break;
			}
			break;

		default:
			break;
	}
	return features;
};

export const attributeSelector = (priority: number, dataType: string, generation: number, clan?: string | undefined): SkillGroup[] => {
	let attributes: SkillGroup[] = [];
	switch (dataType) {
		case "attributes":
			switch (priority) {
				case 1:
					attributes[0] = new Attribute(1, "physical", dataType, generation);
					attributes[1] = new Attribute(2, "social", dataType, generation, clan);
					attributes[2] = new Attribute(3, "mental", dataType, generation);
					break;
				case 2:
					attributes[0] = new Attribute(1, "social", dataType, generation, clan);
					attributes[1] = new Attribute(2, "mental", dataType, generation);
					attributes[2] = new Attribute(3, "physical", dataType, generation);
					break;
				case 3:
					attributes[0] = new Attribute(1, "mental", dataType, generation);
					attributes[1] = new Attribute(2, "physical", dataType, generation);
					attributes[2] = new Attribute(3, "social", dataType, generation, clan);
					break;
				case 4:
					attributes[0] = new Attribute(1, "physical", dataType, generation);
					attributes[1] = new Attribute(2, "mental", dataType, generation);
					attributes[2] = new Attribute(3, "social", dataType, generation, clan);
					break;
				case 5:
					attributes[0] = new Attribute(1, "social", dataType, generation, clan);
					attributes[1] = new Attribute(2, "physical", dataType, generation);
					attributes[2] = new Attribute(3, "mental", dataType, generation);
					break;
				case 6:
					attributes[0] = new Attribute(1, "mental", dataType, generation);
					attributes[1] = new Attribute(2, "social", dataType, generation, clan);
					attributes[2] = new Attribute(3, "physical", dataType, generation);
					break;
				default:
					break;
			}
			break;

		case "abilities":
			switch (priority) {
				case 1:
					attributes[0] = new Attribute(1, "talents", dataType, generation);
					attributes[1] = new Attribute(2, "skills", dataType, generation);
					attributes[2] = new Attribute(3, "knowledges", dataType, generation);
					break;
				case 2:
					attributes[0] = new Attribute(1, "skills", dataType, generation);
					attributes[1] = new Attribute(2, "knowledges", dataType, generation);
					attributes[2] = new Attribute(3, "talents", dataType, generation);
					break;
				case 3:
					attributes[0] = new Attribute(1, "knowledges", dataType, generation);
					attributes[1] = new Attribute(2, "talents", dataType, generation);
					attributes[2] = new Attribute(3, "skills", dataType, generation);
					break;
				case 4:
					attributes[0] = new Attribute(1, "talents", dataType, generation);
					attributes[1] = new Attribute(2, "knowledges", dataType, generation);
					attributes[2] = new Attribute(3, "skills", dataType, generation);
					break;
				case 5:
					attributes[0] = new Attribute(1, "skills", dataType, generation);
					attributes[1] = new Attribute(2, "talents", dataType, generation);
					attributes[2] = new Attribute(3, "knowledges", dataType, generation);
					break;
				case 6:
					attributes[0] = new Attribute(1, "knowledges", dataType, generation);
					attributes[1] = new Attribute(2, "skills", dataType, generation);
					attributes[2] = new Attribute(3, "talents", dataType, generation);
					break;
				default:
					break;
			}
			break;

		case "advantages":
			attributes[0] = new Attribute(1, "disciplines", dataType, generation);
			attributes[1] = new Attribute(2, "backgrounds", dataType, generation);
			attributes[2] = new Attribute(3, "virtues", dataType, generation);
			break;

		default:
			break;
	}
	return attributes;
};

export const imageFetcher = (suffix: string): string => {
	const size: number = 64;
	return `https://${size}.media.tumblr.com/tumblr_${suffix}.jpg`;
};
