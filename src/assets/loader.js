import snake from "url:./images/snake.png";
import bomberFront from "url:./images/Bomberman/Front/*.png";
import bomberBack from "url:./images/Bomberman/Back/*.png";
import bomberRight from "url:./images/Bomberman/Right/*.png";
import bomberLeft from "url:./images/Bomberman/Left/*.png";

export const bomberFrames = {
    front: Object.values(bomberFront),
    back: Object.values(bomberBack),
    right: Object.values(bomberRight),
    left: Object.values(bomberLeft),
};
