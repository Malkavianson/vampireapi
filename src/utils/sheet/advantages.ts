import { SkillSection } from "../../types/abstracts";
import { attributeSelector } from "../tools/separators";
import { SkillGroupResponse, SkillSectionAdvantagesResponse } from "../../types/interfaces";

export class Advantages extends SkillSection {
	constructor(priority: number, generation: number) {
		super();
		this._dataType = "advantages";
		this._attributes = attributeSelector(priority, this._dataType, generation);
	}

	public get attributes(): SkillSectionAdvantagesResponse {
		const att: SkillGroupResponse[] = this._attributes
			.map(e => {
				return e.features;
			})
			.sort((a, b) => {
				if (a.stand && b.stand) {
					return a.stand < b.stand ? -1 : a.stand > b.stand ? 1 : 0;
				}
			});
		att.forEach((e: SkillGroupResponse) => delete e.stand);

		const res: SkillSectionAdvantagesResponse = {
			type: this._dataType,
			disciplines: att[0],
			backgrounds: att[1],
			virtues: att[2],
		};

		return res;
	}
}
