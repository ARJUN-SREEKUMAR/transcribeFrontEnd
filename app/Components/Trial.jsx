"use client";
// import { data } from "autoprefixer";
import { useEffect, useRef, useState } from "react";
import { IoCloudUpload } from "react-icons/io5";

export default function Trial() {
  const [Uploaded, setUploaded] = useState(false);
  const [audioSrc, setAudioSrc] = useState();
  const [audioexceed, setaudioexceed] = useState(false);
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
              },
            );
            const blob = await audioResponse.blob();
            const url = URL.createObjectURL(blob);
            setAudioSrc(url);
            setUploaded(true);
          } catch (error) {
            alert(
              "An error occurred while uploading the file. Please Check the flask server.",
            );
          }
        } else {
          alert(
            "File duration exceeds the limit. Please upload a file that is less than 2.00 minutes.",
          );
          setaudioexceed(true);
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
    <div id="trial"
      className={` relative top-14 flex flex-col-reverse justify-center gap-9  text-2xl md:top-24  md:flex-row md:justify-stretch ${Uploaded ? "border-2  border-sky-300  shadow-sky-800 " : ""}     w-full rounded-md shadow-2xl md:w-[77%]  `}
    >
          {/* {!Uploaded && (
            <span>
              Try transcribe by uploading an audiofile less than 2 minitues
            </span>
          )}
          {audioexceed && (
            <div className=" text-red-800">
              File duration exceeds the limit. Please upload a file that is less
              than 2.5 minutes.
            </div>
          )} */}
      <div
        id="contact"
        className={` relative   gap-2     text-nowrap  ${
          Uploaded
            ? " visible border-2  border-sky-300 md:w-[70%] "
            : " invisible "
        }     overflow-x-hidden overflow-y-scroll p-2  md:h-36 `}
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
        className={`relative top-6   mx-auto  flex flex-col  gap-9 ${
          Uploaded ? "" : " text-4xl "
        }`}
      >
        {!Uploaded && (
          <div className="  " >
            <>
              <label
                htmlFor="audio"
                className="relative flex h-[5rem] w-[20rem] cursor-pointer   items-center justify-center gap-5 rounded-full border-2 border-[#3092dda7]  text-2xl shadow-xl shadow-sky-700 hover:shadow-2xl  hover:shadow-sky-700 md:-left-12 hover:scale-105   transition-all duration-700 "
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
