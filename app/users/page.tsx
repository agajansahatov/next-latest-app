import React from "react";

interface User {
	id: number;
	name: string;
}

const UsersPage = async () => {
	const res = await fetch(
		"https://jsonplaceholder.typicode.com/users",
		// By default it caches
		// { cache: 'no-store'}
		{ next: { revalidate: 10 } },
	);
	// This cache functionality is only implemented in the fetch function, not in other 3rd party libraries like axios

	const users: User[] = await res.json();

	return (
		<>
			<h1>Users</h1>
			<ul>
				{users.map((user) => (
					<li key={user.id}>{user.name}</li>
				))}
			</ul>
		</>
	);
};

export default UsersPage;
