import "./styles/style.css";
import { createExperience } from "./experience";

createExperience(document.body).then(({ startExperience }) => {
  startExperience();
});
