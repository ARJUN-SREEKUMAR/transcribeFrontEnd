"use client";
// import { data } from "autoprefixer";
import { useEffect, useRef, useState } from "react";
import { IoCloudUpload } from "react-icons/io5";

export default function Trial() {
  const [Uploaded, setUploaded] = useState(false);
  const [audioSrc, setAudioSrc] = useState();
  // const [audioexceed, setaudioexceed] = useState(false)
  const [data, setData] = useState([]);
  const textArea = useRef(null);
  const fileInputRef = useRef(null);
  const audioRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const audio = new Audio();
      const formData = new FormData();
      formData.append("file", file);
      audio.src = URL.createObjectURL(file);

      audio.addEventListener("loadedmetadata", async () => {
        //checking if its less than 2 minutes
        if (audio.duration <= 120) {
          try {
            const response = await fetch("http://localhost:8000/api/trial", {
              method: "POST",
              body: formData,
            });
            const resdata = await response.json();
            setData(resdata.data);
            const audioResponse = await fetch(
              `http://localhost:8000/api/get-audio//${resdata.file_path}`,
              {
                method: "GET",
              }
            );
            const blob = await audioResponse.blob();
            const url = URL.createObjectURL(blob);
            setAudioSrc(url);
            setUploaded(true);
          } catch (error) {
            alert(
              "An error occurred while uploading the file. Please try again."
            );
          }
        } else {
          alert(
            "File duration exceeds the limit. Please upload a file that is less than 2.5 minutes."
          );
          setaudioexceed(true)
        }
      });
    }
  };

  useEffect(() => {
    const handleTimeUpdate = () => {
      setCurrentTime(audioRef.current.currentTime);
    };

    if (audioRef.current && audioSrc) {
      audioRef.current.addEventListener("timeupdate", handleTimeUpdate);
    }

    // return () => {
    //   if (audioRef.current && audioSrc) {
    //     audioRef.current.removeEventListener("timeupdate", handleTimeUpdate);
    //   }
    // };
  }, [audioSrc]);

  console.log(currentTime);
  return (

      
     <div className=" flex md:flex-row flex-col-reverse relative md:top-24 top-14  md:justify-stretch justify-center  gap-9 text-2xl  border-sky-300   border-2  shadow-2xl rounded-md  shadow-sky-800 md:w-[77%] w-full  ">
       {/* {!Uploaded && <div>Try transcribe by uploading an audiofile less than 2 minitues 
          </div>}
     {audioexceed && <div className=" text-red-800">File duration exceeds the limit. Please upload a file that is less than 2.5 minutes.</div>} */}
       <div
         id="contact"
         className={` relative   text-nowrap     gap-2  ${
           Uploaded ? " visible border-2  border-sky-300 md:w-[70%] " : " invisible "
         }     overflow-y-scroll overflow-x-hidden p-2  md:h-36 `}
         contentEditable="true"
         ref={textArea}
       >
         {data &&
           data.map((item, index) => (
             <div
               key={index}
               className={`${
                 currentTime >= item.start && currentTime <= item.end
                   ? "bg-[#0c8dd856]"
                   : ""
               }`}
             >
               <span
                 onClick={() => {
                   audioRef.current.currentTime = item.start;
                   setCurrentTime(audioRef.current.currentTime);
                 }}
               >
                 {item.text}
               </span>
             </div>
           ))}
       </div>
       <div
         className={`flex flex-col   mx-auto  relative top-6  gap-9 ${
           Uploaded ? "" : " text-4xl "
         }`}
       >
         {!Uploaded && (
            <div className="  ">
                   <>
             <label
               htmlFor="audio"
               className="cursor-pointer text-2xl justify-center flex gap-5   items-center border-2 border-[#3092dda7] w-[20rem] h-[5rem] rounded-full  hover:shadow-2xl hover:shadow-sky-700 shadow-xl shadow-sky-700  relative md:-left-12  "
             >
               <IoCloudUpload></IoCloudUpload> Select Audio File
             </label>
             <input
               type="file"
               accept="audio/*"
               id="audio"
               name="audio"
               ref={fileInputRef}
               onChange={handleFileChange}
               className="hidden"
             />
           </>
            </div>
         )}
         {Uploaded && (
           <audio controls src={audioSrc} ref={audioRef} className=""></audio>
         )}
       </div>
     </div>
 
  );
}
