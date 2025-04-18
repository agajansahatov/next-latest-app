import ProductCard from "@/app/components/ProductCard";
import React from "react";

interface Props {
	params: Promise<{ slug?: string[] }>;
	searchParams: Promise<{ sortOrder: string }>;
}

const ProductPage = async ({ params, searchParams }: Props) => {
	const { slug } = await params;
	const { sortOrder } = await searchParams;
	return (
		<>
			<div className="place-items-center">
				<h1>Products Page</h1>
				<h2>Filter: {slug ? slug.join(" ") : ""} </h2>
				<h2>Sort order: {sortOrder}</h2>
				<ProductCard />
			</div>
		</>
	);
};

export default ProductPage;
