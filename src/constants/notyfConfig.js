import { Notyf } from "notyf";

export const notyfInstance = new Notyf({
  position: {
    x: "center",
    y: "top",
  },
  duration: 3000,
  dismissible: true,
});
