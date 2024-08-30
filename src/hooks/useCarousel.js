import { useMemo, useState } from "react";
import { usePrevious } from "./usePrevious";

export function useCarousel(arrayLength, numOfSlides = 1) {
  const [count, setCount] = useState(0);
  const prevCount = usePrevious(count);
  const dir =
    prevCount == undefined
      ? 0
      : prevCount == 0 && count == arrayLength - 1
      ? -1
      : prevCount == arrayLength - 1 && count == 0
      ? 1
      : count > (prevCount ?? 0)
      ? 1
      : -1;

  const incr = () => {
    if (count < arrayLength - 1) {
      setCount((prev) => prev + 1);
    } else {
      setCount(0);
    }
  };
  const decr = () => {
    if (count > 0) {
      setCount((prev) => prev - 1);
    } else {
      setCount(arrayLength - 1);
    }
  };
  const activeIndexs = useMemo(() => {
    const resualt = [];
    const recousive = () => {
      if (resualt.length < numOfSlides) {
        const index = count + resualt.length;
        if (index < arrayLength) {
          resualt.push(index);
          recousive();
        } else if (index >= arrayLength) {
          resualt.push(Math.abs(arrayLength - index));
          recousive();
        }
      }
    };
    recousive();
    return resualt;
  }, [count, arrayLength, numOfSlides]);

  return { incr, decr, dir, count, activeIndexs, prevCount };
}

export default useCarousel;
