import React, { Suspense } from "react";
import UserTable from "./UserTable";
import Link from "next/link";

interface Props {
	searchParams: Promise<{ sortOrder: string }>;
}

const UsersPage = async ({ searchParams }: Props) => {
	const { sortOrder } = await searchParams;

	return (
		<div className="place-items-center">
			<h1>Users Page</h1>
			<Link href="/users/new" className="btn">
				New User
			</Link>
			<Suspense fallback={<p>Loading...</p>}>
				<UserTable sortOrder={sortOrder} />
			</Suspense>
		</div>
	);
};

export default UsersPage;
