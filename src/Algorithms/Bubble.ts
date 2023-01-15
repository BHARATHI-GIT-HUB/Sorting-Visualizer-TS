import { AlgoCon } from "../component/utilis/AlgoContent";
import { swap } from "./helper";

export const getBubbleSort = (items: number[]) => {
  const bubbleSorted = [...items];
  const bubbleSortAnims = [[1]];
  for (let i = 0; i < bubbleSorted.length; i++) {
    for (let j = 0; j < bubbleSorted.length - i - 1; j++) {
      if (bubbleSorted[j] > bubbleSorted[j + 1]) {
        bubbleSortAnims.push([j, j + 1]);
        swap(bubbleSorted, j, j + 1);
      }
    }
  }
  return { bubbleSorted, bubbleSortAnims };
};

export const bubbleSort: AlgoCon = {
  title: "bubbleSort",
  description:
    "<p> bubble is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order.The pass through the list is repeated until the list is sorted.</p> <p> The algorithm, which is a comparison sort, is named for the way smaller or larger elements bubble to the top of the list. Although the algorithm is simple, it is too slow and impractical for most problems </p>",
  worstCase: "O(n<sup>2</sup>)",
  bestCase: "O(n<sup>2</sup>)",
  avgCase: "O(n)",
  worstCaseSpc: "O(1)",
};
