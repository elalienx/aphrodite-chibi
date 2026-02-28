import { useState } from "react";
import Step from "./step/Step";
import Success from "./success/Success";

type Step = "step" | "success";

export default function FormManager() {
  const [step, setStep] = useState<Step>("step");

  return (
    <div>
      {step === "step" && <Step onContinue={() => setStep("success")} />}
      {step === "success" && <Success onContinue={() => setStep("step")} />}
    </div>
  );
}
