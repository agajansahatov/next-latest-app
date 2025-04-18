import React from "react";
import UserTable from "./UserTable";
import { createSearchParamsFromClient } from "next/dist/server/request/search-params";

interface Props {
	searchParams: Promise<{ sortOrder: string }>;
}

const UsersPage = async ({ searchParams }: Props) => {
	const { sortOrder } = await searchParams;

	return (
		<div className="place-items-center">
			<h1>Users Page</h1>
			<UserTable sortOrder={sortOrder} />
		</div>
	);
};

export default UsersPage;
