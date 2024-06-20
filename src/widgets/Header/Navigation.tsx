import { Divider, Image, useMediaQuery } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { MotionList } from "src/shared/components/MotionList/MotionList";
import { MotionMenuItem } from "src/shared/components/MotionList/MotionMenuItem";

const links = [
  {
    path: "/account-info",
    name: "Account info",
  },
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

export const Navigation: React.FC<{ toggle: () => void }> = ({ toggle }) => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const [isMobile] = useMediaQuery("(max-width: 420px)");

  return (
    <MotionList>
      {isMobile && (
        <>
          <MotionMenuItem>
            <Image
              onClick={() => {
                changeLanguage("ru");
              }}
              src="/images/common/ru.png"
              h="30px"
              minW="30px"
              cursor="pointer"
              zIndex={999}
            />
          </MotionMenuItem>
          <MotionMenuItem>
            <Image
              onClick={() => {
                changeLanguage("en");
              }}
              src="/images/common/en.png"
              h="30px"
              minW="30px"
              cursor="pointer"
              zIndex={999}
            />
          </MotionMenuItem>
        </>
      )}

      {links.map(({ path, name }) => (
        <MotionMenuItem key={path}>
          <Link to={path} onClick={toggle}>
            {t(name)}
          </Link>
          <Divider borderColor={{ base: "white", md: "black" }} />
        </MotionMenuItem>
      ))}
    </MotionList>
  );
};
