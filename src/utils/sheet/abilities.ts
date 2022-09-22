import { SkillSection } from "../../types/abstracts";
import { attributeSelector } from "../tools/separators";
import { SkillGroupResponse, SkillSectionAbilitiesResponse } from "../../types/interfaces";

export class Abilities extends SkillSection {
	constructor(priority: number, generation: number) {
		super();
		this._dataType = "abilities";
		this._attributes = attributeSelector(priority, this._dataType, generation);
	}
	public get attributes(): SkillSectionAbilitiesResponse {
		const att: SkillGroupResponse[] = this._attributes
			.map(e => {
				return e.features;
			})
			.sort((a, b) => {
				return a.stand < b.stand ? -1 : a.stand > b.stand ? 1 : 0;
			});
		att.forEach((e: SkillGroupResponse) => delete e.stand);

		const res: SkillSectionAbilitiesResponse = {
			type: this._dataType,
			talents: att[0],
			skills: att[1],
			knowledges: att[2],
		};

		return res;
	}
}
