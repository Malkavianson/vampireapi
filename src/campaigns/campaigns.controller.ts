import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, HttpCode, HttpStatus, UnauthorizedException } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { ApiBearerAuth, ApiOperation, ApiTags } from "@nestjs/swagger";
import { LoggedUser } from "src/auth/loggeduser.decorator";
import { User } from "src/users/entity/users.entity";
import { CampaignsService } from "./campaigns.service";
import { CreateCampaignDto } from "./dto/create-campaign.dto";
import { ManageCampaignDto } from "./dto/manage-campaign.dto";
import { UpdateCampaignDto } from "./dto/update-campaign.dto";
import { Campaign } from "./entities/campaign.entity";
import { Players } from "./entities/players.entity";

@UseGuards(AuthGuard())
@ApiBearerAuth()
@ApiTags("Campaigns")
@Controller("campaigns")
export class CampaignsController {
	constructor(private readonly campaignsService: CampaignsService) {}

	@Post()
	@ApiOperation({
		summary: "Create a campaign",
	})
	async create(@Body() dto: CreateCampaignDto, @LoggedUser() user: User): Promise<Campaign> {
		return await this.campaignsService.create(dto, user);
	}

	@Get()
	@ApiOperation({
		summary: "Get all campaigns",
	})
	async findAll(): Promise<Campaign[]> {
		return await this.campaignsService.findAll();
	}

	@Get(":id")
	@ApiOperation({
		summary: "Get campaign by ID",
	})
	// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
	async findOne(@Param("id") id: string) {
		return await this.campaignsService.findOne(id);
	}

	@Patch(":id")
	@ApiOperation({
		summary: "Patch one campaign by ID",
	})
	async update(@Param("id") id: string, @Body() dto: UpdateCampaignDto, @LoggedUser() user: User): Promise<Campaign> {
		return await this.campaignsService.update(id, dto, user);
	}

	@Delete(":id")
	@ApiOperation({
		summary: "Delete one campaign by ID",
	})
	@HttpCode(HttpStatus.NO_CONTENT)
	remove(@Param("id") id: string, @LoggedUser() user: User): Promise<Campaign | UnauthorizedException> {
		return this.campaignsService.remove(id, user);
	}

	@Post("player/add/:id")
	@ApiOperation({
		summary: "Add one player to campaign by ID",
	})
	async addPlayer(@Param("id") id: string, @Body() dto: ManageCampaignDto, @LoggedUser() user: User): Promise<Players> {
		return await this.campaignsService.addPlayer(id, dto, user);
	}

	@Delete("player/del/:id")
	@ApiOperation({
		summary: "Delete one player from a campaign by ID",
	})
	async removePlayer(@Param("id") id: string, @Body() dto: ManageCampaignDto, @LoggedUser() user: User): Promise<Players | UnauthorizedException> {
		return await this.campaignsService.removePlayer(id, dto, user);
	}
}
