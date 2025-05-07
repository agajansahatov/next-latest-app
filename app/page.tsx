"use client";
import Image from "next/image";
import coffee from "@/public/images/coffee.jpg";

export default function Home() {
	return (
		<main>
			<h1>Hello World!</h1>
			<br />
			<Image src={coffee} alt="Coffee" width={400} />
			<br />
			<figure className="relative h-96" style={{ width: 400 }}>
				<Image
					src="https://bit.ly/react-cover"
					alt="React Cover"
					fill
					className="object-contain"
					sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
					quality={100}
					priority
				/>
			</figure>
			<button
				className="btn btn-accent"
				onClick={async () => {
					const _ = (await import("lodash")).default;
					const users = [{ name: "c" }, { name: "b" }, { name: "a" }];
					const sorted = _.orderBy(users, ["name"]);
					console.log(sorted);
				}}
			>
				Sort
			</button>
		</main>
	);
}

// To set the page title dynamically
// export async function generateMetadata(): Promise<Metadata> {
// 	const product = "fetch a product from home page";

// 	return {
// 		title: "Product Home Page",
// 		description: "...",
// 	};
// }
