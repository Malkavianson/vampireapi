import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class LoginDto {
	@IsEmail()
	@ApiProperty({
		description: "User email",
		example: "user@mail.com",
	})
	email: string;

	@IsString()
	@IsNotEmpty()
	@ApiProperty({
		description: "User Password",
		example: "12345abcd",
	})
	password: string;
}
