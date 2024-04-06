import { BeanHead } from "beanheads";
import { useUserStore } from "@/store/store";

const Character = () => {
  const user = useUserStore();
  return (
    <BeanHead
      className="w-48 md:w-64 lg:w-72 flex items-center justify-center"
      accessory={user.possibleAccessoryValues[user.accessory]}
      // 'none', 'roundGlasses', 'tinyGlasses', 'shades'
      body={user.possibleGenderValues[user.gender]}
      // 'chest', 'breasts
      circleColor="blue"
      clothing={user.possibleClothingValues[user.clothing]}
      // 'naked', 'shirt', 'dressShirt', 'vneck', 'tankTop', 'dress'
      clothingColor="red"
      // 'white', 'blue', 'black', 'green', 'red'
      eyebrows={user.possibleEyebrowValues[user.eyebrow]}
      // 'raised', 'leftLowered', 'serious', 'angry', 'concerned'
      eyes={user.possibleEyesValues[user.eyes]}
      // 'normal', 'leftTwitch', 'happy', 'content', 'squint', 'simple', 'dizzy', 'wink', 'heart'
      facialHair="none"
      // 'none', 'none2', 'none3', 'stubble', 'mediumBeard'
      graphic="none"
      // 'none', 'redwood', 'gatsby', 'vue', 'react', 'graphQL'
      hair={user.possibleHairValues[user.hair]}
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
      mouth={user.possibleMouthValues[user.mouth]}
      // 'grin', 'sad', 'openSmile', 'lips', 'open', 'serious', 'tongue'
      skinTone={user.possibleSkintoneValues[user.skintone]}
      // 'light', 'yellow', 'brown', 'dark', 'red', 'black'
    />
  );
};

export default Character;
