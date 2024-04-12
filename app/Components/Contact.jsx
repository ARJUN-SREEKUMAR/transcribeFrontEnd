
import { FaXTwitter } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";


const Contact = () => {
  return (
    <><div className=" mt-4  relative top-28 flex justify-center  flex-col items-center gap-5  " id="contact">

      <div className="    flex gap-9  md:w-[80%] w-[85%]  flex-col md:flex-row      max-h-[40rem]  ">
        <div className="left   relative   md:w-[43%] w-[95%] bg-[#58696c09]  border-sky-300   border-2  shadow-2xl rounded-md  shadow-sky-800  p-2   ">
       

            <div className=" info  flex flex-col gap-3 ">
              <div className=" text-2xl lg:text-3xl   relative left-9 ">Contact Information</div>
              <div className=" text-lg w-[85%]   relative left-9 font-thin">
              Feel free to contact us for all your audio transcription needs! We provide top-notch transcription services with a focus on accuracy and quality. Whether you have interviews, meetings, or any other audio content, our team is here to deliver the best results. Contact us today for reliable and professional transcription services!


              </div>
            </div>
            <div className="address  relative left-9 top-4   font-thin ">
              <div> Transcribe </div>
              <div> info@Transcribe.com</div>
              <div> (+91) 949-711-0508</div>
            </div>

            <div className="icons flex relative   left-9  gap-5 text-2xl  bottom-2 mt-9">
              <span><FaXTwitter/></span>
              <span><FaSquareFacebook/></span>
              <span><FaWhatsapp/></span>
             
       

          </div>
        </div>

        <div className="right flex flex-col gap-3    md:w-[60%]       w-[95%]    ">
          <div className=" text-2xl">Have a Question?</div>
          <div className="w-[90%] h-[1px] bg-sky-300 shadow-2xl rounded-md  shadow-sky-800 "></div>
          <div>
            <span className=" text-primary text-xl">Business Hours:</span> Mon - Fri: <span className=" font-thin text-sm">08.00 AM To 09.00 PM</span> Sat: 09.00 AM To
            06.00 PM
          </div>
          <div className=" flex flex-col gap-3 w-[90%] ">
            <div className="flex  w-[100%]  justify-around ">
              <input
                type="text"
                className=" bg-transparent  border-sky-300   border-2  shadow-2xl rounded-md  shadow-sky-800 w-[35%]  md:h-9 pl-4 "
                 placeholder="Your Name"  />
              <input
                type="text"
                className=" bg-transparent   border-sky-300   border-2  shadow-2xl rounded-md  shadow-sky-800 w-[35%]  md:h-9  pl-4 "    placeholder="Email" />
            </div>
            <div className="flex  w-[100%]  justify-around ">
              <input
                type="text"   placeholder="Query"
                className=" bg-transparent   border-sky-300   border-2  shadow-2xl rounded-md  shadow-sky-800   w-[35%] md:h-9 pl-4   "  />
              <input
                type="text"
                className=" bg-transparent   border-sky-300   border-2  shadow-2xl rounded-md  shadow-sky-800 w-[35%] md:h-9 pl-4  "  placeholder="Phone" />
            </div>
           
            <textarea
              className=" bg-transparent   border-sky-300   border-2  shadow-2xl rounded-md  shadow-sky-800 self-center w-[85%] pl-4  md:h-24" placeholder="Message" />
          </div>
          <button className=" bg-[#219ccd] border-4  border-sky-400  shadow-2xl text-xl  shadow-sky-700 rounded-md   text-white w-[20%] h-9   ">Send</button>
        </div>
      </div>
     
    </div></>
  );
};

export default Contact;
