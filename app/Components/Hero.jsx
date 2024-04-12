function Hero() {
  return (
    <div className="flex flex-col items-center justify-center md:gap-11 gap-5">
      <div className="md:text-6xl text-4xl relative    ">Why Transcribe? </div>
      <div className="lg:text-4xl md:text-3xl text-xl relative md:w-[80%]      ">
       Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam quis laboriosam praesentium aliquid dolores neque nesciunt molestias nulla corporis possimus, voluptatum, saepe sint fugiat quas fuga? Quibusdam rerum molestiae veritatis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, doloribus delectus reiciendis hic eveniet necessitatibus sequi doloremque atque corrupti neque vitae unde quasi! Voluptate eaque quam architecto maxime ducimus autem.
      </div>
      <div className="flex justify-center  md:gap-9  gap-3 relative   ">
        <button className="md:text-4xl text-2xl bg-[#219ccd] border-4 border-[#ffffff30]  shadow-2xl  shadow-sky-700 rounded-md  md:w-[17rem] w-[11rem] h-[4rem] md:h-[5rem] hover:bg-[#43caff] hover:scale-105   ">
          <a href="#contact">Contact Sales </a>
        </button>
        <button className="md:text-4xl text-2xl border border-[#ffffff30] md:w-[17rem]  w-[11rem] md:h-[5rem] h-[4rem] rounded-md  hover:shadow-2xl hover:shadow-sky-700 shadow-xl shadow-sky-700 hover:scale-105  ">
          <a href="#trial">Live Demo </a>
        </button>
      </div>
    </div>
  );
}

export default Hero;
