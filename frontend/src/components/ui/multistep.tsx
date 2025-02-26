"use client";

import { generate } from "@/utils/array";
import clsx from "clsx";
import {
  Children,
  cloneElement,
  createContext,
  Dispatch,
  FC,
  forwardRef,
  HTMLAttributes,
  ReactElement,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

export interface IMultistepContext {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
  nextStep: () => void;
  prevStep: () => void;
  steps: number;
  setSteps: Dispatch<SetStateAction<number>>;
}

export const MultistepContext = createContext<IMultistepContext | null>(null);

export const useMultistepContext = () => {
  const context = useContext(MultistepContext);

  if (!context) {
    throw new Error("useMultistepContext used outside of MultistepContextRoot");
  }

  return context;
};

export interface MultistepRootProps {
  initialStep?: number;
  children?: ReactNode;
}

export const MultistepRoot: FC<MultistepRootProps> = ({
  initialStep = 0,
  children,
}) => {
  const [step, setStep] = useState<number>(initialStep);
  const [steps, setSteps] = useState<number>(0);

  const nextStep = () => setStep((old) => Math.min(old + 1, steps - 1));
  const prevStep = () => setStep((old) => Math.max(old - 1, 0));

  return (
    <MultistepContext.Provider
      value={{
        step,
        setStep,
        nextStep,
        prevStep,
        steps,
        setSteps,
      }}
    >
      {children}
    </MultistepContext.Provider>
  );
};
MultistepRoot.displayName = "MultistepRoot";

export const MultistepProgress = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { step, steps } = useMultistepContext();

  const stepsIsHighlight = generate(steps, (index) => index <= step);

  return (
    <div
      ref={ref}
      className={clsx("flex gap-2 w-full items-stretch", className)}
      {...props}
    >
      {stepsIsHighlight.map((isHighlight, index) => (
        <div
          key={index}
          className={clsx("flex-grow h-2", {
            "bg-accent-primary": isHighlight,
            "bg-accent-secondary": !isHighlight,
            "rounded-l-full": index === 0,
            "rounded-r-full": index === steps - 1,
          })}
        />
      ))}
    </div>
  );
});
MultistepProgress.displayName = "MultistepProgress";

export const MultistepSteps = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ children, ...props }, ref) => {
  const { setSteps } = useMultistepContext();

  const steps = Children.map(children, (child, index) => {
    const step = child as ReactElement<MultistepStepProps>;

    return cloneElement(step, { ...step.props, _step: index });
  }) as ReactElement<MultistepStepProps>[];

  useEffect(() => {
    if (steps) {
      setSteps(steps.length);
    }
  }, [steps, setSteps]);

  return (
    <div ref={ref} {...props}>
      {steps}
    </div>
  );
});
MultistepSteps.displayName = "MultistepSteps";

export interface MultistepStepProps extends HTMLAttributes<HTMLDivElement> {
  _step?: number;
}

export const MultistepStep = forwardRef<HTMLDivElement, MultistepStepProps>(
  ({ children, _step: step, className, ...props }, ref) => {
    const { step: currentStep } = useMultistepContext();

    console.log(step);

    return (
      <div
        ref={ref}
        className={clsx(className, { hidden: step !== currentStep })}
        {...props}
      >
        {children}
      </div>
    );
  }
);
MultistepStep.displayName = "MultistepStep";

export const Multistep = {
  Root: MultistepRoot,
  Progress: MultistepProgress,
  Steps: MultistepSteps,
  Step: MultistepStep,
};
