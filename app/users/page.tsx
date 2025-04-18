import React from "react";
import UserTable from "./UserTable";

const UsersPage = async () => {
	return (
		<>
			<h1 className="text-center text-3xl p-5">Users</h1>
			<UserTable />
		</>
	);
};

export default UsersPage;
