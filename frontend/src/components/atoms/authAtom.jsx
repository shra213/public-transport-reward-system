import { atom } from "recoil";

export const authState = atom({
  key: "authState",
  default: {
    iscollab : false
  }, 
});
