import * as React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Divider } from "@chakra-ui/react";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

type Props = {
  path: string;
  name: string;
  toggle: () => void;
};

export const MotionMenuItem = ({ children }: React.PropsWithChildren) => (
  <motion.li
    variants={variants}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    className="nav-item"
  >
    {children}
  </motion.li>
);

export const LinkMenuItem: React.FC<Props> = ({ path, name, toggle }) => {
  return (
    <MotionMenuItem>
      <Link to={path} onClick={toggle}>
        {name}
      </Link>
      <Divider borderColor={{ base: "white", md: "black" }} />
    </MotionMenuItem>
  );
};
