import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from '@mui/material/styles';
import theme from '@/config/Theme';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "N&S Distributors | Restaurant Hanglers",
  description: "Enhance your restaurant's ambiance and provide your guests with the convenience they deserve with our stylish and durable restaurant handlers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <ThemeProvider theme={theme}>

      <body className={inter.className}>{children}</body>
      </ThemeProvider>
    </html>
  );
}
