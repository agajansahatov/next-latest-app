import Image from "next/image";
import coffee from "@/public/images/coffee.jpg";

export default function Home() {
	return (
		<main>
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
