export const swap = (newArr: number[], a: number, b: number) => {
  let temp = newArr[b];
  newArr[b] = newArr[a];
  newArr[a] = temp;
};
