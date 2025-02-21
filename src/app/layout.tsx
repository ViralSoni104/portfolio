import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider as ThemeProviders } from "next-themes";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";

const outfit = Outfit({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Viral Soni - Portfolio",
  description: "Full-Stack Developer | AI Enthusiast | Graphic Designer | Turning code into intelligent, scalable, and visually stunning solutions.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={outfit.className}
      >
        <ThemeProviders
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
        {children}
        <FloatingNav navItems={navItems} />
        </ThemeProviders>
      </body>
    </html>
  );
}
