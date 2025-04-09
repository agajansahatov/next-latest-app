import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<>
			<h1>Hello World!</h1>
			<ul>
				<li>
					<a href="/users">Users - Server side navigation</a>
				</li>
				<li>
					<Link href="/users">Users - Client side navigation</Link>
				</li>
			</ul>
		</>
	);
}
