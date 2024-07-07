import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Personal Finance Manager",
  description: "Manage your personal finances with ease.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          closeOnClick
          pauseOnFocusLoss
          pauseOnHover
          stacked
        />
        {children}
      </body>
    </html >
  );
}
