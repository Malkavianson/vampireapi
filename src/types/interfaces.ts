import type { Skill } from "./types";

export interface Sheet {
	cardOwner: SheetData;
	attributes: SkillSectionResponse;
	abilities: SkillSectionResponse;
	advantages: SkillSectionResponse;
}

export interface SheetData {
	id: string;
	creation: number;
	image: string;
	name: string;
	player: string;
	clan: string;
	generation: number;
}

export interface Advantages {
	_disciplines: Skill[];
	_backgrounds: Skill[];
	_virtues: Skill[];
}

export interface SkillGroupResponse {
	dataType: string;
	type: string;
	features: Skill[];
	stand?: number;
}

export interface SkillSectionResponse {
	type: string;
	physical?: SkillGroupResponse;
	social?: SkillGroupResponse;
	mental?: SkillGroupResponse;
	talents?: SkillGroupResponse;
	skills?: SkillGroupResponse;
	knowledges?: SkillGroupResponse;
	disciplines?: SkillGroupResponse;
	backgrounds?: SkillGroupResponse;
	virtues?: SkillGroupResponse;
}

export interface SkillSectionAttributeResponse {
	type: string;
	physical: SkillGroupResponse;
	social: SkillGroupResponse;
	mental: SkillGroupResponse;
}

export interface SkillSectionAbilitiesResponse {
	type: string;
	talents: SkillGroupResponse;
	skills: SkillGroupResponse;
	knowledges: SkillGroupResponse;
}
export interface SkillSectionAdvantagesResponse {
	type: string;
	disciplines: SkillGroupResponse;
	backgrounds: SkillGroupResponse;
	virtues: SkillGroupResponse;
}
