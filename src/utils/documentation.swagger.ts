const documentation = {
	basic: `Database manager API and random player stat sheet generator for campaigns in Vampire, The Masquerade 3rd Edition\n\n

This API has the following features:\n
    Kindreds\n
	@POST /kindred => Register a new Kindred
	@GET /kindred => Returns the stat sheet of all kindreds
	@GET /kindred/:id => Returns a kindred's stat sheet by ID
	\n
	\n
    Users\n
	@POST /users => Register a new User
	@GET /users => Returns all users
	@GET /users/:id => Returns a user by ID
	@PATCH /users/:id => Patch a user data by ID
	@DELETE /users/:id => Delete a user by ID
	\n
	\n
    Favorites\n
	@POST /favorites => Register a new User favorite Kindred
	@GET /favorites/:id => Returns all user's favorites by ID
	@DELETE /favorites/:id => Dislike a kindred by ID
	\n
   `,
	full: ``,
};

export default documentation;
