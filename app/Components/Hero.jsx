function Hero() {
  return (
    <div className="flex flex-col items-center justify-center gap-5 md:gap-11">
      <div className="relative text-4xl md:text-6xl    ">Why Transcribe? </div>
      <div className="relative text-xl md:w-[80%] md:text-3xl lg:text-4xl      ">
      Transcribe is your go-to audio-to-text transcriber for a seamless transcription experience. Our tool supports multiple languages, allowing you to transcribe audio into text with ease. With Transcribe, you can view the text alongside timestamps for accurate referencing. Additionally, you have the flexibility to edit the transcription as needed, ensuring that your transcripts are tailored to your requirements.


      </div>
      <div className="relative flex  justify-center  gap-3 md:gap-9   ">
        <button className="h-[4rem] w-[11rem] rounded-md border-4  border-[#ffffff30]  bg-[#219ccd] text-2xl  shadow-2xl  shadow-sky-700 transition-all  duration-200 hover:scale-105 hover:bg-[#43caff] md:h-[5rem] md:w-[17rem] md:text-4xl   ">
          <a href="#contact">Contact Sales </a>
        </button>
        <button className="h-[4rem] w-[11rem] rounded-md border border-[#ffffff30]  text-2xl shadow-xl shadow-sky-700 transition-all  duration-200 hover:scale-105 hover:shadow-2xl hover:shadow-sky-700 md:h-[5rem]  md:w-[17rem] md:text-4xl  ">
          <a href="#trial">Live Demo </a>
        </button>
      </div>
    </div>
  );
}

export default Hero;
