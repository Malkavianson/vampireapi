import { Injectable, NotFoundException, UnauthorizedException } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";
import { User } from "src/users/entity/users.entity";
import { CreateCampaignDto } from "./dto/create-campaign.dto";
import { ManageCampaignDto } from "./dto/manage-campaign.dto";
import { UpdateCampaignDto } from "./dto/update-campaign.dto";
import { Campaign } from "./entities/campaign.entity";
import { Players } from "./entities/players.entity";

export interface NarratorProps {
	narrator: {
		id: string;
		name: string;
	};
}

@Injectable()
export class CampaignsService {
	constructor(private readonly prisma: PrismaService) {}

	async create(dto: CreateCampaignDto, user: User): Promise<Campaign> {
		const data: Prisma.CampaignCreateInput = {
			name: dto.name,
			image: dto.image,
			narrator: {
				connect: {
					id: user.isAdmin ? dto.narratorId : user.id,
				},
			},
		};
		return await this.prisma.campaign.create({
			data,
		});
	}

	async findAll(): Promise<(Campaign & NarratorProps)[]> {
		return await this.prisma.campaign.findMany({
			include: {
				narrator: {
					select: {
						id: true,
						name: true,
					},
				},
			},
		});
	}

	// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
	async findOne(id: string) {
		const res = await this.prisma.campaign.findUnique({
			where: {
				id,
			},
			include: {
				narrator: {
					select: {
						id: true,
						name: true,
					},
				},
				players: {
					include: {
						player: {
							select: {
								id: true,
								name: true,
							},
						},
					},
				},
			},
		});
		if (!res) {
			throw new NotFoundException("Registro com o ${id}");
		}

		return res;
	}

	async update(id: string, dto: UpdateCampaignDto, user: User): Promise<Campaign> {
		const campaign = await this.findOne(id);
		if (user.id === campaign.narratorId || user.isAdmin) {
			const data: Prisma.CampaignUpdateInput = { ...dto };
			return await this.prisma.campaign.update({
				where: { id },
				data,
			});
		} else {
			throw new UnauthorizedException("You are not allowed to this endpoint");
		}
	}

	async remove(id: string, user: User): Promise<Campaign | UnauthorizedException> {
		const campaign = await this.findOne(id);
		if (user.id === campaign.narratorId || user.isAdmin) {
			return await this.prisma.campaign.delete({
				where: { id },
			});
		} else {
			return new UnauthorizedException("You are not allowed to this endpoint");
		}
	}

	async addPlayer(id: string, dto: ManageCampaignDto, user: User): Promise<Players> {
		const campaign = await this.findOne(id);
		if (user.id === campaign.narratorId || user.isAdmin) {
			const data: Prisma.PlayersCreateInput = {
				player: {
					connect: {
						id: dto.playerId,
					},
				},
				campaign: {
					connect: {
						id,
					},
				},
			};
			return await this.prisma.players.create({
				data,
			});
		} else {
			throw new UnauthorizedException("You are not allowed to this endpoint");
		}
	}

	async removePlayer(id: string, dto: ManageCampaignDto, user: User): Promise<Players | UnauthorizedException> {
		const campaign = await this.findOne(id);
		if (user.id === campaign.narratorId || user.isAdmin) {
			const participation = await this.prisma.players.findFirstOrThrow({
				where: {
					playerId: dto.playerId,
					campaignId: id,
				},
			});
			return await this.prisma.players.delete({
				where: {
					id: participation.id,
				},
			});
		} else {
			return new UnauthorizedException("You are not allowed to this endpoint");
		}
	}
}
