import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import { prisma } from "@/prisma/client";

export async function GET(request: NextRequest) {
	const users = await prisma.user.findMany();

	return NextResponse.json(users);
}

export async function POST(request: NextRequest) {
	const body = await request.json();
	const validationResult = schema.safeParse(body);
	if (!validationResult.success) {
		return NextResponse.json(validationResult.error.errors, { status: 400 });
	}

	return NextResponse.json({ id: 1, name: body.name }, { status: 201 });
}
