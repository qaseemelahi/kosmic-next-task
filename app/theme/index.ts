"use client";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

export const lightTheme = responsiveFontSizes(
  createTheme({
    typography: {
      fontFamily: "inherit",
    },
    palette: {
      mode: "dark",
      primary: {
        main: "#523FD7",
      },
      secondary: {
        main: "#FF7DFF",
      },

      text: {
        primary: "#FFFFFF",
        secondary: "#D0CFD1",
      },
      divider: "#3A3940",

      background: { default: "#12111A", paper: "#09090D" },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 375,
        md: 745,
        lg: 1440,
        xl: 1728,
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 28,
            color: "#fff",
            borderColor: "#3A3940",
            paddingTop: "8px",
            paddingBottom: "8px",
          },
        },
      },
    },
  })
);

export const darkTheme = responsiveFontSizes(
  createTheme({
    typography: {
      fontFamily: "inherit",
    },
    palette: {
      mode: "light",
      primary: {
        main: "#523FD7",
      },
      secondary: {
        main: "#FF7DFF",
      },

      text: {
        primary: "#FFFFFF",
        secondary: "#D0CFD1",
      },
      divider: "#3A3940",

      background: { default: "#12111A", paper: "#09090D" },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 375,
        md: 745,
        lg: 1440,
        xl: 1728,
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 28,
            color: "#fff",
            borderColor: "#3A3940",
            paddingTop: "8px",
            paddingBottom: "8px",
          },
        },
      },
    },
  })
);
