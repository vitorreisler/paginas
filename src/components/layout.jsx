import Navbar from "./navbar";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen div-layout">
      <Navbar />
      <div className="flex flex-1 justify-center">
        <main className="flex-1 max-w-[1200px] flex-wrap mx-auto">
          <section className="py-8 px-5">{children}</section>
        </main>
      </div>
      <Footer />
    </div>
  );
}
