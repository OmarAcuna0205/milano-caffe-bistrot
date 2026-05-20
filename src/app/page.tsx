import Hero from "@/components/sections/hero";
import Menu from "@/components/sections/menu";
import New from "@/components/sections/new";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Menu />
      <New></New>
    </div>
  )
}