import { SkillGroup, SkillSection } from "../../types/abstracts";
import { attributeSelector, featureSelector, prioritySelector } from "../tools/separators";
import { fillSkills } from "../tools/randomizers";
import { SkillGroupResponse, SkillSectionAttributeResponse } from "../../types/interfaces";

export class Attributes extends SkillSection {
	constructor(priority: number, generation: number, clan: string) {
		super();
		this._dataType = "attributes";
		this._attributes = attributeSelector(priority, this._dataType, generation, clan);
	}

	public get attributes(): SkillSectionAttributeResponse {
		const att: SkillGroupResponse[] = this._attributes
			.map(e => {
				return e.features;
			})
			.sort((a, b) => {
				return a.stand < b.stand ? -1 : a.stand > b.stand ? 1 : 0;
			});
		att.forEach((e: SkillGroupResponse) => delete e.stand);

		const res: SkillSectionAttributeResponse = {
			type: this._dataType,
			physical: att[0],
			social: att[1],
			mental: att[2],
		};

		return res;
	}
}

export class Attribute extends SkillGroup {
	constructor(priority: number, type: string, dataType: string, generation: number, clan?: string | undefined) {
		super();
		let pts = prioritySelector(priority, dataType);
		switch (dataType) {
			case "attributes":
				pts = 13 - generation + pts;
				break;
			case "abilities":
				pts = Math.round((13 - generation) * 1.77) + pts;
				break;
			case "advantages":
				pts = Math.round((13 - generation) * 0.77) + 7;
				break;

			default:
				break;
		}
		this._type = type;
		this._dataType = dataType;
		this._features = featureSelector(type, dataType);
		this._features = fillSkills(this._features, pts, generation, type, clan);
	}
}
