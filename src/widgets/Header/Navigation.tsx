import { Divider, Image, useMediaQuery } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { MotionList } from "src/shared/components/MotionList/MotionList";
import { MotionMenuItem } from "src/shared/components/MotionList/MotionMenuItem";
import { useTonBackendAuth } from "src/features/tonAuth/useTonBackendAuth";
import style from "./Header.module.css";

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

const logoURL = "/images/logos/logo_white.png";

export const Navigation: React.FC<{ toggle: () => void }> = ({ toggle }) => {
  useTonBackendAuth();

  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const [isMobile] = useMediaQuery("(max-width: 508px)");

  return (
    <>
      <MotionList>
        {isMobile && (
          <>
            <MotionMenuItem>
              <Link className={style.link} to="/">
                <Image width="100px" src={logoURL} />
              </Link>
            </MotionMenuItem>
            <MotionMenuItem>
              <Image
                onClick={() => {
                  changeLanguage("ru");
                }}
                src="/images/common/ru.png"
                h="30px"
                minW="30px"
                cursor="pointer"
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
              />
            </MotionMenuItem>
          </>
        )}

        {links.map(({ path, name }) => (
          <MotionMenuItem key={path}>
            <Link to={path} onClick={toggle}>
              {t(name)}
            </Link>
            <Divider borderColor={{ base: "white", lg: "black" }} />
          </MotionMenuItem>
        ))}
      </MotionList>
    </>
  );
};
