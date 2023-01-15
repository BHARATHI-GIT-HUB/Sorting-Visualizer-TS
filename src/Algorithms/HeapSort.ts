import { AlgoCon } from "../component/utilis/AlgoContent";
import { swap } from "./helper";

export const getHeapSortAnims = (items: number[]) => {
  const pq = new MaxHeap(items);
  pq.heapSort();
  return { heapSorted: pq.heap, heapSortAnims: pq.animArr };
};

class MaxHeap {
  N = 0;
  heap: number[] = [];
  animArr: number[][] = [];

  constructor(arr?: number[]) {
    if (!arr) return;
    const newArr = [...arr];
    this.N = newArr.length;
    this.heap = newArr;
    for (let i = Math.floor(this.N / 2); i >= 0; i--) {
      this.sink(i);
    }
  }

  sink(i: number) {
    while (i * 2 < this.N && this.N > 1) {
      let j = i * 2;
      if (i === 0) j = 1;
      if (j + 1 < this.N && this.heap[j] < this.heap[j + 1]) j++;
      if (this.heap[j] < this.heap[i]) break;
      this.exch(i, j);
      i = j;
    }
  }

  exch(a: number, b: number) {
    this.animArr.push([a, b]);
    swap(this.heap, a, b);
  }

  heapSort() {
    while (this.N > 1) {
      this.exch(--this.N, 0);
      this.sink(0);
    }
    return this.heap;
  }
}

export const heapSort: AlgoCon = {
  title: "Heap Sort",
  description:
    "<p> Heap Sort can be thought of as an improved selection sort that uses the heap data structure rather than a linear-time search to find the maximum or minimum element. It is an in-place sorting algorithm that is not stable and has a somewhat slower running time than Quicksort in practice.</p> <p>The heapsort algorithm can be divided into two parts. In the first step, a heap is built out of the data. The heap is often placed in an array with the layout of a complete binary tree.</p><p> In the second step, a sorted array is created by repeatedly removing the largest element from the heap (the root of the heap), and inserting it into the array. The heap is updated after each removal to maintain the heap property.</p><p> Once all objects have been removed from the heap, the result is a sorted array. Call the buildMaxHeap() function on the list. Also referred to as heapify(), this builds a heap from a list in O(n) operations. </p><p>Swap the first element of the list with the final element. Decrease the considered range of the list by one. Call the <em>siftDown()</em>, also called <em>maxHeapify()</em> function on the list to sift the new first element to its appropriate index in the heap. Go to step (2) unless the considered range of the list is one element.</p>",
  worstCase: "O(nlogn)",
  bestCase: "O(nlogn)",
  avgCase: "O(nlogn)",
  worstCaseSpc: "O(1)",
};
