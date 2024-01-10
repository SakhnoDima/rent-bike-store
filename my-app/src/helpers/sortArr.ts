import { ICard } from "../dto/dto";

export const sortArr = (arg: ICard[]) => {
  const sortedArr = [...arg];

  sortedArr.sort((a, b) => {
    if (a.status < b.status) {
      return -1;
    }
    return 0;
  });
  return sortedArr;
};
