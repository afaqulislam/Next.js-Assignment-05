import "./globals.css"; // Import global styles
import Header from "./Components/Header"; // Import the Header component
import Footer from "./Components/Footer"; // Import the Footer component

export const metadata = {
  title: "Afaq Portfolio",
  description: "My personal portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="scroll-smooth" lang="en">
      <body className="bg-gray-900 text-gray-900">
        {/* Header Navbar */}
        <Header />

        {/* Main content section, with padding to account for fixed header */}
        <main className="pt-16 container mx-auto min-h-screen">{children}</main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
