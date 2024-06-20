import { motion, useCycle } from "framer-motion";
import { Navigation } from "./Navigation";
import { MenuToggleButton } from "src/shared/components/Buttons/MenuToggleButton";
import style from "./Header.module.css";

const sidebar = {
  open: (height = 1000) => ({
    height: "100vh",
    clipPath: `circle(${height * 2 + 200}px at calc(100vw - 40px) 55px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    height: "100vh",
    clipPath: "circle(25px at calc(100vw - 40px) 55px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export const MenuForMobScreen = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <motion.nav initial={false} animate={isOpen ? "open" : "closed"}>
      <motion.div className={style.sidebar} variants={sidebar} />
      <MenuToggleButton toggle={() => toggleOpen()} />
      <Navigation toggle={() => toggleOpen()} />
    </motion.nav>
  );
};
