import Image from "next/image";
import coffee from "@/public/images/coffee.jpg";
import { Metadata } from "next";

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
