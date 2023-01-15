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
    <div className="min-w-screen min-h-max flex justify-between items-start mt-5 bg-black text-white p-10">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-Jura font-bold text-[#d17f3f]">
          Description
        </h1>
        <p
          className="text-xl font-Inter font-normal flex flex-col  justify-center items-start gap-4 leading-7 max-w-4xl capitalize"
          dangerouslySetInnerHTML={{
            __html: AlgoContent.description,
          }}
        />
      </div>
      <div className="flex flex-col justify-start items-start gap-4 min-w-[20rem]">
        <h1 className="text-4xl font-Jura font-bold text-[#d17f3f]">
          Complexity
        </h1>
        <div className="flex justify-center items-start gap-4">
          <ul className="flex flex-col justify-start items-start gap-2">
            <li className="text-xl font-Inter font-normal">
              Worst-case time complexity
            </li>
            <li className="text-xl font-Inter font-normal">
              Average time complexity
            </li>
            <li className="text-xl font-Inter font-normal">
              Best-case time complexity
            </li>
            <li className="text-xl font-Inter font-normal">
              Worst-case space complexity
            </li>
          </ul>
          <ul className="text-xl font-Inter font-normal flex flex-col gap-2">
            <li
              dangerouslySetInnerHTML={{
                __html: AlgoContent.worstCase,
              }}
            />{" "}
            <li
              dangerouslySetInnerHTML={{
                __html: AlgoContent.avgCase,
              }}
            />{" "}
            <li
              dangerouslySetInnerHTML={{
                __html: AlgoContent.bestCase,
              }}
            />{" "}
            <li
              dangerouslySetInnerHTML={{
                __html: AlgoContent.worstCaseSpc,
              }}
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AlgoContent;
