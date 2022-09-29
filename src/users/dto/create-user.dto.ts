import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString, Matches, MinLength } from "class-validator";

export class CreateUserDto {
	@IsString()
	@IsNotEmpty()
	@ApiProperty({
		example: "John Constantine",
		description: "User's name",
	})
	name: string;

	@IsEmail()
	@ApiProperty({
		example: "j_c@mail.com",
		description: "User's email",
	})
	email: string;

	@IsString()
	@MinLength(8)
	@Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
		message: "Your password must be strong",
	})
	@ApiProperty({
		example: "Abc*123",
		description: "User password => Must have a minimal of 8 characters, one uppercase, one lowercase, one symbol and one number.",
	})
	password: string;
}
