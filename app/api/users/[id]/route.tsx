import { NextRequest, NextResponse } from "next/server";

export async function GET(
	request: NextRequest,
	{ params }: { params: Promise<{ id: number }> },
) {
	const { id } = await params;
	if (id > 10)
		return NextResponse.json({ error: "User not found" }, { status: 404 });
	return NextResponse.json({ id: 1, name: "Agajan" });
}
