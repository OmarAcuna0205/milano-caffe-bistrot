import Hero from "@/components/sections/hero";
import Menu from "@/components/sections/menu";
import New from "@/components/sections/new";
import About from "@/components/sections/about";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Menu />
      <New />
      <About />
    </div>
  )
}