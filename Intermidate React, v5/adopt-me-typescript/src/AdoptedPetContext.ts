import { createContext } from "react";
import { Pet } from "./APIResponsesTypes";

const AdoptedPetContext = createContext<
  [Pet | null, (adoptedPet: Pet) => void]
>([
  {
    id: 1337,
    name: "Fido",
    animal: "dog",
    description: "lorem ipsum",
    breed: "Beagle",
    city: "Seattle",
    images: [],
    state: "WA",
  },
  () => {},
]);

export default AdoptedPetContext;
