import handleErrorConstraintUnique from "../utils/middlewares/handle-error-constraint-unique.utils";
import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { User } from "./entity/users.entity";
import * as bcrypt from "bcryptjs";

@Injectable()
export class UsersService {
	private userSelect = {
		id: true,
		name: true,
		email: true,
		updatedAt: true,
		createdAt: true,
	};

	constructor(private readonly prisma: PrismaService) {}

	async create(dto: CreateUserDto): Promise<User | void> {
		const hashedPassword = await bcrypt.hash(dto.password, 8);

		const data: CreateUserDto = {
			name: dto.name,
			email: dto.email,
			password: hashedPassword,
		};

		return this.prisma.user.create({ data, select: this.userSelect }).catch(handleErrorConstraintUnique);
	}

	findAll(): Promise<User[]> {
		return this.prisma.user.findMany({
			select: {
				...this.userSelect,
				favorites: true,
			},
		});
	}

	async verifyIdAndReturnUser(id: string): Promise<User> {
		const user: User = await this.prisma.user.findUnique({
			where: { id },
			select: {
				...this.userSelect,
				favorites: true,
			},
		});

		if (!user) {
			throw new NotFoundException(`Entrada de id '${id}' não encontrada`);
		}

		return user;
	}

	findOne(id: string): Promise<User> {
		return this.verifyIdAndReturnUser(id);
	}

	async update(id: string, dto: UpdateUserDto): Promise<User | void> {
		await this.verifyIdAndReturnUser(id);

		return this.prisma.user.update({ where: { id }, data: dto, select: this.userSelect }).catch(handleErrorConstraintUnique);
	}

	async remove(id: string): Promise<User> {
		await this.verifyIdAndReturnUser(id);

		return this.prisma.user.delete({
			where: { id },
			select: this.userSelect,
		});
	}
}
