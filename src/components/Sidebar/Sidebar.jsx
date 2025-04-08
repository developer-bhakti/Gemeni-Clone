import React from "react";
import { assets } from "../../assets/assets";

const Sidebar = () => {
  return (
    <div className="h-[100vh] flex-col justify-between inline-flex bg-[#f0f4f9] p-[25px 15px]">
      <div className="w-[120px]">
        <img
          className="inline-block ml-[10px] cursor-pointer"
          src={assets.menu_icon}
          alt="menu icon"
        />
        <div className="mt-[10px] inline-flex items-center gap-[7px] p-[10px 15px] bg-[#e6eaf1] rounded-4xl text-[14px] text-gray-400 cursor-pointer">
          <img src={assets.plus_icon} alt="plus icon" />
          <p>New Chat</p>
        </div>
        <div className="flex flex-col">
          <p className="mt-[20px] mb-[20px]">Recent</p>
          <div className="flex items-start gap-[10px] p-[10px] pr-20 rounded-4xl text-[#282828] cursor-pointer">
            <img src={assets.message_icon} alt="message icon" />
            <p>What is React ...</p>
          </div>
        </div>
      </div>
      <div>
        <div>
          <img src={assets.question_icon} alt="question icon" />
          <p>Help</p>
        </div>
        <div>
          <img src={assets.history_icon} alt="question icon" />
          <p>Activity</p>
        </div>
        <div>
          <img src={assets.setting_icon} alt="question icon" />
          <p>Settings</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
