import { motion } from "framer-motion";
import MenuItem from "./MenuItem";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const Navigation: React.FC<{ toggle: () => void }> = ({ toggle }) => (
  <motion.ul variants={variants}>
    {links.map(({ path, name }, i) => (
      <MenuItem path={path} name={name} key={i} toggle={toggle} />
    ))}
  </motion.ul>
);

const links = [
  {
    path: "/about",
    name: "About",
  },
  // TODO roadmap page
  // {
  //   path: "/roadmap",
  //   name: "Roadmap",
  // },
];

export default Navigation;
