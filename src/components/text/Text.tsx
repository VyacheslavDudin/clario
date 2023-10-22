import { Text as TextMantine, TextProps } from "@mantine/core";
import { PropsWithChildren } from "react";

import classes from "./Text.module.css";

export function Text({ children, ...props }: PropsWithChildren<TextProps>) {
  return (
    <TextMantine c="main.9" className={classes.title} {...props}>
      {children}
    </TextMantine>
  );
}
