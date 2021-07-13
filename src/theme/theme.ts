import { useState } from "react";
import { createTheme, responsiveFontSizes } from "@material-ui/core/styles";
import { i18n } from "next-i18next";
import { useRouter } from "next/router";

export const initial = createTheme({
  palette: {
    primary: {
      main: "#E5E5E5",
    },
    secondary: {
      main: "#0F182E",
    },
    action: {
      active: "#FDB035",
    },
    background: {
      default: "#05080F",
    },
    mode: "dark",
  },
  typography: {
    fontFamily: ["Cairo", "Roboto"].join(","),
    h1: {
      fontFamily: ["Cairo-bold", "Roboto"].join(","),
      fontSize: "3rem",
      letterSpacing: "-0.007em",
    },
    h2: {
      fontFamily: ["Cairo-bold", "Roboto"].join(","),
      fontSize: "2rem",
      letterSpacing: "-0.01em",
    },
    h3: {
      fontFamily: ["Cairo-semi", "Roboto"].join(","),
      fontSize: "1.8rem",
      letterSpacing: "-0.01em",
    },
    h4: {
      fontFamily: ["Cairo-semi", "Roboto"].join(","),
      fontSize: "1.5rem",
      letterSpacing: "-0.01em",
    },
    h5: {
      fontFamily: ["Cairo-semi", "Roboto"].join(","),
      fontSize: "1.2rem",
      letterSpacing: "-0.01em",
    },
    h6: {
      fontFamily: ["Cairo-semi", "Roboto"].join(","),
      fontSize: "1rem",
      letterSpacing: "-0.01em",
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {},
        elevation: {
          color: "#ffffff!important",
        },
      },
    },
  },
});

const initialDark = responsiveFontSizes(initial);

export const useCustomTheme = () => {
  const { locale } = useRouter();

  const [theme, setTheme] = useState({
    ...initialDark,
    direction: i18n?.dir ? i18n.dir(locale) : "ltr",
  });

  const setLocale = (lang?: string) => {
    if (!lang || !i18n) return;
    const dir = i18n.dir(lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
  };

  return {
    theme,
    setLocale,
  };
};
