import { useState } from "react";
import Step1 from "./Step1";
import Success from "./Success";

type Step = "step1" | "success";

export default function FormManager() {
  const [step, setStep] = useState<Step>("step1");

  return (
    <div id="form-manager">
      {step === "step1" && <Step1 onContinue={() => setStep("success")} />}
      {step === "success" && <Success onContinue={() => setStep("step1")} />}
    </div>
  );
}
