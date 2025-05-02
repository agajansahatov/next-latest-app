import React from "react";
import {
	Html,
	Body,
	Container,
	Text,
	Link,
	Preview,
	Tailwind,
} from "@react-email/components";

const WelcomeTemplate = ({ name }: { name: string }) => {
	return (
		<Html>
			<Preview>Welcome aboard!</Preview>
			<Tailwind>
				<Body className="bg-white">
					<Container>
						<Text className="font-bold text-3xl">Hello {name || "World"}!</Text>
						<Link href="https://agajansahatov.github.io/">
							agajansahatov.github.io
						</Link>
					</Container>
				</Body>
			</Tailwind>
		</Html>
	);
};

export default WelcomeTemplate;
