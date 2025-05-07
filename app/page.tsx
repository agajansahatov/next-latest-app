"use client";
import Image from "next/image";
import coffee from "@/public/images/coffee.jpg";
// This is only for demonstration.
// We should only use the lazy loading for large heavy components
import dynamic from "next/dynamic";
const HeavyComponent = dynamic(() => import("./components/HeavyComponent"), {
	// When importing client components using dynamic function,
	// By default they are pre-rendered on the server
	// if we use some browser events or access some browser apis , on the server they might not be available,
	// so in those situations, we disable ssr here:
	ssr: false,
	// showing the loading icon
	loading: () => <span className="loading loading-spinner"></span>,
});
import { useState } from "react";

export default function Home() {
	const [isVisible, setVisible] = useState(false);

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
				onClick={() => (isVisible ? setVisible(false) : setVisible(true))}
			>
				{isVisible ? "Hide" : "Show"}
			</button>
			<br />
			<br />
			{isVisible && <HeavyComponent />}
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
