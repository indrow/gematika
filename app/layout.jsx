import Navbar from "@/components/Navigations/NavBar";
import "../styles/globals.scss";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <Navbar />
        <main className="relative">{children}</main>
      </body>
    </html>
  );
}
