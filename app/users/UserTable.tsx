import Link from "next/link";
import React from "react";
import { sort } from "fast-sort";

interface User {
	id: number;
	name: string;
	email: string;
}

interface Props {
	sortOrder: string;
}

const UserTable = async ({ sortOrder }: Props) => {
	const res = await fetch("https://jsonplaceholder.typicode.com/xusers");
	const users: User[] = await res.json();

	const sortedUsers = sort(users).asc((user) => {
		if (sortOrder === "email") return user.email;
		if (sortOrder === "name") return user.name;
		return user.id;
	});

	return (
		<table className="table table-bordered p-5">
			<thead>
				<tr>
					<th>
						<Link href="/users?sortOrder=name">Name</Link>
					</th>
					<th>
						<Link href="/users?sortOrder=email">Email</Link>
					</th>
				</tr>
			</thead>
			<tbody>
				{sortedUsers.map((user) => (
					<tr key={user.id}>
						<td>{user.name}</td>
						<td>{user.email}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default UserTable;
