import { AlgoCon } from "../component/utilis/AlgoContent";
import { swap } from "./helper";

export const getInsertionSortAnims = (items: number[]) => {
  const newArr = [...items];
  const animeArr = [[1]];

  for (let i = 1; i < newArr.length; i++) {
    let j = i;
    while (j > 0 && newArr[j] < newArr[j - 1]) {
      animeArr.push([j - 1, j]);
      swap(newArr, j, j - 1);
      j--;
    }
  }

  return { newArr, animeArr };
};

export const insertionSort: AlgoCon = {
  title: "Insertion Sort",
  description:
    "<p> Bubble Sort is an iterative sorting algorithm that imitates the movement of bubbles in sparkling water.The bubbles represents the elements of the data structure.</p> <p>   The bigger bubbles reach the top faster than smaller bubbles, and this algorithm works in the same way. It iterates through the data structure and for each cycle compares the current element with the next one,swapping them if they are in the wrong order. </p> <p>It's a simple algorithm to implement, but not much efficient: on average, quadratic sorting algorithms with the same time complexity such as selection insertion perform better.</p>",
  worstCase: "O(n<sup>2</sup>)",
  avgCase: "O(n<sup>2</sup>)",
  bestCase: "O(n)",
  worstCaseSpc: "O(1)",
};
