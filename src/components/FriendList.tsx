import React from "react";
import G1 from "../assets/G1.jpg";

type Props = {};

function FriendList({}: Props) {
  return (
    <div className="bg-white dark:bg-gray-800 p-5 rounded-lg mt-5">
      <h2>Friends List</h2>
      <div className="mt-2">
        <div className="flex items-center cursor-pointer rounded-lg px-2 py-1">
          <div className="relative">
            <img src={G1} className="h-10 w-10 object-cover rounded-full" />
            <div className="bg-green-500 h-3 w-3 absolute bottom-0 rounded-full right-0"></div>
          </div>
          <div className="ml-5">
            <p className="dark:text-gray-200 text-gray-800 font-bold">Seyha</p>
            <p className="text-sm"> 10 mutual friends</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FriendList;
