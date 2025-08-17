import Footer from "@/components/Footer";
import "./app.css";
import "./globals.css";
import Header from "@/components/Header";

export const metadata = {
  title: "Inkbit - A Blog website",
  description: "A modern blog website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=" dark:text-dark">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
