import React from "react";

interface User {
	id: number;
	name: string;
	email: string;
}

const UsersPage = async () => {
	const res = await fetch(
		"https://jsonplaceholder.typicode.com/users",
		// By default it caches
		{ cache: "no-store" },
		// { next: { revalidate: 10 } },
	);
	// This cache functionality is only implemented in the fetch function, not in other 3rd party libraries like axios

	const users: User[] = await res.json();

	// By default the server component does static rendering on production mode,
	// But if we change caching to "no-store" or revalidate for a period of time,
	// it does dynamic rendering

	return (
		<>
			<h1 className="text-center text-3xl p-5">Users</h1>
			<table className="table table-bordered p-5">
				<thead>
					<tr>
						<th>Name</th>
						<th>Email</th>
					</tr>
				</thead>
				<tbody>
					{users.map((user) => (
						<tr key={user.id}>
							<td>{user.name}</td>
							<td>{user.email}</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
};

export default UsersPage;
