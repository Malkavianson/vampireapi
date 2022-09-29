import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { NestExpressApplication } from "@nestjs/platform-express";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { AppModule } from "./app.module";

const PORT = process.env.PORT || 3333;

async function bootstrap(): Promise<void> {
	console.clear();
	console.log("Starting and validating");

	const app = await NestFactory.create<NestExpressApplication>(AppModule, {
		cors: true,
	});

	app.set("trust proxy", 1);

	app.useGlobalPipes(new ValidationPipe());

	console.log("Server Started\n\nMapping documentation");

	const config = new DocumentBuilder()
		.setTitle("Vampire, The Masquerade - Sheetlist generator")
		.setDescription(
			`Database manager API and random player stat sheet generator for campaigns in Vampire, The Masquerade 3rd Edition\n\n

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
		)
		.setVersion("1.0")
		.addTag("Kindreds")
		.addTag("Users")
		.addTag("Favorites")
		.addTag("Status")
		.addServer("https://vtmgenerator.herokuapp.com/")
		.addServer("http://localhost:3333")
		.build();

	const document = SwaggerModule.createDocument(app, config);
	SwaggerModule.setup("docs", app, document);

	console.log("Swagger.setup Builded");
	console.log("Mapping routes:");

	await app.listen(PORT, () => console.log(`App bootstraped at http://localhost:${PORT}`));
}
bootstrap();
