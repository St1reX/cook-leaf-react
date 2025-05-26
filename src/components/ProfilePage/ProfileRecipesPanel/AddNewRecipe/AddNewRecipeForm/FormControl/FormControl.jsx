import { useFormikContext } from "formik";
import { useState } from "react";
import { notyfInstance } from "../../../../../../constants/notyfConfig";

export default function FormControl() {
  const { validateForm, submitForm } = useFormikContext();
  const [step, setStep] = useState(1);

  const handleFinishClick = async () => {
    const errors = await validateForm();
    if (Object.keys(errors).length > 0) {
      notyfInstance.error("There are errors in the form. Correct form fields before submitting");
      return;
    }

    await submitForm();
  };

  return (
    <div className="mt-5 flex items-center justify-between gap-y-2">
      <button
        type="button"
        className="btn btn-primary btn-prev max-sm:btn-square"
        onClick={() => setStep(step - 1)}
        data-stepper-back-btn=""
      >
        <span className="icon-[tabler--chevron-left] text-primary-content size-5 rtl:rotate-180" />
        <span className="max-sm:hidden">Back</span>
      </button>
      <button
        type="button"
        className="btn btn-primary btn-next max-sm:btn-square"
        onClick={() => setStep(step + 1)}
        data-stepper-next-btn=""
      >
        <span className="max-sm:hidden">Next</span>
        <span className="icon-[tabler--chevron-right] text-primary-content size-5 rtl:rotate-180" />
      </button>

      {step === 3 && (
        <button type="button" className="btn btn-primary" onClick={handleFinishClick}>
          Finish
        </button>
      )}
    </div>
  );
}
