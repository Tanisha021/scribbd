import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { useSocketIoStore } from "@/store/store";
import { useEffect } from "react";

const Home = () => {
  // const socket = useSocketIoStore((state) => state.socket);
  // const sendMessage = useSocketIoStore((state) => state.sendMessage);

  const { socket, connectSocket } = useSocketIoStore((state) => state);

  useEffect(() => {
    if (!socket?.connected) {
      connectSocket("http://localhost:3000"); // Replace with your Socket.IO server URL
    }
  }, []);

  return (
    <main className="min-h-screen min-w-screen relative">
      <img
        src={"/background.jpg"}
        className="absolute -z-10 opacity-20 w-screen h-screen object-cover"
        alt="background image"
      ></img>
      <Navbar />
      <Hero />
    </main>
  );
};

export default Home;
