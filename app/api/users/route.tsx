import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";

export function GET(request: NextRequest) {
	return NextResponse.json([
		{ id: 1, name: "Agajan" },
		{ id: 2, name: "Johnny" },
	]);
}

export async function POST(request: NextRequest) {
	const body = await request.json();
	const validationResult = schema.safeParse(body);
	if (!validationResult.success) {
		return NextResponse.json(validationResult.error.errors, { status: 400 });
	}

	return NextResponse.json({ id: 1, name: body.name }, { status: 201 });
}
