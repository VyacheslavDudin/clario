import { Title } from "@mantine/core";
import classes from "./Text.module.css";

type Props = {
  text: string;
};

export function ColoredTitle({ text }: Props) {
  return (
    <Title order={1} className={classes.title}>
      {text}
    </Title>
  );
}
