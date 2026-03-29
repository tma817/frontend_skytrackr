import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import AuthWrapper from "../components/auth/AuthWrapper";
import Footer from "@/components/Footer";
import { CurrencyProvider } from "@/context/CurrencyContext";

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

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {

	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans min-h-screen flex flex-col`}>
				<CurrencyProvider>
					<Navbar />
					<div className="flex-1">
						<AuthWrapper>{children}</AuthWrapper>
					</div>
					<Footer />
				</CurrencyProvider>
			</body>
		</html>
	);
}
