import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-grotesk",
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
});
const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Khadijat Muhammad · QA Engineer",
  description:
    "Precision-driven QA Engineer specialising in Cypress automation, API testing, and CI/CD pipelines. Open to remote roles.",
  keywords: [
    "QA Engineer",
    "Automation Tester",
    "Cypress",
    "Postman",
    "JIRA",
    "Software Testing",
  ],
  openGraph: {
    title: "Khadijat Muhammad · QA Engineer",
    description: "The eyes between developers and users.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${grotesk.variable} ${inter.variable} ${mono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
