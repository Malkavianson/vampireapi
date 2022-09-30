import { ApiProperty } from "@nestjs/swagger";
import { User } from "../../users/entity/users.entity";

export class ResponseLoginDto {
	@ApiProperty({
		description: "Token Login",
		example: "asjkJASDLMalfdskasldfemq234akjdswlkk.oyJzdWIaOaIxMjM0NTY3ODkwIawabmFpZSI6IktviG4gRG9nIawaiWF0IjexNTE2MjM5MDIyfQ.SfnKxwRJSMoKKF2QT4fwtMoJf36POk6yJV_idQrrw5c",
	})
	token: string;

	@ApiProperty({
		description: "Login userdata",
	})
	user: User;
}
