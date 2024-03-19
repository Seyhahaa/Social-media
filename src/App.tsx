import { useEffect } from "react";
import FriendList from "./components/FriendList";
import Header from "./components/Header";
import NewFeed from "./components/NewFeed";
import OnurMind from "./components/OnurMind";
import Profile from "./components/Profile";
import Sponser from "./components/Sponser";
import { useAppDispatch, useAppSelector } from "./redux/hook/hook";
import { getAuth, setLoading, setUser } from "./redux/slice/authSlice";
import Login from "./components/Login";
import axios from "axios";
import { base_url } from "./base_url";

function App() {

  const dispatch =  useAppDispatch()
  const { user, loading } = useAppSelector(getAuth);

  const checkAuth = async () => {
    setLoading(true);
    const token = localStorage.getItem("token");
    if (token) {
      try{
        const response = await axios.get(base_url+"/auth/check-auth", {
          headers: {
            "Authorization": 'Bearer ' + token,
          }
        });
      if (response.status === 200) {
        dispatch(setUser(response.data));
      }
      }catch (e){
        localStorage.removeItem('token');
      }
    }
    setLoading(false);
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return loading ? (
    <h1>Loading...</h1>
  ) : user ? (
    <>
      <Header />

      <div className="bg-gray-200 dark:bg-gray-600 h-[90vh] fixed top-[10vh] left-0 w-full py-5">
        <div className="container mx-auto flex justify-between gap-10">
          <div className="hidden lg:block flex-[0.6]">
            <Profile />
          </div>
          <div className="flex-1 h-[90vh] overflow-auto pb-10">
            <OnurMind />
            <NewFeed />
            
          </div>
          <div className="hidden lg:block flex-[0.6]">
            <Sponser />
            <FriendList />
          </div>
        </div>
      </div>
    </>
  ) : (
    <Login />
  );
}

export default App;
