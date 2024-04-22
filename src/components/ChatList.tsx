import { useGameStore, useSocketIoStore } from "@/store/store";
import { Input } from "./ui/input";
import { useEffect, useRef } from "react";

const ChatList = () => {
  const game = useGameStore();
  const gameSocket = useSocketIoStore();
  const chatBox = useRef<HTMLDivElement>(null);
  const chats = game.gameChats;

  return (
    <div className="col-span-5 overflow-y-auto md:col-span-1 md:col-start-5 row-start-3 md:row-start-1 md:row-end-4 md:flex flex-col h-full bg-background border border-foreground rounded-sm font-cursive ">
      <h1 className="h-11 border-b border-foreground font-sans bg-white dark:bg-slate-900 p-2 dark:text-white text-lg font-semibold">
        Chats
      </h1>
      <div
        className="chat-list text-sm flex flex-col divide-y-2 overflow-y-auto"
        ref={chatBox}
      >
        {chats.map((chat: any, i: any) => (
          <div
            key={i}
            className={`chat-message flex gap-2 py-1 px-2 ${
              i % 2 === 0 ? "even:bg-gray-100" : ""
            }`}
          >
            <p className="text-md break-all">
              <span className="font-semibold text-md truncate w-2/5">
                {chat.username}:
              </span>
              {chat.message}
            </p>
          </div>
        ))}
      </div>
      <Input
        type="text"
        placeholder="Type a message"
        className="w-full sticky bottom-0"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            gameSocket.sendMessage(e.target.value);
            e.target.value = "";
            chatBox.current?.scrollTo(0, chatBox.current.scrollHeight);
          }
        }}
      />
    </div>
  );
};

export default ChatList;
