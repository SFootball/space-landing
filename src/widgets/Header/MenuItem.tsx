import * as React from "react";
import { Link } from "react-router-dom";
import { Divider } from "@chakra-ui/react";
import { MotionMenuItem } from "src/shared/components/MotionList/MotionMenuItem";

type Props = {
  path: string;
  name: string;
  toggle: () => void;
};

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
