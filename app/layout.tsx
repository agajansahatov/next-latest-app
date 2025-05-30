import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./Navbar";
import AuthProvider from "./auth/Provider";
import GoogleAnalyticsScript from "./GoogleAnalyticsScript";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

const roboto = Roboto({
	subsets: ["latin"],
	weight: ["400", "500"],
	variable: "--font-roboto",
});

const poppins = localFont({
	src: "../public/fonts/poppins-regular-webfont.woff2",
	variable: "--font-poppins",
});

export const metadata: Metadata = {
	title: "Next Latest App",
	description: "The app that uses Next.js 15",
	openGraph: {
		title: "Next Latest App",
		description: "The app that uses Next.js 15",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" data-theme="winter">
			<GoogleAnalyticsScript />
			<title>Next Latest App</title>
			<body
				className={`${poppins.variable} ${roboto.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<AuthProvider>
					<Navbar />
					<main className="p-5">{children}</main>
				</AuthProvider>
			</body>
		</html>
	);
}
