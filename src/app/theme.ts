import { Text, Title, createTheme } from "@mantine/core";

export const theme = createTheme({
  colors: {
    main: [
      "#FFFFFF", // 0
      "#EFF1FF", // 1
      "#EAF5E4", // 2
      "#E6F2FE", // 3
      "#FFF2EB", // 4
      "#5CD6C0", // 5
      "#DF723A", // 6
      "#6C96CE", // 7
      "#483FDD", // 8
      "#151D51", // 9
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
      h1: { fontSize: "36px", lineHeight: "36px", fontWeight: "700" },
      h2: { fontSize: "26px", lineHeight: "30px", fontWeight: "700" },
      h4: { fontSize: "18px", lineHeight: "22px", fontWeight: "700" },
      h5: { fontSize: "16px", lineHeight: "20px", fontWeight: "700" },
    },
  },
  spacing: {
    xs: "8px",
    sm: "16px",
    md: "20px",
    lg: "24px",
    xl: "40px",
  },
  components: {
    Text: Text.extend({ classNames: { root: "text-default" } }),
    Title: Title.extend({ classNames: { root: "title-default" } }),
  },
});
