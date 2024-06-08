import { motion } from "framer-motion";
import MenuItem from "./MenuItem";
import { Flex } from "@chakra-ui/react";
import { TonButton } from "src/entities/tonAuth/TonButton";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const links = [
  {
    path: "/roadmap",
    name: "Roadmap",
  },
  {
    path: "/about",
    name: "About",
  },
  {
    path: "/",
    name: "Main",
  },
];

const Navigation: React.FC<{ toggle: () => void }> = ({ toggle }) => (
  <motion.ul className="nav-list" variants={variants}>
    <Flex w="160px" zIndex={2} justifyContent="center">
      <TonButton />
    </Flex>
    {links.map(({ path, name }, i) => (
      <MenuItem path={path} name={name} key={i} toggle={toggle} />
    ))}
  </motion.ul>
);

export default Navigation;
