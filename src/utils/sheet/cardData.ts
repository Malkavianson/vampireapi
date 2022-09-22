import { nameGenerator, clanSelector, idCreator } from "../tools/randomizers";
import { OwnData } from "../../types/abstracts";
import { imageFetcher } from "../tools/separators";

export class CardData extends OwnData {
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
		this._creation = Date.now();
		this._id = idCreator();

		if (name) {
			this._name = name;
		} else {
			this._name = nameGenerator();
		}
		if (player) {
			this._player = player;
		} else {
			this._player = "NPC";
		}
		if (clan) {
			this._clan = clan;
		} else {
			this._clan = clanSelector();
		}
		if (generation) {
			this._generation = generation;
		}
		switch (this._clan) {
			case "Brujah":
				this._image = imageFetcher("m3asxe6jDW1ru6zp2o1_250");
				break;
			case "Gangrel":
				this._image = imageFetcher("m3asx1ErZo1ru6zp2o1_250");
				break;
			case "Malkavian":
				this._image = imageFetcher("m3asw63H2T1ru6zp2o1_250");
				break;
			case "Nosferatu":
				this._image = imageFetcher("m3asvkkRRs1ru6zp2o1_250");
				break;
			case "Toreador":
				this._image = imageFetcher("m3asuq596J1ru6zp2o1_400");
				break;
			case "Tremere":
				this._image = imageFetcher("m3asudqcpZ1ru6zp2o1_250");
				break;
			case "Ventrue":
				this._image = imageFetcher("m3assnHe2O1ru6zp2o1_250");
				break;
			case "LaSombra":
				this._image = imageFetcher("m3ass88Zpw1ru6zp2o1_250");
				break;
			case "Tzimisce":
				this._image = imageFetcher("m3asqyrkZD1ru6zp2o1_250");
				break;
			case "Assamite":
				this._image = imageFetcher("m3asq3U7rP1ru6zp2o1_250");
				break;
			case "Followers of Set":
				this._image = imageFetcher("m3aspospXH1ru6zp2o1_250");
				break;
			case "Giovanni":
				this._image = imageFetcher("m3aspcrx8d1ru6zp2o1_250");
				break;
			case "Ravnos":
				this._image = imageFetcher("m3asocMi0r1ru6zp2o1_250");
				break;

			default:
				break;
		}
	}
}
