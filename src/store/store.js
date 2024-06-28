import { create } from "zustand";
import { persist } from "zustand/middleware";
import io from "socket.io-client";

const useApplicationStore = create((set) => ({
  // Application State
  tab: "Character",
  setTab: (tab) => set({ tab }),
}));

const useUserStore = create(
  persist(
    (set, get) => ({
      getUser: () => {
        const data = get();
        const {
          name,
          gender,
          clothing,
          eyebrow,
          eyes,
          hair,
          mouth,
          skintone,
          accessory,
        } = data;
        return {
          name,
          gender,
          clothing,
          eyebrow,
          eyes,
          hair,
          mouth,
          skintone,
          accessory,
        };
      },

      // User Names and Functions
      name: "",
      setName: (name) => set({ name }),
      // Avatar Gender
      gender: 1,
      possibleGenderValues: ["breasts", "chest"],

      // Avatar clothing
      clothing: 0,
      possibleClothingValues: [
        "naked",
        "shirt",
        "dressShirt",
        "vneck",
        "tankTop",
        "dress",
      ],

      // Avatar eyebrow
      eyebrow: 0,
      possibleEyebrowValues: [
        "raised",
        "leftLowered",
        "serious",
        "angry",
        "concerned",
      ],

      // Avatar eyes
      eyes: 0,
      possibleEyesValues: [
        "normal",
        "leftTwitch",
        "happy",
        "content",
        "squint",
        "simple",
        "dizzy",
        "wink",
        "heart",
      ],

      // Avatar hair
      hair: 0,
      possibleHairValues: [
        "none",
        "long",
        "bun",
        "short",
        "pixie",
        "balding",
        "buzz",
        "afro",
        "bob",
      ],

      // Avatar mouth
      mouth: 0,
      possibleMouthValues: [
        "grin",
        "sad",
        "openSmile",
        "lips",
        "open",
        "serious",
        "tongue",
      ],

      // Avatar skintone
      skintone: 0,
      possibleSkintoneValues: [
        "light",
        "yellow",
        "brown",
        "dark",
        "red",
        "black",
      ],

      // Avatar accessory
      accessory: 0,
      possibleAccessoryValues: [
        "none",
        "roundGlasses",
        "tinyGlasses",
        "shades",
      ],

      nextValue: (property, possibleValues) => {
        set((state) => {
          return {
            ...state,
            [property]: (state[property] + 1) % state[possibleValues].length,
          };
        });
      },

      randomize: () => {
        set((state) => {
          const properties = [
            "gender",
            "clothing",
            "eyebrow",
            "eyes",
            "hair",
            "mouth",
            "skintone",
            "accessory",
          ];
          const newState = { ...state };
          properties.forEach((property) => {
            const possibleValues =
              state[
                `possible${property.charAt(0).toUpperCase() + property.slice(1)}Values`
              ];
            newState[property] = Math.floor(
              Math.random() * possibleValues.length
            );
          });
          return newState;
        });
      },
    }),
    { name: "userStore" }
  )
);

const useGameStore = create((set, get) => ({
  drawingData: null,
  setDrawingdata: (data) => set({ drawingData: data }),
  // User Names and Functions
  canvasColor: "#ffffff",
  setCanvasColor: (color) => set({ canvasColor: color }),

  strokeWidth: 5,
  eraserWidth: 5,
  setPointerWidth: (width) => set({ strokeWidth: width, eraserWidth: width }),

  strokeColor: "#000000",
  setStrokeColor: (color) => set({ strokeColor: color }),

  gameChats: [],
  addChat: (chat) =>
    set((state) => ({ gameChats: [...state.gameChats, chat] })),
  clearAllChats: () => set({ gameChats: [] }),

  players: [],
  setPlayers: (players) => set({ players }),
  addPlayer: (player) =>
    set((state) => ({ players: [...state.players, player] })),
  removePlayer: (player) =>
    set((state) => ({
      players: state.players.filter((p) => p.id !== player.id),
    })),
  clearPlayers: () => set({ players: [] }),
}));

const useSocketIoStore = create((set, get) => ({
  socket: null,
  connectSocket: (url) => {
    return new Promise((resolve, reject) => {
      let { socket } = get();
      if (!socket) {
        socket = io(url);

        socket.on("connect", () => {
          console.log("Socket.IO connected", socket.id);
          set({ socket });
          resolve(socket);
        });

        socket.on("disconnect", () => {
          console.log("Socket.IO disconnected");
          set({ socket: null });
        });

        socket.on("error", (error) => {
          console.error("Socket.IO error:", error);
          reject(error);
        });

        socket.on("message", (data) => {
          const { name, message } = data;
          const game = useGameStore.getState();
          game.addChat({ username: name, message });
        });

        socket.on("draw", (data) => {
          const game = useGameStore.getState();
          // set({ drawingData: data });
          console.log("Drawing data", data);
          game.setDrawingdata(data);
        });

        socket.on("usersUpdated", (users) => {
          console.log(users);
          const game = useGameStore.getState();
          game.setPlayers(users);
        });
      } else {
        resolve(socket);
      }
    });
  },
  sendMessage: (message) => {
    const { socket } = get();
    const { name } = useUserStore.getState();
    const game = useGameStore.getState();
    if (socket) {
      socket.emit("message", { name, message });
    }
    game.addChat({ username: name, message });
  },
  joinRandomRoom: () => {
    const { socket } = get();
    if (socket) {
      socket.emit("join", useUserStore.getState().getUser());
    }
  },
  sendDraw: (data) => {
    const { socket } = get();
    if (socket) {
      socket.emit("draw", data);
    }
  },
  leaveRoom: () => {
    const { socket } = get();
    if (socket) {
      console.log("Leaving room");
      socket.emit("leave");
    }
  },
}));

export { useUserStore, useApplicationStore, useGameStore, useSocketIoStore };
