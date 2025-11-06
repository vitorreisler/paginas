import Navbar from "./navbar";
import Footer from "./footer";
import {Story_Script} from "next/font/google"
import {DM_Serif_Text} from "next/font/google"

const storyScript = Story_Script({
  weight:"400",
  variable:"--story-script-regular",
  fallback:["normal, sans-serif"],
})
const dmSerifText = DM_Serif_Text({
  weight:"400",
  variable:"--dm-serif-text",
  fallback:["normal, serif"],

})

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen div-layout">
      <Navbar />
      <div className="flex flex-1 justify-center">
        <main className="flex-1 max-w-[1200px] flex-wrap mx-auto">
          <section className={`py-8 px-5 ${storyScript.variable} ${dmSerifText.variable} `}>{children}</section>
        </main>
      </div>
      <Footer />
    </div>
  );
}
