import { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Success from "./Success";

export default function FormManager() {
  const [step, setStep] = useState("step-1");

  return (
    <div>
      {step === "step-1" && <Step1 />}
      {step === "step-2" && <Step2 />}
      {step === "success" && <Success />}
    </div>
  );
}
