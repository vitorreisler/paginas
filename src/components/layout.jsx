import Navbar from "./navbar";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen div-layout">
      <Navbar />
      <div className="flex flex-1 justify-center" >
        <main className="flex-1  max-w-[1200px] flex-wrap  bg-red-100 mx-auto">
         
          <section className="p-15">
          {children}
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
}
