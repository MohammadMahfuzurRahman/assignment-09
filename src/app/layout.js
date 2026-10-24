import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "MediQueue | Find Your Perfect Tutor",
  description:
    "Discover tutors, book learning sessions, and manage your classes with MediQueue.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}