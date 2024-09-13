import Playground from "@/components/Playground";
import { useEffect } from "react";
import { useSocketIoStore } from "@/store/store";

const Play = () => {
  const { socket, connectSocket, joinRandomRoom, leaveRoom } = useSocketIoStore(
    (state) => state
  );

  useEffect(() => { 
    async function connect(url: string) {
      if (!socket?.connected) {
        await connectSocket(url);
        joinRandomRoom();
      }
    }
    connect("http://localhost:3000");
    window.addEventListener("beforeunload", leaveRoom);
    return () => {
      window.removeEventListener("beforeunload", leaveRoom);
      leaveRoom();
    };
  }, []);

  return (
    <main className="min-h-screen min-w-screen relative">
      <img
        src={"/background.jpg"}
        className="absolute -z-10 opacity-20 w-screen h-screen object-cover"
        alt="background image"
      ></img>
      <Playground />
    </main>
  );
};

export default Play;
