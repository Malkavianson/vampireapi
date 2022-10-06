import { Controller, Get, Post, Body, /* Patch,*/ Param /*, Delete, HttpCode, HttpStatus, UseGuards*/ } from "@nestjs/common";
import { CreateKindredDto } from "./dto/create-kindred.dto";
// import { UpdateKindredDto } from "./dto/update-kindred.dto";
import { /*ApiBearerAuth,*/ ApiTags } from "@nestjs/swagger";
import { KindredsService } from "./kindreds.service";
import { Kindred } from "./entity/kindred.entity";
// import { AuthGuard } from "@nestjs/passport";
// import { Prisma } from "@prisma/client";

@ApiTags("Kindreds")
@Controller("kindred")
export class KindredController {
	constructor(private readonly kindredService: KindredsService) {}

	@Post()
	async create(@Body() dto: CreateKindredDto): Promise<Kindred | void> {
		return await this.kindredService.create(dto);
	}

	@Get()
	async findAll(): Promise<Kindred[]> {
		return await this.kindredService.findAll();
	}

	@Get(":id")
	async findOne(@Param("id") id: string): Promise<Kindred> {
		return await this.kindredService.findOne(id);
	}
	/*
	@Patch(":id")
	async update(@Param("id") id: string, @Body() dto: UpdateKindredDto) {
		return await this.kindredService.update(id, dto);
	}

	@Delete(":id")
	@UseGuards(AuthGuard())
	@ApiBearerAuth()
	@HttpCode(HttpStatus.NO_CONTENT)
	async remove(@Param("id") id: string): Promise<Kindred> {
		return await this.kindredService.remove(id);
	}

	@Delete()
	@UseGuards(AuthGuard())
	@ApiBearerAuth()
	@HttpCode(HttpStatus.NO_CONTENT)
	async removeAll(): Promise<Prisma.BatchPayload> {
		return await this.kindredService.removeAll();
	}
*/
}
