import { base_url } from "../base_url";
import { useAppSelector } from "../redux/hook/hook";
import { getAuth } from "../redux/slice/authSlice";
import { axiosInstance } from "../axios";
import { AiOutlineUserAdd } from "react-icons/ai";
import { HiUserRemove } from "react-icons/hi";
import { useEffect, useState } from "react";

interface Friend {
  username: string,
  _id: string,
  profile_picture: string
}

function FriendList() {
  const { user} = useAppSelector(getAuth);

  const [friends, setFriend] = useState([]);
  const [notfriends, setNotFriend] = useState([]);
  const [loading, setLoading] = useState(false);

  const getAllFriendOrUn = async () =>{
    try{
      setLoading(true);
    const response = await axiosInstance.get('/friend/get-all-not-friend/'+ user._id);
    if(response.status === 200){
      setFriend(response.data.friends);
      setNotFriend(response.data.not_Friend);
      setLoading(false);
    }
    }catch (err){
      console.log(err);
    }
  }

  useEffect(()=>{
    getAllFriendOrUn();
  },[])

  const addUnfriend = async (current_user_id: string, friend_id: string, type:string) =>{

    const data= {
      current_user_id,
      friend_id
    }
    if(type === "UN"){
      const friend = friends.filter((single:any) => single._id === friend_id)
      setFriend(friends.filter((single:any) => single._id!== friend_id))
      setNotFriend(notfriends.concat(friend))
    }
    else{
      const friend = notfriends.filter((single:any) => single._id === friend_id)
      setNotFriend(notfriends.filter((single:any) => single._id!== friend_id))
      setFriend(friends.concat(friend))
  }
    try{
     await axiosInstance.post("/friend/add-un-friend", data)
    
      
    }catch(e){}
  }

  return (
    loading ? <h1>Loading...</h1> : (
      <div className="bg-white dark:bg-gray-800 p-5 rounded-lg mt-5">
      <h2>Friends List</h2>
      {
        friends.map((friend: Friend, index: number)=> (
          <div className="mt-2 " key={index} >
        <div className="flex items-center cursor-pointer rounded-lg px-2 py-1 justify-between">
          <div className="flex items-center">
          <div className="relative">
            <img src={base_url+ "/" + friend.profile_picture} className="h-10 w-10 object-cover rounded-full" />
            <div className="bg-green-500 h-3 w-3 absolute bottom-0 rounded-full right-0"></div>
          </div>
          <div className="ml-5">
            <p className="dark:text-gray-200 text-gray-800 font-bold">{friend.username}</p>
            <p className="text-sm"> 10 mutual friends</p>
          </div>
          </div>
            <HiUserRemove className="text-3xl text-cyan-800 bg-cyan-200 p-2 rounded-full cursor-pointer" 
            onClick={()=> addUnfriend(user._id,friend._id,"UN")} />
        </div>
      </div>
        )) }

    <h2 className="mt-5">Find more friends</h2>
      {
        notfriends.map((friend: Friend, index: number)=> (
          <div className="mt-2 " key={index} >
        <div className="flex items-center cursor-pointer rounded-lg px-2 py-1 justify-between">
          <div className="flex items-center">
          <div className="relative">
            <img src={base_url+ "/" + friend.profile_picture} className="h-10 w-10 object-cover rounded-full" />
            <div className="bg-green-500 h-3 w-3 absolute bottom-0 rounded-full right-0"></div>
          </div>
          <div className="ml-5">
            <p className="dark:text-gray-200 text-gray-800 font-bold">{friend.username}</p>
            <p className="text-sm"> 10 mutual friends</p>
          </div>
          </div>
            <AiOutlineUserAdd className="text-3xl text-cyan-800 bg-cyan-200 p-2 rounded-full cursor-pointer"
            onClick={()=> addUnfriend(user._id,friend._id,"Friend")} />
        </div>
      </div>
        )) }
    </div>
    )
  );
}

export default FriendList;
