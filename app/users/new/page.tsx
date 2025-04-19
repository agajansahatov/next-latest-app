"use client";

import { useRouter } from "next/navigation";
import React from "react";

const NewUserPage = () => {
	const router = useRouter();
	return (
		<>
			<div className="place-items-center">
				<h1>New User Page</h1>
				<button
					className="btn btn-lg btn-primary"
					onClick={() => router.push("/users")}
				>
					Create
				</button>
			</div>
		</>
	);
};

export default NewUserPage;
