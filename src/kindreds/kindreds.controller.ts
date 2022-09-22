import { Controller, Get, Post, Body, Patch, Param, Delete } from "@nestjs/common";
import { KindredsService } from "./kindreds.service";
import { CreateKindredDto } from "./dto/create-kindred.dto";
// import { UpdateKindredDto } from "./dto/update-kindred.dto";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("Kindreds")
@Controller("kindred")
export class KindredController {
	constructor(private readonly kindredService: KindredsService) {}

	@Post()
	create(@Body() dto: CreateKindredDto) {
		return this.kindredService.create(dto);
	}

	@Get()
	findAll() {
		return this.kindredService.findAll();
	}

	@Get(":id")
	findOne(@Param("id") id: string) {
		return this.kindredService.findOne(id);
	}

	// @Patch(":id")
	// update(@Param("id") id: string, @Body() dto: UpdateKindredDto) {
	// 	return this.kindredService.update(id, dto);
	// }

	// @Delete(":id")
	// remove(@Param("id") id: string) {
	// 	return this.kindredService.remove(id);
	// }

	@Delete()
	removeAll() {
		return this.kindredService.removeAll();
	}
}
