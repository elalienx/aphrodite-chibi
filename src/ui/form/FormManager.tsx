import { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Success from "./Success";

type Step = "step1" | "step2" | "success";

export default function FormManager() {
  const [step, setStep] = useState<Step>("step1");

  return (
    <div>
      {step === "step1" && <Step1 onSubmit={() => setStep("step2")} />}
      {step === "step2" && <Step2 onSubmit={() => setStep("success")} />}
      {step === "success" && <Success onSubmit={() => setStep("step1")} />}
    </div>
  );
}
