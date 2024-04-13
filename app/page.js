import Image from "next/image";
import Nav from "./Components/Nav";
import Hero from "./Components/Hero";
import Trial from "./Components/Trial";
import Contact from "./Components/Contact";

export default function Home() {
  return (
    <main className="flex h-full   flex-col items-center   p-4  text-white  ">
      <Nav />
      <div className=" relative top-32 flex flex-col  justify-center items-center md:top-44 gap-10 ">
        <Hero />
        <div className="w-[90%]  shadow-2xl rounded-md    text-center md:text-4xl text-2xl relative top-16">
        Try transcribe by uploading an audiofile less than 2 minitues
        </div>
        <Trial />
        <Contact />
      </div>
    </main>
  );
}
