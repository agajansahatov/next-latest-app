import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import { prisma } from "@/prisma/client";

export async function GET(
	request: NextRequest,
	{ params }: { params: Promise<{ id: string }> },
) {
	const { id } = await params;

	const user = await prisma.user.findUnique({
		where: { id: parseInt(id) },
	});

	if (!user)
		return NextResponse.json({ error: "User not found" }, { status: 404 });
	return NextResponse.json(user);
}

export async function PUT(
	request: NextRequest,
	{ params }: { params: Promise<{ id: number }> },
) {
	const body = await request.json();
	const validationResult = schema.safeParse(body);
	if (!validationResult.success) {
		return NextResponse.json(validationResult.error.errors, { status: 400 });
	}

	const { id } = await params;
	if (id > 10)
		return NextResponse.json({ error: "User not found" }, { status: 404 });

	return NextResponse.json({ id: id, name: body.name });
}

export async function DELETE(
	request: NextRequest,
	{ params }: { params: Promise<{ id: number }> },
) {
	const { id } = await params;
	if (id > 10)
		return NextResponse.json({ error: "User not found" }, { status: 404 });
	const body = await request.json();
	return NextResponse.json(body);
}
