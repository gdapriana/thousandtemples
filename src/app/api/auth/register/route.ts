import { connectToDatabase } from "@/helpers/server-helpers";
import prisma from "@/prisma";
import { NextResponse } from "next/server";
import * as bcrypt from 'bcrypt'

export const POST = async(req: Request) => {
    try {
        const { name, email, password } = await req.json();
        if (!name || !email || !password) return NextResponse.json({message: "Invalid Data"}, {status: 422})
        const newPass = await bcrypt.hashSync(password, 10)
        await connectToDatabase()
        const user = prisma.user.create({data: {name, email, newPass}})
        return NextResponse.json({user}, {status: 201})
    } catch (error) {
        console.log(error)
        return NextResponse.json({message: "Server Error"}, {status: 500})
    } finally {
        await prisma.$disconnect()
    }

}