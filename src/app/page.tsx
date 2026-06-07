import Hero from "@/components/sections/hero";
import Menu from "@/components/sections/menu";
import Featured from "@/components/sections/featured";
import About from "@/components/sections/about";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Menu />
      <Featured />
      <About />
    </div>
  )
}