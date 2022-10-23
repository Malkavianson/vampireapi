import { User } from "src/users/entity/users.entity";
import { Campaign } from "./campaign.entity";

export class Players {
	id: string;
	player?: User;
	campaign?: Campaign;
	createdAt?: Date;
}
