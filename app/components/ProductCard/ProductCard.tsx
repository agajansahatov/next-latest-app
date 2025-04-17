import React from "react";
import AddToCart from "../AddToCart";
import styles from "./ProductCard.module.css";

const ProductCard = () => {
	return (
		<div className={styles.cardContainer}>
			<h1>Product Card</h1>
			<AddToCart />
		</div>
	);
};

export default ProductCard;
