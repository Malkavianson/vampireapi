import { ResponseLoginDto } from "./dto/responseLogin.dto";
import { Body, Controller, Get, HttpCode, HttpStatus, Post, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiOperation, ApiTags } from "@nestjs/swagger";
import { AuthService } from "./auth.service";
import { LoginDto } from "./dto/login.dto";
import { AuthGuard } from "@nestjs/passport";
import { LoggedUser } from "./loggeduser.decorator";
import { User } from "src/users/entity/users.entity";

@ApiTags("Auth")
@Controller("auth")
export class AuthController {
	constructor(private readonly authService: AuthService) {}

	@Post("login")
	@HttpCode(HttpStatus.OK)
	@ApiOperation({
		summary: "Login",
		description: "Response.token must be used to allow access",
	})
	async login(@Body() dto: LoginDto): Promise<ResponseLoginDto> {
		return this.authService.login(dto);
	}

	@Get()
	@UseGuards(AuthGuard())
	@ApiOperation({
		summary: "Returns current user",
	})
	@ApiBearerAuth()
	profile(@LoggedUser() user: User): User {
		return user;
	}
}
