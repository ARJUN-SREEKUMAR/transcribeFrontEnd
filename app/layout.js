import {  Gentium_Book_Plus } from "next/font/google";
import "./globals.css";


const inter =   Gentium_Book_Plus({ subsets: ["latin"],
weight: ["400"],
});

export const metadata = {
  title: "Transcribe",
  description: "Audio transcription tool",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={inter.className}>{children}</body>
    </html>
  );
}
