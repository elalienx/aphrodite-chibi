import { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Success from "./Success";

type Step = "step-1" | "step-2" | "success";

export default function FormManager() {
  const [step, setStep] = useState<Step>("step-1");

  return (
    <div>
      {step === "step-1" && <Step1 onSubmit={() => setStep("step-2")} />}
      {step === "step-2" && <Step2 onSubmit={() => setStep("success")} />}
      {step === "success" && <Success onSubmit={() => setStep("step-1")} />}
    </div>
  );
}
