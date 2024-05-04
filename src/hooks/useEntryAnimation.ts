import { useRef, useEffect } from "react";
import anime from "animejs";

export const useEntryAnimation = () => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      anime({
        targets: ref.current,
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 1500,
      });
    }
  }, []);

  return ref;
};
