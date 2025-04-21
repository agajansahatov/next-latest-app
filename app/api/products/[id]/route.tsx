import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import { prisma } from "@/prisma/client";

export async function GET(
	request: NextRequest,
	{ params }: { params: Promise<{ id: string }> },
) {
	const { id } = await params;
	const product = await prisma.product.findUnique({
		where: { id: parseInt(id) },
	});

	if (!product) {
		return NextResponse.json(
			{ error: "Product is not found" },
			{ status: 404 },
		);
	}

	return NextResponse.json(product);
}

export async function PUT(
	request: NextRequest,
	{ params }: { params: Promise<{ id: string }> },
) {
	const { id } = await params;
	const product = await prisma.product.findUnique({
		where: { id: parseInt(id) },
	});

	if (!product) {
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

	const updatedProduct = await prisma.product.update({
		where: { id: product.id },
		data: {
			name: body.name,
			price: body.price,
		},
	});

	return NextResponse.json(updatedProduct);
}

export async function DELETE(
	request: NextRequest,
	{ params }: { params: Promise<{ id: string }> },
) {
	const { id } = await params;
	const product = await prisma.product.findUnique({
		where: { id: parseInt(id) },
	});

	if (!product) {
		return NextResponse.json(
			{ error: "Product is not found" },
			{ status: 404 },
		);
	}

	const deletedProduct = await prisma.product.delete({
		where: { id: product.id },
	});

	return NextResponse.json(deletedProduct);
}
