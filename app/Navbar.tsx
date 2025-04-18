import Link from "next/link";
import React from "react";

const Navbar = () => {
	return (
		<div className="flex bg-slate-200 p-5">
			<Link href="/" className="px-3">
				Next.js
			</Link>
			<Link href="/admin" className="px-3">
				Admin
			</Link>
			<Link href="/users" className="px-3">
				Users
			</Link>
			<Link href="/products" className="px-3">
				Products
			</Link>
		</div>
	);
};

export default Navbar;
