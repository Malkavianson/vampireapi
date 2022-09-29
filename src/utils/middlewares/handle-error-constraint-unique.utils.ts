import { UnprocessableEntityException } from "@nestjs/common";

const handleErrorConstraintUnique = (error: Error): never => {
	console.log(error);
	const splitedMessage = error.message.split("`");

	const errorMessage = `${splitedMessage[splitedMessage.length - 2]} already registred`;

	throw new UnprocessableEntityException(errorMessage);
};

export default handleErrorConstraintUnique;
