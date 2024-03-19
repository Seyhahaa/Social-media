import { useState } from "react";
import {
  BsFillCameraVideoFill,
  BsFillImageFill,
} from "react-icons/bs";
import { MdAttachFile } from "react-icons/md";
import { axiosInstance } from "../axios";
import { useAppDispatch, useAppSelector } from "../redux/hook/hook";
import { getAuth } from "../redux/slice/authSlice";
import { setAddPost } from "../redux/slice/postSlice";
import { getImg } from "../getimg";


const OnurMind = () => {
  const { user } = useAppSelector(getAuth);
  const dispatch = useAppDispatch();

  const [popUpPost, setPopUpPost] = useState(false);
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<File>();

  const addPost = async () => {
    try {
      const data = {
        description,
        image,
        username: user.username,
        profile_picture: user.profile_picture,
        user_id: user._id,
      };
      const response = await axiosInstance.post("/post/add-post", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (response.status === 201) {
        dispatch(setAddPost(response.data))
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      {popUpPost && (
        <div className="w-[20rem] h-[20rem] bg-white fixed top-1/2 left-1/2 rounded-lg -translate-x-1/2 -translate-y-1/2 ">
          <input
            type="text"
            placeholder="Description..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input type="file" onChange={(e) => setImage(e.target.files![0])} />
          <button onClick={addPost}>Post</button>
          <button onClick={()=> setPopUpPost(false)}>Close</button>
        </div>
      )}

      <div className="bg-white dark:bg-gray-800 p-5 rounded-lg">
        <div className="flex items-center">
          <img
            src={getImg(user?.profile_picture)}
            alt=""
            className="h-10 w-10 rounded-full object-cover"
          />
          <input
            type="text"
            placeholder="What's on your mind?"
            className="bg-gray-200 ml-5 rounded-full px-4 py-1 w-full text-sm "
          />
        </div>
        <hr className="my-5" />
        <div className="flex justify-between">
          <div className="flex items-center cursor-pointer hover:bg-gray-200 rounded-lg px-2 transition-all" onClick={()=>setPopUpPost(true)}>
            <BsFillImageFill />
            <p className="ml-2">Image</p>
          </div>
          <div className="flex items-center cursor-pointer hover:bg-gray-200 rounded-lg px-2 transition-all">
            <BsFillCameraVideoFill />
            <p className="ml-2">Image</p>
          </div>
          <div className="flex items-center cursor-pointer hover:bg-gray-200 rounded-lg px-2 transition-all">
            <MdAttachFile />
            <p className="ml-2">File</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default OnurMind;
