import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { cookies } from "next/headers";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "SkyTrackR",
	description: "Flight search and price tracking",
};

export default async  function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const cookieStore = await cookies();
	const accessToken = cookieStore.get("accessToken"); // returns {name, value} or undefined
	const isLoggedIn = !!accessToken;
	
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<Navbar isLoggedIn={isLoggedIn} />
				{children}
				<Footer />
			</body>
		</html>
	);
}
