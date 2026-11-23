import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Tawfeeq Ayash | Mechatronics Engineer",
  description:
    "Explore Tawfeeq Ayash's engineering portfolio featuring robotics, industrial automation, PLC programming, CNC systems, intelligent control, and innovative engineering projects.",
  keywords: [
    "Tawfeeq Ayash",
    "Mechatronics Engineer",
    "Robotics",
    "Industrial Automation",
    "PLC Programming",
    "CNC",
    "SolidWorks",
    "Engineering Portfolio",
  ],
  openGraph: {
    title: "Tawfeeq Ayash | Mechatronics Engineer",
    description:
      "Robotics, industrial automation, intelligent systems, and engineering innovation.",
    type: "website",
  },
};


export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
