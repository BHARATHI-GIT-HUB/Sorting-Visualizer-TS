import { AlgoCon } from "../component/utilis/AlgoContent";

export const getQuickSortAnims = (items: number[]) => {
  const arr = [...items];
  const animArr: number[][] = [];
  partition(arr, animArr, 0, arr.length - 1);
  return { quickSorted: arr, quickSortAnims: animArr };
};

const partition = (
  arr: number[],
  animArr: number[][],
  low: number,
  high: number
) => {
  if (low >= high) return;
  let lt = low;
  let i = low;
  let gt = high;
  const v = arr[low];

  while (i <= gt) {
    if (arr[i] < v) exch(arr, animArr, i++, lt++);
    else if (arr[i] > v) exch(arr, animArr, i, gt--);
    else i++;
  }

  partition(arr, animArr, low, lt - 1);
  partition(arr, animArr, gt + 1, high);
};

const exch = (arr: number[], animArr: number[][], a: number, b: number) => {
  animArr.push([a, b]);
  const tmp = arr[a];
  arr[a] = arr[b];
  arr[b] = tmp;
};

export const quickSort: AlgoCon = {
  title: "Quick Sort",
  description:
    "<p>Quick Sort is an efficient, in-place sorting algorithm that in practice is faster than MergeSort and HeapSort. However, it is not a stable sorting algorithm, meaning that the relative positioning of equal sort items is not preserved.Quicksort is a divide and conquer algorithm.</p><p> Quicksort first divides a large array into two smaller sub-arrays: the low elements and the high elements. Quicksort can then recursively sort the sub-arrays. The steps are: Pick an element, called a pivot, from the array. This is usually done at random. Move pivot element to the start of the array <em>Partitioning:</em> reorder the array so that all elements with values less than the pivot come before the pivot, while all elements with values greater than the pivot come after it (equal values can go either way).</p><p> After this partitioning, the pivot is in its final position. This is called the <em>partition</em> operation Recursively apply the above steps to the sub-array of elements with smaller values and separately to the sub-array of elements with greater values.</p> <p> The base case of the recursion is an array of size zero or one, which are sorted by definition.</p>",
  worstCase: "O(nlogn)",
  bestCase: "O(nlogn)",
  avgCase: "O(nlogn)",
  worstCaseSpc: "O(n)",
};
