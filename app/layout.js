import { Caudex, Nothing_You_Could_Do, Palanquin } from "next/font/google";
import "./globals.css";
import Header from "../components/Header.jsx";

const nothing_you_could_do = Nothing_You_Could_Do({
	weight: "400",
	subsets: ["latin"],
	display: "swap",
	variable: "--font-nothing-you-could-do",
});

const caudex = Caudex({
	weight: ["400", "700"],
	subsets: ["latin"],
	display: "swap",
	variable: "--font-caudex",
});

const palanquin = Palanquin({
	weight: ["100", "200", "300", "400", "500", "600", "700"],
	subsets: ["latin"],
	display: "swap",
	variable: "--font-palanquin",
});

export const metadata = {
	title: "SolidarMobil e.V.",
	description:
		"Als Gemeinnütziger Verein wollen wir die Mobilität auf dem Land (v.a. Hersbrucker Umland) voranbringen.",
};

export default function RootLayout({ children }) {
	return (
		<html data-theme="dark_blue_green" lang="de">
			<body
				className={`${nothing_you_could_do.variable} ${caudex.variable} ${palanquin.variable}`}
			>
				<Header />
				<main className="bg-base-100 min-h-screen w-full text-base-content">
					{children}
				</main>
			</body>
		</html>
	);
}
