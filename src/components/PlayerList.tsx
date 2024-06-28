import { useGameStore, useUserStore } from "@/store/store";
import { BeanHead } from "beanheads";

const PlayerList = () => {
  const game = useGameStore();
  const user = useUserStore();
  return (
    <div className="h-full">
      <div className=" bg-background border border-foreground rounded-sm h-full overflow-y-auto">
        {/* <h3 className="text-xs font-semibold uppercase text-gray-400 mb-1">
          Chats
        </h3> */}
        <h1 className="w-full dark:bg-slate-900 p-2 dark:text-white text-xl font-semibold border-b border-foreground">
          Users
        </h1>
        <div className="divide-y divide-gray-200 overflow-y-auto px-2">
          {game.players.map((player) => (
            <button
              key={player.socketID}
              className="w-full text-left py-2 focus:outline-none focus-visible:bg-indigo-50"
            >
              <div className="flex items-center">
                {/* <img
                  className="rounded-full items-s tart flex-shrink-0 mr-3 h-12 w-12"
                  src={player.avatar}
                  alt={player.name}
                /> */}
                <BeanHead
                  className="rounded-full items-start flex-shrink-0 mr-3 h-12 w-12"
                  // className="w-48 md:w-64 lg:w-72 flex items-center justify-center"
                  accessory={
                    user.possibleAccessoryValues[player.character.accessory]
                  }
                  // 'none', 'roundGlasses', 'tinyGlasses', 'shades'
                  body={user.possibleGenderValues[player.character.gender]}
                  // 'chest', 'breasts
                  circleColor="blue"
                  clothing={
                    user.possibleClothingValues[player.character.clothing]
                  }
                  // 'naked', 'shirt', 'dressShirt', 'vneck', 'tankTop', 'dress'
                  clothingColor="red"
                  // 'white', 'blue', 'black', 'green', 'red'
                  eyebrows={
                    user.possibleEyebrowValues[player.character.eyebrow]
                  }
                  // 'raised', 'leftLowered', 'serious', 'angry', 'concerned'
                  eyes={user.possibleEyesValues[player.character.eyes]}
                  // 'normal', 'leftTwitch', 'happy', 'content', 'squint', 'simple', 'dizzy', 'wink', 'heart'
                  facialHair="none"
                  // 'none', 'none2', 'none3', 'stubble', 'mediumBeard'
                  graphic="none"
                  // 'none', 'redwood', 'gatsby', 'vue', 'react', 'graphQL'
                  hair={user.possibleHairValues[player.character.hair]}
                  // 'none', 'long', 'bun', 'short', 'pixie', 'balding', 'buzz', 'afro', 'bob'
                  hairColor="black"
                  // 'blonde', 'orange', 'black', 'white', 'brown', 'blue', 'pink'
                  hat="none"
                  // 'none', 'none2', 'none3', 'none4', 'none5', 'beanie', 'turban'
                  hatColor="green"
                  // 'white', 'blue', 'black', 'green', 'red'
                  lashes={false}
                  // true', 'false'
                  lipColor="red"
                  // 'red', 'purple', 'pink', 'turqoise', 'green'
                  mask={false}
                  faceMask={false}
                  mouth={user.possibleMouthValues[player.character.mouth]}
                  // 'grin', 'sad', 'openSmile', 'lips', 'open', 'serious', 'tongue'
                  skinTone={
                    user.possibleSkintoneValues[player.character.skintone]
                  }
                  // 'light', 'yellow', 'brown', 'dark', 'red', 'black'
                />
                <div>
                  <h4 className="text-sm font-semibold text-gray-900">
                    {player.character.name}
                  </h4>
                  <div className="text-[13px]">{player.socketID}</div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlayerList;
