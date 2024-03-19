import { useEffect } from "react";
import {
  AiFillHeart,
  AiOutlineComment,
  AiOutlineHeart,
} from "react-icons/ai";
import { GiRapidshareArrow } from "react-icons/gi";
import { axiosInstance } from "../axios";
import { useAppDispatch, useAppSelector } from "../redux/hook/hook";
import { getAuth, setLoading } from "../redux/slice/authSlice";
import { getImg } from "../getimg";
import moment from "moment";
import { getPosts, setAllPosts } from "../redux/slice/postSlice";

const NewFeed = () => {
  const dispatch = useAppDispatch();

  //   Select Post
  const { user } = useAppSelector(getAuth);
  const { posts } = useAppSelector(getPosts);

  const getPost = async () => {
    try {
      setLoading(true);
      const response = await axiosInstance.get("/post/get-all-post");
      if (response.status === 200) {
        dispatch(setAllPosts(response.data));
        setLoading(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const likePost = async (post_id: string, type: string) => {
    const data = {
      post_id,
      user_id: user._id,
    };

        const newAllPosts = posts.map((post:any)=>{
            if(type === "LIKE") return post._id === post_id ? {...post, like: post.like+1, isLiked: true} : post;
            if(type === "UNLIKE") return post._id === post_id ? {...post, like: post.like-1, isLiked: false} : post;
        })
        dispatch(setAllPosts(newAllPosts))
        await axiosInstance.post("/post/like-unlike", data);
    
  };

  useEffect(() => {
    getPost();
  }, []);
  return (
    <>
      {posts.map((post: any) => (
        <div className="bg-white dark:bg-gray-800 p-5 rounded-lg mt-5">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <img
                src={getImg(post.profile_picture)}
                alt=""
                className="h-10 w-10 object-cover rounded-full"
              />
              <div className="ml-5">
                <h2 className="dark:text-gray-200 text-gray-800">
                  {post.username}
                </h2>
                <p className="text-sm">{moment(post.createdAt).fromNow()}</p>
              </div>
            </div>
          </div>
          <p className="mt-2">{post.description}</p>
          <img
            src={getImg(post.img_path)}
            className="mt-2 rounded-lg b-[25rem] w-full object-cover"
            alt=""
          />
          <div className="flex mt-5 items-center ">
            <div className="flex items-center">
              {post.isLiked ? (
                <AiFillHeart
                  className="cursor-pointer hover:scale-110 transition-all text-lg text-red-500"
                  onClick={() => likePost(post._id, "UNLIKE")}
                />
              ) : (
                <AiOutlineHeart
                  className="cursor-pointer hover:scale-110 transition-all text-lg text-red-500"
                  onClick={() => likePost(post._id, "LIKE")}
                />
              )}
              {post.like}
            </div>
            <AiOutlineComment className="cursor-pointer hover:scale-110 transition-all text-lg ml-2" />
            <GiRapidshareArrow className="cursor-pointer hover:scale-110 transition-all text-lg ml-2" />
          </div>
        </div>
      ))}
    </>
  );
};

export default NewFeed;
