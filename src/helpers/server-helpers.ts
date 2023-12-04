import prisma from "@/prisma"

export const connectToDatabase = async() => {
    try {
        await prisma.$connect();
    } catch (error) {
        console.log(error)
        throw new Error("Unable connect to the Database")
    }
}