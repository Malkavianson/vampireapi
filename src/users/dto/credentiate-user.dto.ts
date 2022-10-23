import { ApiProperty, PartialType } from "@nestjs/swagger";
import { IsBoolean, IsNotEmpty } from "class-validator";
import { UpdateUserDto } from "./update-user.dto";

export class CredentiateUserDto extends PartialType(UpdateUserDto) {
	@IsBoolean()
	@IsNotEmpty()
	@ApiProperty({
		example: false,
	})
	isAdmin: boolean;
}
