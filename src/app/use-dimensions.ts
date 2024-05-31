import { useEffect, useRef } from "react";

export const useDimensions = (
  ref:
    | React.MutableRefObject<{
        offsetWidth: number;
        offsetHeight: number;
      }>
    | React.MutableRefObject<null>
) => {
  const dimensions = useRef({ width: 0, height: 0 });

  useEffect(() => {
    dimensions.current.width = ref.current ? ref.current.offsetWidth : 0;
    dimensions.current.height = ref.current ? ref.current.offsetHeight : 0;
  }, []);

  return dimensions.current;
};
