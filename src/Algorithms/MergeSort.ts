import { AlgoCon } from "../component/utilis/AlgoContent";

const merge = (
  items: number[],
  aux: number[],
  animArr: number[][],
  low: number,
  mid: number,
  high: number
) => {
  for (let k = low; k <= high; k++) {
    aux[k] = items[k];
  }

  let i = low,
    j = mid + 1;

  for (let k = low; k <= high; k++) {
    if (i > mid) {
      animArr.push([aux[j], k]);
      items[k] = aux[j++];
    } else if (j > high) {
      animArr.push([aux[i], k]);
      items[k] = aux[i++];
    } else if (aux[i] <= aux[j]) {
      animArr.push([aux[i], k]);
      items[k] = aux[i++];
    } else {
      animArr.push([aux[j], k]);
      items[k] = aux[j++];
    }
  }
};

export const getMergeSortAnims = (
  items: number[],
  aux: number[],
  animArr: number[][],
  low: number,
  high: number
) => {
  if (low >= high) return;

  const mid = low + Math.floor((high - low) / 2);

  getMergeSortAnims(items, aux, animArr, low, mid);
  getMergeSortAnims(items, aux, animArr, mid + 1, high);
  merge(items, aux, animArr, low, mid, high);
};

export const mergeSort: AlgoCon = {
  title: "Merge Sort",
  description:
    "Merge Sort is an efficient, stable sorting algorith that makes use of the divide and conquer strategy. Conceptually the algorithm works as follows: Divide the unsorted list into <em>n</em> sublists, each containing one element(a list of one element is considered sorted) Repeatedly merge sublists to produce new sorted sublists until there is only one sublist remaining. This will be the sorted list.",
  worstCase: "O(nlogn)",
  bestCase: "O(nlogn)",
  avgCase: "O(nlogn)",
  worstCaseSpc: "O(n)",
};
