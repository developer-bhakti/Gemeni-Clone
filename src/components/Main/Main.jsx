import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  return (
    <div className="h-screen w-full flex flex-col">
      <div className="flex items-center justify-between text-2xl px-6 py-4 text-[#585858]">
        <p>Gemini</p>
        <img
          className="w-10 h-10 rounded-full"
          src={assets.user_icon}
          alt="user icon"
        />
      </div>

      <div className="flex-1 flex flex-col justify-end">
        <div className="max-w-[900px] w-full mx-auto text-center px-4">
          <div className="mb-12 text-[#c4c7c5] text-[50px] font-medium leading-tight">
            <p>
              <span className="text-black">Hello, Dev.</span>
            </p>
            <p>How Can I help you today?</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex justify-between items-center p-4 bg-[#f0f4f9] rounded-2xl cursor-pointer hover:bg-[#e8edf3]">
              <p className="text-sm text-left">
                Suggest beautiful places to see on an upcoming road trip
              </p>
              <img
                className="w-5 h-5"
                src={assets.compass_icon}
                alt="compass icon"
              />
            </div>

            <div className="flex justify-between items-center p-4 bg-[#f0f4f9] rounded-2xl cursor-pointer hover:bg-[#e8edf3]">
              <p className="text-sm text-left">
                Brief Summarize this concept: urban planning
              </p>
              <img className="w-5 h-5" src={assets.bulb_icon} alt="bulb icon" />
            </div>

            <div className="flex justify-between items-center p-4 bg-[#f0f4f9] rounded-2xl cursor-pointer hover:bg-[#e8edf3]">
              <p className="text-sm text-left">
                Brainstorm team bonding activities for our work retreat
              </p>
              <img
                className="w-5 h-5"
                src={assets.message_icon}
                alt="message icon"
              />
            </div>

            <div className="flex justify-between items-center p-4 bg-[#f0f4f9] rounded-2xl cursor-pointer hover:bg-[#e8edf3]">
              <p className="text-sm text-left">
                Improve the readability of the following code
              </p>
              <img className="w-5 h-5" src={assets.code_icon} alt="code icon" />
            </div>
          </div>
        </div>

        <div className="w-full max-w-[900px] mx-auto px-4 mt-10 mb-6">
          <div className="flex items-center justify-between gap-4 bg-[#f0f4f9] px-6 py-3 rounded-full">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              className="flex-1 bg-transparent border-none outline-none text-[16px]"
              type="text"
              placeholder="Enter a prompt here"
            />
            <div className="flex items-center gap-4">
              <img
                className="w-6 h-6 cursor-pointer"
                src={assets.gallery_icon}
                alt="gallery icon"
              />
              <img
                className="w-6 h-6 cursor-pointer"
                src={assets.mic_icon}
                alt="mic icon"
              />
              <img
                onClick={() => onSent()}
                className="w-6 h-6 cursor-pointer"
                src={assets.send_icon}
                alt="send icon"
              />
            </div>
          </div>
          <p className="text-center text-xs text-gray-500 mt-3">
            Gemini may display inaccurate info, including about people, so
            double-check its responses.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
