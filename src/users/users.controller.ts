import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, UnauthorizedException, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiOperation, ApiTags } from "@nestjs/swagger";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { UsersService } from "./users.service";
import { AuthGuard } from "@nestjs/passport";
import { User } from "./entity/users.entity";
import { LoggedUser } from "src/auth/loggeduser.decorator";
import { CredentiateUserDto } from "./dto/credentiate-user.dto";

@ApiTags("Users")
@Controller("users")
export class UsersController {
	constructor(private readonly usersService: UsersService) {}

	@Post()
	@ApiOperation({
		summary: "Create a new User",
	})
	create(@Body() dto: CreateUserDto): Promise<User | void> {
		return this.usersService.create(dto);
	}

	@Get()
	@UseGuards(AuthGuard())
	@ApiBearerAuth()
	@ApiOperation({
		summary: "Returns all users",
	})
	findAll(): Promise<User[]> {
		return this.usersService.findAll();
	}

	@Get(":id")
	@UseGuards(AuthGuard())
	@ApiBearerAuth()
	@ApiOperation({
		summary: "Returns one User by ID",
	})
	findOne(@Param("id") id: string): Promise<User> {
		return this.usersService.findOne(id);
	}

	@Patch(":id")
	@UseGuards(AuthGuard())
	@ApiBearerAuth()
	@ApiOperation({
		summary: "Patch one User by ID",
	})
	update(@Param("id") id: string, @Body() dto: UpdateUserDto, @LoggedUser() user: User): Promise<User | void> {
		return this.usersService.update(id, dto, user);
	}

	@Patch("credentiated/:id")
	@UseGuards(AuthGuard())
	@ApiBearerAuth()
	@ApiOperation({
		summary: "Patch one Admin by ID",
	})
	credentiated(@Param("id") id: string, @Body() dto: CredentiateUserDto, @LoggedUser() user: User): Promise<User | void> {
		if (user.isAdmin) {
			return this.usersService.update(id, dto, user);
		}
	}

	@Delete(":id")
	@UseGuards(AuthGuard())
	@ApiBearerAuth()
	@HttpCode(HttpStatus.NO_CONTENT)
	@ApiOperation({
		summary: "Delete one User by ID",
	})
	remove(@Param("id") id: string, @LoggedUser() user: User): Promise<User | UnauthorizedException> {
		return this.usersService.remove(id, user);
	}
}
