import { Fugaz_One, Open_Sans } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

const fugaz = Fugaz_One({
  variable: "--font-fugaz-one",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Broodl",
  description: "Track your daily mood every day of the year!",
};

export default function RootLayout({ children }) {
  const header = (
    <header className="p-4 sm:p-8 flex items-center justify-between gap-4">
      <Link
        className={"text-base sm:text-lg textGradient " + fugaz.className}
        href="/"
      >
        Broodl
      </Link>
      <div className="flex items-center justify-between">
        PLACEHOLDER CTA || STATE
      </div>
    </header>
  );
  const footer = (
    <footer className="p-4 w-full flex items-center justify-center sm:p-8">
      <Link
        href="https://github.com/Netricc"
        className={
          "text-indigo-500 text-lg max-sm:text-base " + fugaz.className
        }
      >
        Created By Nawar
      </Link>
    </footer>
  );

  return (
    <html lang="en">
      <body
        className={` w-full text-slate-800 max-w-[1000px] mx-auto text-sm sm:text-base max-lg:px-[40px] max-md:px-[30px] max-sm:px-[20px]   min-h-screen flex flex-col  ${openSans.className} antialiased `}
      >
        {header}
        {children}
        {footer}
      </body>
    </html>
  );
}
