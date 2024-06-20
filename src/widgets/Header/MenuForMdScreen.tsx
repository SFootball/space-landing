import { motion, useCycle } from "framer-motion";
import { Navigation } from "./Navigation";
import { MenuToggleButton } from "src/shared/components/Buttons/MenuToggleButton";

export const MenuForMdScreen = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <>
      <motion.nav initial={false} animate={isOpen ? "open" : "closed"}>
        <MenuToggleButton toggle={() => toggleOpen()} />
        <Navigation toggle={() => toggleOpen()} />
      </motion.nav>
    </>
  );
};
