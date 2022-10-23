import { Controller, Get, Post, Body, Param, Delete, HttpCode, HttpStatus, UseGuards, /*Patch,*/ UnauthorizedException } from "@nestjs/common";
import { CreateKindredDto } from "./dto/create-kindred.dto";
// import { UpdateKindredDto } from "./dto/update-kindred.dto";
import { ApiBearerAuth, ApiOperation, ApiTags } from "@nestjs/swagger";
import { KindredsService } from "./kindreds.service";
import { Kindred } from "./entity/kindred.entity";
import { AuthGuard } from "@nestjs/passport";
import { Prisma } from "@prisma/client";
import { LoggedUser } from "src/auth/loggeduser.decorator";
import { User } from "src/users/entity/users.entity";

@ApiTags("Kindreds")
@Controller("kindred")
export class KindredController {
	constructor(private readonly kindredService: KindredsService) {}

	@Post()
	@ApiOperation({
		summary: "Generate a new Kindred",
	})
	async create(@Body() dto: CreateKindredDto, @LoggedUser() user: User): Promise<Kindred | void> {
		if (user) {
			return await this.kindredService.create(dto);
		} else {
			throw new UnauthorizedException("Contact Admin");
		}
	}

	@Get()
	async findAll(): Promise<Kindred[]> {
		return await this.kindredService.findAll();
	}

	@Get(":id")
	async findOne(@Param("id") id: string): Promise<Kindred> {
		return await this.kindredService.findOne(id);
	}

	@Get(":length/:page")
	@ApiOperation({
		summary: "paginated kindreds",
		description: `
**length**: kindreds per page *ex.: ( 10 )*\n
**page**: kindreds of games *ex.: ( 1 )*\n

		`,
	})
	async paginated(@Param("length") length: string, @Param("page") page: string): Promise<Kindred[]> {
		return await this.kindredService.paginated(+length, +page);
	}

	// @Patch(":id")
	// async update(@Param("id") id: string, @Body() dto: UpdateKindredDto) {
	// 	return await this.kindredService.update(id, dto);
	// }

	@Delete(":id")
	@UseGuards(AuthGuard())
	@ApiBearerAuth()
	@HttpCode(HttpStatus.NO_CONTENT)
	async remove(@Param("id") id: string, @LoggedUser() user: User): Promise<Kindred | UnauthorizedException> {
		return await this.kindredService.remove(id, user);
	}

	@Delete()
	@UseGuards(AuthGuard())
	@ApiBearerAuth()
	@HttpCode(HttpStatus.NO_CONTENT)
	async removeAll(@LoggedUser() user: User): Promise<Prisma.BatchPayload | UnauthorizedException> {
		return await this.kindredService.removeAll(user);
	}
}
