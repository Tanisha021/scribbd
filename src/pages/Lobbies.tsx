import React from "react";
import Navbar from "@/components/Navbar";
import LobbyList from "@/components/LobbyList";

const Lobbies = () => {
  return (
    <main className="min-h-screen min-w-screen relative">
      <img
        src={"/background.jpg"}
        className="absolute -z-10 opacity-20 w-screen h-screen object-cover"
        alt="background image"
      ></img>
      <Navbar />
      <LobbyList />
    </main>
  );
};

export default Lobbies;
