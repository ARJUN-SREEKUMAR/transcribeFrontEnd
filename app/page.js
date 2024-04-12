import Image from "next/image";
import Nav from "./Components/Nav";
import Hero from "./Components/Hero";
import Trial from "./Components/Trial";
import Contact from "./Components/Contact";



export default function Home() {


 
  
  return (
    <main className="flex h-full   flex-col text-white   items-center  p-4  ">
      <Nav />
      <div className=" flex flex-col relative md:top-44  top-32 items-center ">
        <Hero />
        <Trial />
        <Contact />
      </div>
      
    </main>
  );
}
