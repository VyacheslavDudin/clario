import { useCallback, useState } from "react";
import { Accordion, Stepper as MantineStepper } from "@mantine/core";

import { ReactComponent as ArrowDown } from "src/assets/images/arrow-down.svg";

import { Step } from "./Step";

const steps = [
  { title: "Install Clario", description: "Relax and let Clario do the job." },
  {
    title: "Set up your protection",
    description: "Relax and let Clario do the job.",
  },
  {
    title: "Enjoy spy-free life",
    description: "Relax and let Clario do the job.",
  },
];

export function Stepper() {
  const initialActiveStep = steps[2].title;
  const [activeSteps, setActiveSteps] = useState([initialActiveStep]);

  const onStepClick = useCallback(
    (index: number) => {
      const targetStep = steps[index].title;

      setActiveSteps((prev) =>
        prev.includes(targetStep)
          ? prev.filter((step) => step !== targetStep)
          : [...prev, targetStep]
      );
    },
    []
  );

  return (
    <Accordion
      variant="filled"
      value={activeSteps}
      multiple
      chevron={<ArrowDown fill="inherit" />}
      chevronSize={24}
    >
      <MantineStepper
        active={-1}
        onStepClick={onStepClick}
        orientation="vertical"
        iconSize={28}
        styles={{
          verticalSeparator: {
            borderStyle: "dashed",
            borderWidth: 0.5,
          },
          stepBody: {
            marginLeft: 8,
            width: "100%",
          },
        }}
      >
        {steps.map(({ title, description }) => (
          <MantineStepper.Step
            key={title}
            w={240}
            styles={{
              stepIcon: {
                backgroundColor: activeSteps.includes(title)
                  ? "var(--mantine-color-main-5)"
                  : "var(--mantine-color-main-9)",
                color: "var(--mantine-color-main-0)",
              },
            }}
            label={
              <Step
                title={title}
                description={description}
                active={activeSteps.includes(title)}
              />
            }
          />
        ))}
      </MantineStepper>
    </Accordion>
  );
}
