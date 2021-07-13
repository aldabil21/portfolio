import InfoRoundedIcon from "@material-ui/icons/InfoRounded";
import GitHubIcon from "@material-ui/icons/GitHub";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import TwitterIcon from "@material-ui/icons/Twitter";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import SportsEsportsRoundedIcon from "@material-ui/icons/SportsEsportsRounded";
import { ICONS } from "../../util/icons";

export type IconProps = {
  title: string;
  href: string;
  icon: HTMLElement | JSX.Element;
  color: string;
  external?: boolean;
  soon?: boolean;
};

export const getMenuIcons = (size: number): IconProps[] => {
  const iconStyle = {
    fontSize: size || 60,
    color: "#f5f5f5",
  };
  return [
    {
      title: "Skills",
      href: "/skills",
      icon: ICONS.SKILLS_ICON(size || 60, "#f5f5f5"),
      color: "#009688",
    },
    {
      title: "Work",
      href: "/work",
      icon: ICONS.WORKS_ICON(size || 60, "#f5f5f5"),
      color: "#161a21",
    },
    {
      title: "Github",
      href: "https:github.com/aldabil21",
      icon: <GitHubIcon style={iconStyle} />,
      color: "#222222",
      external: true,
    },
    {
      title: "Call",
      href: "tel:+966507487620",
      icon: <PhoneIphoneIcon style={iconStyle} />,
      color: "#007994",
      external: true,
    },
    {
      title: "Whatsapp",
      href: "https://wa.me/966507487620",
      icon: <WhatsAppIcon style={iconStyle} />,
      color: "#25d366",
      external: true,
    },
    {
      title: "Twitter",
      href: "https://twitter.com/aldabil21",
      icon: <TwitterIcon style={iconStyle} />,
      color: "#00acee",
      external: true,
    },
    {
      title: "E-mail",
      href: "mailto:ali.aldabil@gmail.com",
      icon: <EmailRoundedIcon style={iconStyle} />,
      color: "#af2500",
      external: true,
    },
    {
      title: "Blog",
      href: "#",
      icon: ICONS.BLOG_ICON(size || 60, "#f5f5f5"),
      color: "#9e9e9e",
      soon: true,
    },
    {
      title: "Game",
      href: "#",
      icon: <SportsEsportsRoundedIcon style={iconStyle} />,
      color: "#9e9e9e",
      soon: true,
    },
  ];
};
