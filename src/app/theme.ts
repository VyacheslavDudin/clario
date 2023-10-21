import { createTheme } from "@mantine/core";

export const theme = createTheme({
  colors: {
    main: [
      "#FFFFFF",
      "#EFF1FF",
      "#EAF5E4",
      "#E6F2FE",
      "#FFF2EB",
      "#5CD6C0",
      "#DF723A",
      "#6C96CE",
      "#483FDD",
      "#151D51",
    ],
  },
  primaryColor: "main",
  primaryShade: 8,
  fontFamily: "Moderat",
  fontSizes: {
    xs: "9px",
    sm: "10px",
    md: "14px",
    lg: "16px",
    xl: "16px",
  },
  lineHeights: {
    xs: "12px",
    sm: "14px",
    md: "18px",
    lg: "20px",
    xl: "22px",
  },
  headings: {
    fontFamily: "Moderat",
    fontWeight: "700",
    sizes: {
      h1: { fontSize: "36px" },
      h2: { fontSize: "26px" },
      h4: { fontSize: "18px" },
      h5: { fontSize: "16px" },
    },
  },
  spacing: {
    xs: "8px",
    sm: "16px",
    md: "20px",
    lg: "24px",
    xl: "40px",
  },
});
