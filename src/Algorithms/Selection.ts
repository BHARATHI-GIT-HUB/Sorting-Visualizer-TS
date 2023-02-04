import React from "react";
import { AlgoCon } from "../component/utilis/AlgoContent";
import { swap } from "./helper";

export const getSelectionSort = (items: number[]) => {
  const selectionSorted = [...items];
  const selectionSortAnims = [[1]];
  let currMin;
  for (let i = 0; i < selectionSorted.length; i++) {
    currMin = i;
    for (let j = i + 1; j < selectionSorted.length; j++) {
      if (selectionSorted[j] < selectionSorted[currMin]) {
        currMin = j;
      }
    }
    selectionSortAnims.push([i, currMin]);
    swap(selectionSorted, i, currMin);
  }

  return { selectionSorted, selectionSortAnims };
};

export const bubbleSort: AlgoCon = {
  title: "bubbleSort",
  description:
    "<p>Selection Sort help to sort the algorithm where given array of elements are divide into two part. <p> sorted and unsorted  the minimum element from unsorted part are swapped with element in sorted part</p></P>",
  worstCase: "O(n<sup>2</sup>)",
  bestCase: "O(n<sup>2</sup>)",
  avgCase: "O(n)",
  worstCaseSpc: "O(1)",
};
