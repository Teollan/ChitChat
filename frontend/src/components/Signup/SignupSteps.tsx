"use client";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Multistep, useMultistepContext } from "../ui/multistep";
import { Typography } from "../ui/typography";

function StepOne() {
  const { nextStep } = useMultistepContext();

  return (
    <Multistep.Step className="flex flex-col">
      <Input.Text placeholder="Email Address" className="mt-2" />

      <Button
        variant="accent"
        formFactor="fit"
        className="mt-4 ml-auto"
        onClick={nextStep}
      >
        <Typography variant="h4" as="span">
          Next
        </Typography>
      </Button>
    </Multistep.Step>
  );
}

function StepControl() {
  const { setStep } = useMultistepContext();

  return (
    <div className="flex gap-2">
      <Button onClick={() => setStep(0)}>0</Button>
      <Button onClick={() => setStep(1)}>1</Button>
      <Button onClick={() => setStep(2)}>2</Button>
    </div>
  );
}

export function SignupSteps() {
  return (
    <div className="mt-2">
      <Multistep.Root>
        <StepControl />
        <Multistep.Progress />
        <Multistep.Steps className="mt-4">
          <StepOne />

          <Multistep.Step>Step 2</Multistep.Step>

          <Multistep.Step>Step 3</Multistep.Step>
        </Multistep.Steps>
      </Multistep.Root>
    </div>
  );
}
