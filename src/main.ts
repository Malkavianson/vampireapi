import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { NestExpressApplication } from "@nestjs/platform-express";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { AppModule } from "./app.module";
import documentation from "./utils/documentation.swagger";

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
		.setDescription(documentation.basic)
		.setVersion("1.1")
		.addBearerAuth()
		.addTag("Auth")
		.addTag("Users")
		.addTag("Favorites")
		.addTag("Kindreds")
		.addTag("Campaigns")
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
