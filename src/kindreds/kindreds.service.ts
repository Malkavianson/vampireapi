import { handleErrorConstraintUnique } from "src/utils/handle-error-unique.util";
import { Injectable, NotFoundException, UnprocessableEntityException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { Vampire } from "src/units/type/type";
import { CreateKindredDto } from "./dto/create-kindred.dto";
import { UpdateKindredDto } from "./dto/update-kindred.dto";
import { Kindred } from "./entities/kindred.entity";

@Injectable()
export class KindredsService {
	constructor(private readonly prisma: PrismaService) {}

	async verifyIdAndReturnKindred(id: string): Promise<Kindred> {
		const kindred: Kindred = await this.prisma.kindred.findUnique({
			where: { id },
		});

		if (!kindred) {
			throw new NotFoundException(`Id: '${id}' Não encontrado`);
		}

		return kindred;
	}

	async create(dto: CreateKindredDto): Promise<Kindred | void> {
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

	async remove(id: string) {
		await this.verifyIdAndReturnKindred(id);

		return await this.prisma.kindred.delete({
			where: { id },
		});
	}

	async removeAll() {
		return await this.prisma.kindred.deleteMany({});
	}
}
