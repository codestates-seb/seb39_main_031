import { Dispatch, SetStateAction, useEffect, useState } from "react";

type UseOutsideClickType = (
  el: React.RefObject<HTMLDivElement>,
  btn: React.RefObject<HTMLButtonElement>,
  initialState: boolean
) => [boolean, Dispatch<SetStateAction<boolean>>];

export const useOutsideClick: UseOutsideClickType = (el, btn, initialState) => {
  const [isActive, setIsActive] = useState(initialState);

  useEffect(() => {
    const pageClickEvent = (e: any) => {
      if (
        el.current !== null &&
        !el.current.contains(e.target) &&
        !btn.current?.contains(e.target)
      ) {
        setIsActive(!isActive);
      }
    };

    if (isActive) {
      window.addEventListener("click", pageClickEvent);
    }

    return () => {
      window.removeEventListener("click", pageClickEvent);
    };
  }, [isActive, btn, el]);

  return [isActive, setIsActive];
};
