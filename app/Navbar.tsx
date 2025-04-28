"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
	const { status, data: session } = useSession();

	return (
		<div className="flex bg-slate-200 px-5 py-3 items-center min-h-15">
			<Link href="/" className="px-3 hover:underline">
				Next.js
			</Link>
			<Link href="/admin" className="px-3 hover:underline">
				Admin
			</Link>
			<Link href="/users" className="px-3 hover:underline">
				Users
			</Link>
			<Link href="/products" className="px-3 hover:underline">
				Products
			</Link>
			<Link href="/upload" className="px-3 hover:underline">
				Upload
			</Link>
			<div className="px-3 ml-auto">
				{status === "loading" && (
					<div className="flex items-center">
						<span className="loading loading-xl loading-dots mr-6"></span>
						<span className="loading loading-xl loading-ring"></span>
					</div>
				)}
				{status === "authenticated" && (
					<div className="flex items-center">
						<Link href="/api/auth/signout" className="px-6 hover:underline">
							Sign Out
						</Link>
						<span className="pr-3 cursor-pointer">{session.user!.name}</span>
						<img
							src={
								session.user?.image ??
								`https://ui-avatars.com/api/?name=${
									session.user?.name ?? "User"
								}&background=random`
							}
							alt={session.user?.name ?? "Avatar"}
							className="w-9 h-9 rounded-full cursor-pointer"
						/>
					</div>
				)}
				{status === "unauthenticated" && (
					<Link href="/api/auth/signin" className="px-3">
						Login
					</Link>
				)}
			</div>
		</div>
	);
};

export default Navbar;
