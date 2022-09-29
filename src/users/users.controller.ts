import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from "@nestjs/common";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { User } from "./entity/users.entity";
import { UsersService } from "./users.service";

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
	@ApiOperation({
		summary: "Returns all users",
	})
	findAll(): Promise<User[]> {
		return this.usersService.findAll();
	}

	@Get(":id")
	@ApiOperation({
		summary: "Returns one User by ID",
	})
	findOne(@Param("id") id: string): Promise<User> {
		return this.usersService.findOne(id);
	}

	@Patch(":id")
	@ApiOperation({
		summary: "Patch one User by ID",
	})
	update(@Param("id") id: string, @Body() dto: UpdateUserDto): Promise<User | void> {
		return this.usersService.update(id, dto);
	}

	@Delete(":id")
	@HttpCode(HttpStatus.NO_CONTENT)
	@ApiOperation({
		summary: "Delete one User by ID",
	})
	remove(@Param("id") id: string): Promise<User> {
		return this.usersService.remove(id);
	}
}
