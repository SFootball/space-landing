import * as React from "react";
import { SVGMotionProps, motion } from "framer-motion";
import style from "./MenuToggleButton.module.css";

const Path = (
  props: JSX.IntrinsicAttributes &
    SVGMotionProps<SVGPathElement> &
    React.RefAttributes<SVGPathElement>
) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 100%)"
    strokeLinecap="round"
    {...props}
  />
);

type Props = {
  toggle: () => void;
};

export const MenuToggleButton: React.FC<Props> = ({ toggle }) => (
  <button className={`${style.navMenuButton}`} onClick={toggle}>
    <svg
      className={style.menuIcon}
      height="23px"
      width="23px"
      viewBox="0 0 23 23"
    >
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 4 16.5 L 18 2.5" },
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 4 2.5 L 18 16.346" },
        }}
      />
    </svg>
  </button>
);
