import React from "react";
import G1 from "../assets/G1.jpg";
import { BsFillCameraVideoFill, BsFillImageFill, BsSearch } from "react-icons/bs";
import { MdAttachFile } from "react-icons/md";

type Props = {};

const OnurMind = (props: Props) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-5 rounded-lg">
      <div className="flex items-center">
        <img src={G1} alt="" className="h-10 w-10 rounded-full object-cover" />
        <input
          type="text"
          placeholder="What's on your mind?"
          className="bg-gray-200 ml-5 rounded-full px-4 py-1 w-full text-sm "
        />
      </div>
      <hr className="my-5" />
      <div className="flex justify-between">
        <div className="flex items-center cursor-pointer hover:bg-gray-200 rounded-lg px-2 transition-all">
            <BsFillImageFill />
            <p className="ml-2">Image</p>
        </div>
        <div className="flex items-center cursor-pointer hover:bg-gray-200 rounded-lg px-2 transition-all">
            <BsFillCameraVideoFill />
            <p className="ml-2">Image</p>
        </div>
        <div className="flex items-center cursor-pointer hover:bg-gray-200 rounded-lg px-2 transition-all">
            <MdAttachFile />
            <p className="ml-2">Image</p>
        </div>
        <button>Post</button>
      </div>
    </div>
  );
};

export default OnurMind;
