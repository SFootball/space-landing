import { FC, PropsWithChildren } from "react";
import { HTMLMotionProps, motion } from "framer-motion";
import style from "./MotionList.module.css";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

type Props = PropsWithChildren<{
  ulProps?: HTMLMotionProps<"ul">;
}>;

export const MotionList: FC<Props> = ({ ulProps, children }) => {
  return (
    <motion.ul className={style.navList} variants={variants} {...ulProps}>
      {children}
    </motion.ul>
  );
};
