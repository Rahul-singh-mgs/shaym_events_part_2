import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // fixed spelling
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"], // fixed spelling
});

export const metadata = {
  title: "Shyam Events",
  description:
    "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className={`w-full bg-gradient-to-r from-[#20edf8] via-[#fcfdfd] to-[#20edf8] ${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
