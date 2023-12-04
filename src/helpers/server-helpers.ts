import prisma from "@/prisma";

export const connectToDatabase = async () => {
	try {
		await prisma.$connect();
		console.log("Database connected");
	} catch (error) {
		console.log(error);
		throw new Error("Unable connect to the Database");
	}
};
