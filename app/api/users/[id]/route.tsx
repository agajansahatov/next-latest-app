import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";

export async function GET(
	request: NextRequest,
	{ params }: { params: Promise<{ id: number }> },
) {
	const { id } = await params;
	if (id > 10)
		return NextResponse.json({ error: "User not found" }, { status: 404 });
	return NextResponse.json({ id: 1, name: "Agajan" });
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

	return NextResponse.json({ id: 1, name: body.name });
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
