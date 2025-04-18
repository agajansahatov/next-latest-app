import React from "react";
import UserTable from "./UserTable";
import { createSearchParamsFromClient } from "next/dist/server/request/search-params";

interface Props {
	searchParams: Promise<{ sortOrder: string }>;
}

const UsersPage = async ({ searchParams }: Props) => {
	const { sortOrder } = await searchParams;

	return (
		<>
			<h1 className="text-center text-3xl p-5">Users List</h1>
			<UserTable sortOrder={sortOrder} />
		</>
	);
};

export default UsersPage;
