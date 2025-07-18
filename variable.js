import { TITLE,SUBTITLE } from "./js/constants.js";


document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("constant-title").innerText = TITLE;
  document.getElementById("constant-subtitle").innerHTML = SUBTITLE;
});