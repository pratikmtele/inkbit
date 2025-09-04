import Header from "@/components/Header";
import "../(main)/globals.css"
import "../(main)/app.css";

export const metadata = {
  title: "Inkbit - A Blog website",
  description: "A modern blog website",
};

export default function WritePageRootLayout({ children }) {
  return (
    <html lang="en">
      <body className=" dark:text-dark font-primary">
        <Header />
        {children}
      </body>
    </html>
  );
}
