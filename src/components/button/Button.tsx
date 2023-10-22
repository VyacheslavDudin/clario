import { Button as ButtonMantine, ButtonProps } from "@mantine/core";

import classes from "./Button.module.css";

type SizeOptions = "sm" | "md";

type Props = {
  text: string;
  size?: SizeOptions;
  onClick: CallableFunction;
};

const buttonConfig: Record<SizeOptions, ButtonProps> = {
  sm: {
    px: "sm",
    pt: "6px",
    pb: "xs",
    fullWidth: false,
    fz: "md",
    lh: "md",
    h: 32,
  },
  md: {
    px: "32px",
    py: "9px",
    fullWidth: true,
    fz: "lg",
    lh: "lg",
    h: 47,
  },
};

export function Button({
  text,
  size = "md",
  onClick,
  ...props
}: Props & ButtonProps) {
  return (
    <ButtonMantine
      radius="xl"
      size="xl"
      c="main.0"
      className={classes.button}
      {...buttonConfig[size]}
      {...props}
    >
      {text}
    </ButtonMantine>
  );
}
