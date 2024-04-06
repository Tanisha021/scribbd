import { create } from "zustand";
import { persist } from "zustand/middleware";

const useApplicationStore = create((set) => ({
  // Application State
  tab: "Character",
  setTab: (tab) => set({ tab }),
}));
const useUserStore = create(
  persist(
    (set, get) => ({
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

export { useUserStore, useApplicationStore };
