import { useState } from "react";
import Step2 from "./step-2/Step2";
import Step1 from "./step-1/Step1";
import Success from "./success/Success";

type Step = "step-1" | "step-2" | "success";

export default function FormManager() {
  const [step, setStep] = useState<Step>("step-1");

  return (
    <div>
      {step === "step-1" && <Step1 onContinue={() => setStep("step-2")} />}
      {step === "step-2" && <Step2 onContinue={() => setStep("success")} />}
      {step === "success" && <Success onContinue={() => setStep("step-1")} />}
    </div>
  );
}
