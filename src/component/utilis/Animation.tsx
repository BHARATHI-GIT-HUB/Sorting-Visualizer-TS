import { Settings } from "./AlgoContext";
import { playAudio } from "./AnimatioAudio";

interface Animate {
  sortedArr: number[];
  swapIndex: number[][];
  settings: Settings;
  setItems: React.Dispatch<React.SetStateAction<number[]>>;
}

type AnimateFunc = (animationProps: Animate) => void;

export const AnimateDivs: AnimateFunc = ({
  sortedArr,
  swapIndex,
  settings,
  setItems,
}) => {
  swapIndex.forEach(([first, second], idx) => {
    const div = document.getElementById(`${first}`);
    const div2 = document.getElementById(`${second}`);

    if (!div || !div2) return;
    setTimeout(() => {
      div.style.backgroundColor = "#b041f0";
      div2.style.backgroundColor = "#b041f0";
      const divHeight = div.style.height;
      div.style.height = div2.style.height;
      // playAudio(800 + newArr[first] * 200);
      div2.style.height = divHeight;
      // playAudio(800 + newArr[second] * 400);
      setTimeout(() => {
        div.style.backgroundColor = "#525E75";
        div2.style.backgroundColor = "#525E75";

        if (idx === swapIndex.length - 1) {
          setItems(sortedArr);
        }
      }, settings.delay * 2);
    }, settings.delay * idx * 2);
  });
};

export const animateMerge: AnimateFunc = ({
  sortedArr,
  swapIndex,
  settings,
  setItems,
}) => {
  swapIndex.forEach(([newHeight, index], idx) => {
    const div = document.getElementById(`${index}`);
    if (!div) return;
    setTimeout(() => {
      div.style.backgroundColor = "#b041f0";
      div.style.height = `${newHeight / 7}%`;
      // playAudio(200 + sortedswapIndex[newHeight] * 300);
      setTimeout(() => {
        // playAudio(200 + sortedswapIndex[index] * 200);
        div.style.backgroundColor = "#482";
        if (idx === swapIndex.length - 1) {
          setItems(sortedArr);
        }
      }, settings.delay * 2);
    }, settings.delay * idx * 2);
  });
};
