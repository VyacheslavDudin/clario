import { PropsWithChildren } from "react";
import { Title as TitleMantine, TitleProps } from "@mantine/core";

export function Title({ children, ...props }: PropsWithChildren<TitleProps>) {
  return (
    <TitleMantine c="main.9" {...props}>
      {children}
    </TitleMantine>
  );
}
