import FriendList from "./components/FriendList";
import Header from "./components/Header";
import NewFeed from "./components/NewFeed";
import OnurMind from "./components/OnurMind";
import Profile from "./components/Profile";
import Sponser from "./components/Sponser";

function App() {
  return (
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
              <NewFeed />
              <NewFeed />
            </div>
            <div className="hidden lg:block flex-[0.6]">
            <Sponser/>
            <FriendList />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
