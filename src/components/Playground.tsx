import Navbar from "./Navbar";
import PlayerList from "./PlayerList";
import ChatList from "./ChatList";
import DrawArea from "./DrawArea";

const Playground = () => {
  return (
    <div className="h-screen flex flex-col overflow-y-auto">
      {/* <div className="h-12 w-full border-b">psajdfp</div> */}
      <Navbar />
      <div className="h-full box-border p-2 grid grid-cols-5 grid-rows-3 gap-2">
        <div className="md:flex flex-col h-full col-span-2 md:col-span-1 row-start-3  sm:row-start-1 row-end-3 md:row-span-3 overflow-hidden">
          <PlayerList />
        </div>
        <div className="col-span-5 sm:col-span-3 gap-2 flex flex-col h-full">
          <DrawArea />
        </div>
        <ChatList />
      </div>
    </div>
  );
};

export default Playground;
