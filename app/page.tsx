import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
	const session = await getServerSession(authOptions);

	return (
		<>
			<div className="place-items-center">
				<h1>
					Hello{" "}
					<span>
						{session ? (session.user ? session.user.name : "World!") : "World!"}
					</span>
				</h1>
				<h2>You are in the home page</h2>
			</div>
		</>
	);
}
