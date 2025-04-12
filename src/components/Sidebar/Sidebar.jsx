import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";

const Sidebar = () => {
  const [extended, setExtended] = useState(false);
  const {onSent, prevPromts, setRecentPrompt , newChat} = useContext(Context);

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt)
    await onSent(prompt)
  }

  return (
    <div className="h-screen w-[250px] bg-[#f0f4f9] flex flex-col justify-between p-6">
      <div>
        <img
          onClick={() => setExtended((prev) => !prev)}
          className="mb-6 cursor-pointer w-5 h-5"
          src={assets.menu_icon}
          alt="menu icon"
        />
        <div onClick={()=> newChat()} className="flex items-center gap-2 p-3 bg-[#e6eaf1] rounded-2xl text-sm text-gray-500 cursor-pointer">
          <img className="w-4 h-4" src={assets.plus_icon} alt="plus icon" />
          {extended ? <p>New Chat</p> : null}
        </div>
        {extended ? (
          <div className="mt-8">
            <p className="text-gray-600 mb-4">Recent</p>
            {prevPromts.map((item, index)=>{
                return (
                  <div onClick={()=>loadPrompt(item)} className="flex items-start gap-2 p-3 rounded-2xl text-[#282828] cursor-pointer hover:bg-[#e2e6eb]">
              <img
                className="w-4 h-4"
                src={assets.message_icon}
                alt="message icon"
              />
              <p>{item.slice(0,18)}...</p>
            </div>
                )
            })}
            
          </div>
        ) : null}
      </div>

      <div className="flex flex-col gap-4 text-sm text-gray-700">
        <div className="flex items-center gap-2 cursor-pointer hover:bg-[#e2e6eb] p-2 rounded-lg">
          <img
            className="w-4 h-4"
            src={assets.question_icon}
            alt="question icon"
          />
          {extended ? <p>Help</p> : null}
        </div>
        <div className="flex items-center gap-2 cursor-pointer hover:bg-[#e2e6eb] p-2 rounded-lg">
          <img
            className="w-4 h-4"
            src={assets.history_icon}
            alt="history icon"
          />
          {extended ? <p>Activity</p> : null}
        </div>
        <div className="flex items-center gap-2 cursor-pointer hover:bg-[#e2e6eb] p-2 rounded-lg">
          <img
            className="w-4 h-4"
            src={assets.setting_icon}
            alt="setting icon"
          />
          {extended ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
