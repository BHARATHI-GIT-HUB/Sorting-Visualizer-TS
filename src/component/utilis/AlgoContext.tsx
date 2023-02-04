import React, { createContext } from "react";
import { useState, useContext, useEffect } from "react";
import { getBubbleSort } from "../../Algorithms/Bubble";
import { getHeapSortAnims } from "../../Algorithms/HeapSort";
import { getInsertionSortAnims } from "../../Algorithms/InsertionSort";
import { getMergeSortAnims } from "../../Algorithms/MergeSort";
import { getQuickSortAnims } from "../../Algorithms/QuickSort";
import { getSelectionSort } from "../../Algorithms/Selection";
import { AnimateDivs, animateMerge } from "./Animation";

const initVals: Settings = {
  algoType: "Select Algorithm",
  arrLen: 50,
  delay: 5,
  isReset: false,
};

export type Algo =
  | "Select Algorithm"
  | "bubble sort"
  | "insertion sort"
  | "selection sort"
  | "merge sort"
  | "heap sort"
  | "quick sort";

export interface Settings {
  algoType: Algo;
  arrLen: number;
  delay: number;
  isReset: boolean;
}

type SettingsContext = {
  settings: Settings;
  setSettings?: React.Dispatch<React.SetStateAction<Settings>>;
  sort: (algoType: Algo) => void;
};

type Items = {
  items: number[];
  setItems?: React.Dispatch<React.SetStateAction<number[]>>;
};

export const Context = createContext<SettingsContext>({
  settings: initVals,
  sort: () => {},
});

export const ItemContext = createContext<Items>({ items: [] });

interface Props {
  children: React.ReactNode;
}

const AlgoContext: React.FC<Props> = ({ children }) => {
  const [settings, setSettings] = useState<Settings>(initVals);
  const [items, setItems] = useState<number[]>([]);

  useEffect(() => {
    const randdomNumbers = [];
    for (let i = 0; i < settings.arrLen; i++) {
      randdomNumbers.push(Math.floor(Math.random() * 540));
    }
    setItems(randdomNumbers);
  }, [settings.arrLen, settings.isReset]);

  const sort = (algoType: Algo) => {
    switch (algoType) {
      case "bubble sort":
        const { bubbleSorted, bubbleSortAnims } = getBubbleSort(items);
        AnimateDivs({
          sortedArr: bubbleSorted,
          swapIndex: bubbleSortAnims,
          settings,
          setItems,
        });
        break;

      case "insertion sort":
        const { insertionSorted, insertionAnims } =
          getInsertionSortAnims(items);
        AnimateDivs({
          sortedArr: insertionSorted,
          swapIndex: insertionAnims,
          settings,
          setItems,
        });
        break;

      case "merge sort":
        const aux: number[] = [];
        const arr: number[][] = [];
        const nums = [...items];
        getMergeSortAnims(nums, aux, arr, 0, items.length - 1);
        animateMerge({ sortedArr: nums, swapIndex: arr, setItems, settings });
        break;

      case "heap sort":
        const { heapSorted, heapSortAnims } = getHeapSortAnims(items);
        AnimateDivs({
          sortedArr: heapSorted,
          swapIndex: heapSortAnims,
          setItems,
          settings,
        });
        break;

      case "quick sort":
        const { quickSorted, quickSortAnims } = getQuickSortAnims(items);
        AnimateDivs({
          sortedArr: quickSorted,
          swapIndex: quickSortAnims,
          setItems,
          settings,
        });
        break;

      case "selection sort":
        const { selectionSorted, selectionSortAnims } = getSelectionSort(items);

        AnimateDivs({
          sortedArr: selectionSorted,
          swapIndex: selectionSortAnims,
          settings,
          setItems,
        });
        break;

      default:
        break;
    }
  };

  return (
    <ItemContext.Provider value={{ items, setItems }}>
      <Context.Provider value={{ sort, settings, setSettings }}>
        {children}
      </Context.Provider>
    </ItemContext.Provider>
  );
};

export default AlgoContext;
