import { Abilities } from "../utils/sheet/abilities";
import { Advantages } from "../utils/sheet/advantages";
import { Attributes } from "../utils/sheet/attributes";
import type { SkillSectionResponse, SkillGroupResponse, SheetData, Sheet } from "./interfaces";
import type { Skill } from "./types";

export abstract class CheckSheet {
	_cardOwnerData: OwnData;
	_attributes: SkillSectionResponse;
	_attributesObject: Attributes;
	_abilities: SkillSectionResponse;
	_abilitiesObject: Abilities;
	_advantages: SkillSectionResponse;
	_advantagesObject: Advantages;

	public get sheet(): Sheet {
		return {
			cardOwner: this._cardOwnerData.sheetData,
			attributes: this._attributes,
			abilities: this._abilities,
			advantages: this._advantages,
		};
	}
}

export abstract class OwnData {
	protected _creation: number;
	protected _id: string;
	protected _image: string;
	protected _name: string;
	protected _player: string;
	protected _clan: string;
	protected _generation: number = 13;
	// protected _nature: string;
	// protected _demeanor: string;
	// protected _concept: string;
	// protected _sire: string;

	public get sheetData(): SheetData {
		return {
			id: this._id,
			creation: this._creation,
			image: this._image,
			name: this._name,
			player: this._player,
			clan: this._clan,
			generation: this._generation,
		};
	}

	public generation(action?: string, value?: number): number {
		switch (action) {
			case "decrease":
				this._generation = this._generation - value;
				break;
			default:
				break;
		}
		return this._generation;
	}
}

export abstract class SkillSection {
	protected _dataType: string;
	protected _attributes: SkillGroup[];

	public get attributes(): SkillSectionResponse {
		return;
	}
}

export abstract class SkillGroup {
	protected _type: string;
	protected _dataType: string;
	protected _features: Skill[];

	public get features(): SkillGroupResponse {
		let stand: number;

		switch (this._type) {
			case "physical":
				stand = 0;
				break;
			case "social":
				stand = 1;
				break;
			case "mental":
				stand = 2;
				break;
			case "talents":
				stand = 0;
				break;
			case "skills":
				stand = 1;
				break;
			case "knowledges":
				stand = 2;
				break;
			case "disciplines":
				stand = 0;
				break;
			case "backgrounds":
				stand = 1;
				break;
			case "virtues":
				stand = 2;
				break;

			default:
				break;
		}
		return {
			dataType: this._dataType,
			type: this._type,
			features: this._features,
			stand,
		};
	}
}
