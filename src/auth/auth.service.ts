import { Injectable, NotFoundException } from "@nestjs/common";
import { ResponseLoginDto } from "./dto/responseLogin.dto";
import { PrismaService } from "src/prisma/prisma.service";
import { User } from "src/users/entity/users.entity";
import { LoginDto } from "./dto/login.dto";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from "bcryptjs";

@Injectable()
export class AuthService {
	constructor(private readonly prisma: PrismaService, private readonly jwtService: JwtService) {}

	async login({ email, password }: LoginDto): Promise<ResponseLoginDto> {
		const user: User = await this.prisma.user.findUnique({ where: { email } });
		const passwordMatch: boolean = await bcrypt.compare(password, user.password);

		if (!user) {
			throw new NotFoundException("Invalid email or password ");
		}
		if (!passwordMatch) {
			throw new NotFoundException("Invalid email or password ");
		}

		delete user.password;

		const token: string = this.jwtService.sign({ email });

		return { token, user };
	}
}
