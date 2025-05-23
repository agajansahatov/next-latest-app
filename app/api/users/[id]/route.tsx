import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import { prisma } from "@/prisma/client";

export async function GET(
	request: NextRequest,
	{ params }: { params: Promise<{ id: string }> },
) {
	const { id } = await params;

	const user = await prisma.user.findUnique({
		where: { id: id },
	});

	if (!user)
		return NextResponse.json({ error: "User not found" }, { status: 404 });
	return NextResponse.json(user);
}

export async function PUT(
	request: NextRequest,
	{ params }: { params: Promise<{ id: string }> },
) {
	const body = await request.json();
	const validationResult = schema.safeParse(body);
	if (!validationResult.success) {
		return NextResponse.json(validationResult.error.errors, { status: 400 });
	}

	const { id } = await params;
	const user = await prisma.user.findUnique({
		where: { id: id },
	});
	if (!user)
		return NextResponse.json({ error: "User not found" }, { status: 404 });

	if (user.email !== body.email) {
		const u = await prisma.user.findUnique({
			where: { email: body.email },
		});
		if (u) {
			return NextResponse.json(
				{ error: "Email already taken." },
				{ status: 400 },
			);
		}
	}

	const updatedUser = await prisma.user.update({
		where: { id: user.id },
		data: {
			name: body.name,
			email: body.email,
		},
	});

	return NextResponse.json(updatedUser);
}

export async function DELETE(
	request: NextRequest,
	{ params }: { params: Promise<{ id: string }> },
) {
	const { id } = await params;
	const user = await prisma.user.findUnique({
		where: { id: id },
	});
	if (!user) {
		return NextResponse.json({ error: "User not found" }, { status: 404 });
	}

	const deletedUser = await prisma.user.delete({
		where: { id: id },
	});

	return NextResponse.json(deletedUser);
}
