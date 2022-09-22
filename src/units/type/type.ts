import { CheckSheet } from "../../types/abstracts";
import { CardData } from "../../utils/sheet/cardData";
import { Abilities } from "../../utils/sheet/abilities";
import { Advantages } from "../../utils/sheet/advantages";
import { Attributes } from "../../utils/sheet/attributes";
import { randomizer } from "../../utils/tools/randomizers";

export class Vampire extends CheckSheet {
	constructor(
		name?: string,
		player?: string,
		clan?: string,
		generation?: number,
		// nature?: string,
		// demeanor?: string,
		// concept?: string,
		// sire?: string,
	) {
		super();

		this._cardOwnerData = new CardData(name, player, clan, generation);

		this._attributesObject = new Attributes(randomizer(5) + 1, this._cardOwnerData.generation(), this._cardOwnerData.sheetData.clan);
		this._attributes = this._attributesObject.attributes;

		switch (this._cardOwnerData.sheetData.clan) {
			case "Nosferatu":
				this._attributes.social.features.map(e => {
					if (e.skill === "Appearance") {
						e.value = 0;
					}
				});
				break;

			default:
				break;
		}

		this._abilitiesObject = new Abilities(randomizer(5) + 1, this._cardOwnerData.generation());
		this._abilities = this._abilitiesObject.attributes;

		this._advantagesObject = new Advantages(randomizer(5) + 1, this._cardOwnerData.generation());
		this._advantages = this._advantagesObject.attributes;
	}
}
