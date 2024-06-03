import { motion, useCycle } from "framer-motion";
import Navigation from "./Navigation";
import MenuToggle from "./MenuToggle";

const MenuForMdScreen = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <motion.nav initial={false} animate={isOpen ? "open" : "closed"}>
      <MenuToggle toggle={() => toggleOpen()} />
      <Navigation toggle={() => toggleOpen()} />
    </motion.nav>
  );
};

export default MenuForMdScreen;
