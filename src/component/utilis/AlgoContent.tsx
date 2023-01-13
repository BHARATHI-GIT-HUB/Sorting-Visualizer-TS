import React from "react";
import { useEffect, useState } from "react";
import { bubbleSort } from "../../Algorithms/Bubble";
import { insertionSort } from "../../Algorithms/InsertionSort";
import { heapSort } from "../../Algorithms/HeapSort";
import { quickSort } from "../../Algorithms/QuickSort";
import { mergeSort } from "../../Algorithms/MergeSort";
import { Algo } from "./AlgoContext";

interface Props {
  AlgoType: Algo;
}

const initVals: AlgoCon = {
  title: "Select Algorithm",
  description:
    "You must select an algorithm before you can visualize it's execution on an array of numbers.",
  worstCase: "",
  bestCase: "",
  avgCase: "",
  worstCaseSpc: "",
};

export interface AlgoCon {
  title: string;
  description: string;
  worstCase: string;
  bestCase: string;
  avgCase: string;
  worstCaseSpc: string;
}

const AlgoContent: React.FC<Props> = ({ AlgoType }) => {
  const [AlgoContent, setAlgoContent] = useState<AlgoCon>(initVals);

  useEffect(() => {
    switch (AlgoType) {
      case "bubble sort":
        setAlgoContent(bubbleSort);
        break;

      case "insertion sort":
        setAlgoContent(insertionSort);
        break;

      case "merge sort":
        setAlgoContent(mergeSort);
        break;

      case "heap sort":
        setAlgoContent(heapSort);
        break;

      case "quick sort":
        setAlgoContent(quickSort);
        break;
      default:
        break;
    }
  }, [AlgoType]);

  return (
    <div className="min-w-screen min-h-screen flex justify-between items-start mt-5 bg-black text-white p-10">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-Jura font-bold">Description</h1>
        <p className="text-xl font-Inter font-normal max-w-4xl">
          <div
            dangerouslySetInnerHTML={{
              __html: AlgoContent.description,
            }}
          />
          {/* {AlgoContent.description} */}
        </p>
      </div>
      <div className="flex flex-col justify-start items-start gap-4">
        <h1 className="text-4xl font-Jura font-bold">Complexity</h1>
        <ul className="flex flex-col justify-start items-start gap-2">
          <li className="text-xl font-Inter font-normal flex gap-2">
            Worst-case time complexity
            <div
              dangerouslySetInnerHTML={{
                __html: AlgoContent.worstCase,
              }}
            />
            {/* <span>stringToHTML(str(AlgoContent.worstCase))</span> */}
          </li>
          <li className="text-xl font-Inter font-normal flex gap-2">
            Average time complexity
            <div
              dangerouslySetInnerHTML={{
                __html: AlgoContent.avgCase,
              }}
            />
          </li>
          <li className="text-xl font-Inter font-normal flex gap-2">
            Best-case time complexity
            <div
              dangerouslySetInnerHTML={{
                __html: AlgoContent.bestCase,
              }}
            />
          </li>
          <li className="text-xl font-Inter font-normal flex gap-2">
            Worst-case space complexity
            <div
              dangerouslySetInnerHTML={{
                __html: AlgoContent.worstCaseSpc,
              }}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AlgoContent;
