import { useState, useEffect } from "react";

export function useDomElResize(id: string) {
  const [mainDom, setSize] = useState<DOMRect | undefined>();

  const listener = () => {
    const boundingRect = document.getElementById(id)?.getBoundingClientRect();
    setSize(boundingRect);
  };

  useEffect(() => {
    listener();
    window.addEventListener("resize", listener);
    return () => {
      window.removeEventListener("resize", listener);
    };
    //eslint-disable-next-line
  }, []);

  return mainDom;
}
