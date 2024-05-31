// import { useEffect, useRef } from "react";

// export const useDimensions = (ref: React.MutableRefObject<null>) => {
//   const dimensions: React.MutableRefObject<{
//     width: number;
//     height: number;
//   }> = useRef({ width: 0, height: 0 });

//   useEffect(() => {
//     dimensions.current.width = ref.current.offsetWidth;
//     dimensions.current.height = ref.current.offsetHeight;
//   }, []);

//   return dimensions.current;
// };
