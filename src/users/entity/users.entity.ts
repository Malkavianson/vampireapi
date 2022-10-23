import { Favorite } from "../../favorites/entity/favorites.entity";

export class User {
	id: string;
	name: string;
	email?: string;
	password?: string;
	isAdmin?: boolean;
	createdAt?: Date;
	updatedAt?: Date;
	favorites?: Favorite[];
}
