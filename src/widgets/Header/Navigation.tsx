import { motion } from "framer-motion";
import { LinkMenuItem } from "./MenuItem";

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
    {links.map(({ path, name }, i) => (
      <LinkMenuItem path={path} name={name} key={i} toggle={toggle} />
    ))}
  </motion.ul>
);

export default Navigation;
