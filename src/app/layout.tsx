// src/app/layout.tsx
import "@/styles/main.css";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import "@/app/fontawesome";

export const metadata = {
  title: "MyLynk.id",
  description: "Landing page link management",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />
      </Head>
      <body className="bg-white">
        {/* Navbar */}
        <header className="header fixed top-0 left-0 right-0 z-50 shadow bg-[#3d4d6a]" id="header">
          <div className="container mx-auto flex items-center justify-between py-2 px-2">
            <div className="logo flex items-center gap-2">
              <h1 className="text-white text-xl font-bold tracking-wider">MyLynk</h1>
            </div>
            <nav className="navmenu hidden md:flex items-center gap-5">
              <Link href="#hero" className="text-white font-semibold"><span className="hover:text-blue-400">Home</span></Link>
              <Link href="#about" className="text-white font-semibold"><span className="hover:text-blue-400">About</span></Link>
              <Link href="#services" className="text-white font-semibold"><span className="hover:text-blue-400">Services</span></Link>
              <Link href="#pricing" className="text-white font-semibold"><span className="hover:text-blue-400">Pricing</span></Link>
              <Link href="#testimoni" className="text-white font-semibold"><span className="hover:text-blue-400">Testimoni</span></Link>
              <Link href="#faq" className="text-white font-semibold"><span className="hover:text-blue-400">FAQ</span></Link>
            </nav>
            <div className="btn-getstarted">
              <Link href="/login" className="px-4 py-1 rounded-full text-sm font-semibold"><span className="text-white">Sign Up Free</span></Link>
            </div>
          </div>
        </header>

        <main className="pt-0">{children}</main>

        {/* Footer */}
        <footer className="footer bg-[#f5f6f8] text-gray-700 pt-12">
          <div className="container mx-auto px-4 text-center">
            <h4 className="text-lg font-semibold mb-2">Join our newsletter</h4>
            <form className="newsletter-form flex justify-center gap-2 mb-6">
              <input type="email" placeholder="Your email" className="px-4 py-2 rounded-full border" />
              <input type="submit" value="Subscribe" className="bg-blue-500 text-white px-6 py-2 rounded-full cursor-pointer" />
            </form>
            <div className="social-links flex justify-center gap-4 mb-4">
              {["twitter", "facebook", "instagram", "linkedin"].map((platform, i) => (
                <a key={i} href="#" className="hover:text-blue-500">
                  <i className={`bi bi-${platform}`}></i>
                </a>
              ))}
            </div>
            <div className="text-sm text-gray-500">
              © {new Date().getFullYear()} <strong className="font-bold">MyLynk.id</strong>. All Rights Reserved
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
