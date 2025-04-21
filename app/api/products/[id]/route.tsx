import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";

export async function GET(
	request: NextRequest,
	{ params }: { params: Promise<{ id: number }> },
) {
	const { id } = await params;
	if (id > 10) {
		return NextResponse.json(
			{ error: "Product is not found" },
			{ status: 404 },
		);
	}

	return NextResponse.json({ id: id, name: "Milk", price: 2.5 });
}

export async function PUT(
	request: NextRequest,
	{ params }: { params: Promise<{ id: number }> },
) {
	const { id } = await params;
	if (id > 10) {
		return NextResponse.json(
			{ error: "Product is not found" },
			{ status: 404 },
		);
	}

	const body = await request.json();
	const validationResult = schema.safeParse(body);
	if (!validationResult.success) {
		return NextResponse.json(validationResult.error.errors, { status: 400 });
	}

	return NextResponse.json({ id: id, name: body.name, price: body.price });
}

export async function DELETE(
	request: NextRequest,
	{ params }: { params: Promise<{ id: number }> },
) {
	const { id } = await params;
	if (id > 10)
		return NextResponse.json({ error: "Product not found" }, { status: 404 });
	const body = await request.json();
	return NextResponse.json({ id: id, name: body.name, price: body.price });
}
