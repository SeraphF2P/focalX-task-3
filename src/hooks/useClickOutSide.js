import { useCallback } from "react";
import useEventListener from "./useEventListener";

export default function useClickOutside(ref, cb) {
  const handleClickOutside = useCallback(
    (event) => {
      if (ref.current == null || ref.current.contains(event.target)) {
        return;
      }
      cb(event);
    },
    [ref, cb]
  );

  useEventListener("click", handleClickOutside, document);
}
