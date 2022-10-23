import { User } from "src/users/entity/users.entity";

export class Campaign {
	id: string;
	name: string;
	image: string;
	description?: string;
	synopsis?: string;
	narrator?: User;
	players?: User[];
	createdAt: Date;
	updatedAt: Date;
}
