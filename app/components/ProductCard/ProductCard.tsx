import React from "react";
import AddToCart from "../AddToCart";

const ProductCard = () => {
	return (
		<div className="p-5 bg-slate-400 inline-block">
			<h1 className="text-center pb-5 text-2xl">Product Card</h1>
			<AddToCart />
		</div>
	);
};

export default ProductCard;
