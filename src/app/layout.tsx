import type { Metadata } from "next";
import { Playfair_Display, Dancing_Script, Poppins } from "next/font/google";
import BookingModal from "@/components/BookingModal";
import "./globals.css";

const heading = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const script = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
  weight: ["600", "700"],
});

const body = Poppins({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Belle&more Musterstadt | Wimpern, Kosmetik & Permanent Make-up",
  description:
    "Belle&more in Musterstadt: Wimpernverlängerung, Lashlifting, Permanent Make-up, Kosmetik und ästhetische Behandlungen. 4,8 von 5 Sternen aus über 510 Bewertungen. Zwei Studios in Musterstadt.",
  keywords: [
    "Wimpernverlängerung Musterstadt",
    "Belle and more",
    "Permanent Make-up Musterstadt",
    "Kosmetikstudio Musterstadt",
    "Lashlifting Musterstadt",
  ],
  openGraph: {
    title: "Belle&more Musterstadt",
    description:
      "Wimpern, Kosmetik, Permanent Make-up und ästhetische Behandlungen in Musterstadt. Besonders gut.",
    locale: "de_DE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${heading.variable} ${script.variable} ${body.variable}`}>
      <body className="bg-cream font-sans text-ink antialiased">
        {children}
        <BookingModal />
      </body>
    </html>
  );
}
