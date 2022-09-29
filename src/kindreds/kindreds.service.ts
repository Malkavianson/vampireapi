import type { Prisma } from "@prisma/client";
import handleErrorConstraintUnique from "../utils/middlewares/handle-error-constraint-unique.utils";
import { Injectable, NotFoundException } from "@nestjs/common";
import isUndefined from "../middlewares/middleware.isUndefined";
import { CreateKindredDto } from "./dto/create-kindred.dto";
import { UpdateKindredDto } from "./dto/update-kindred.dto";
import { PrismaService } from "../prisma/prisma.service";
import { Kindred } from "./entities/kindred.entity";
import { Vampire } from "../units/type/type";

@Injectable()
export class KindredsService {
	constructor(private readonly prisma: PrismaService) {}

	async verifyIdAndReturnKindred(id: string): Promise<Kindred> {
		const kindred: Kindred = await this.prisma.kindred.findUnique({
			where: { id },
		});

		if (!kindred) {
			throw new NotFoundException(`Id: '${id}' Not found`);
		}

		return kindred;
	}

	async create({ name, player, clan, generation }: CreateKindredDto): Promise<Kindred | void> {
		const dto: CreateKindredDto = {
			name: isUndefined(name),
			player: isUndefined(player),
			clan: isUndefined(clan),
			generation,
		};

		const newSheet = new Vampire(dto.name, dto.player, dto.clan, dto.generation);

		const data: UpdateKindredDto = {
			kindredId: newSheet._cardOwnerData.sheetData.id,
			kindredCreation: newSheet._cardOwnerData.sheetData.creation,
			image: newSheet._cardOwnerData.sheetData.image,
			name: newSheet._cardOwnerData.sheetData.name,
			player: newSheet._cardOwnerData.sheetData.player,
			clan: newSheet._cardOwnerData.sheetData.clan,
			generation: newSheet._cardOwnerData.sheetData.generation,
			attributes: JSON.stringify(newSheet._attributes),
			abilities: JSON.stringify(newSheet._abilities),
			advantages: JSON.stringify(newSheet._advantages),
		};
		return await this.prisma.kindred.create({ data }).catch(handleErrorConstraintUnique);
	}

	async findAll(): Promise<Kindred[]> {
		return this.prisma.kindred.findMany();
	}

	async findOne(id: string): Promise<Kindred> {
		return await this.verifyIdAndReturnKindred(id);
	}

	async update(id: string, dto: UpdateKindredDto): Promise<Kindred | void> {
		await this.verifyIdAndReturnKindred(id);
		const data: UpdateKindredDto = {
			kindredId: dto.kindredId,
			kindredCreation: dto.kindredCreation,
			image: dto.image,
			name: dto.name,
			player: dto.player,
			clan: dto.clan,
			generation: dto.generation,
			attributes: dto.attributes,
			abilities: dto.abilities,
			advantages: dto.advantages,
		};

		return await this.prisma.kindred
			.update({
				where: { id },
				data,
			})
			.catch(handleErrorConstraintUnique);
	}

	async remove(id: string): Promise<Kindred> {
		await this.verifyIdAndReturnKindred(id);

		return await this.prisma.kindred.delete({
			where: { id },
		});
	}

	async removeAll(): Promise<Prisma.BatchPayload> {
		return await this.prisma.kindred.deleteMany({});
	}
}
