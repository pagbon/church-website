import Plyr from "plyr";

const initPlayer = () => {
  const players = Array.from(document.querySelectorAll(".player")).map(
    (element) => {
      return new Plyr(element);
    }
  );
};

export default initPlayer;
