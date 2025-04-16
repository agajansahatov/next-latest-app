"use client";
import React from "react";

const AddToCart = () => {
	return (
		<div>
			<button
				onClick={() => console.log("Clicked to Cart")}
				style={{
					backgroundColor: "gray",
					padding: 5,
					borderRadius: 3,
					cursor: "pointer",
				}}
			>
				Add too Cart
			</button>
		</div>
	);
};

export default AddToCart;
