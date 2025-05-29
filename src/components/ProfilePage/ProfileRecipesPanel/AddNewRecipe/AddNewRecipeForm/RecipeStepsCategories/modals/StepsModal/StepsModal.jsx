import StepsTimeInput from "./StepsTimeInput";
import { notyfInstance } from "../../../../../../../../constants/notyfConfig";
import NumberInput from "../../../shared/NumberInput";

export default function StepsModal({ steps, setSteps }) {
  const handleStepDescChange = (value, index) => {
    const newSteps = steps.map((step, i) => (i === index ? { ...step, description: value } : step));
    setSteps(newSteps);
  };

  const handleStepTimeChange = (value, index) => {
    console.log("wywołało się");

    console.log(value, index);

    const newSteps = steps.map((step, i) => (i === index ? { ...step, estimated_time: value } : step));
    console.log(newSteps);

    setSteps(newSteps);
  };

  const handleStepDelete = () => {
    if (steps.length === 1) {
      notyfInstance.error("Recipe cannot include less than one step");
    } else {
      setSteps(steps.slice(0, steps.length - 1));
    }
  };

  const handleStepAdd = () => {
    setSteps([...steps, { description: "", estimated_time: 5 }]);
  };

  return (
    <div
      id="steps-modal"
      className="overlay modal overlay-open:opacity-100 hidden overlay-open:duration-300"
      role="dialog"
      tabIndex="-1"
    >
      <div className="modal-dialog overlay-open:opacity-100 overlay-open:duration-300 max-w-none">
        <div className="modal-content h-full max-h-none justify-between">
          <div className="modal-header">
            <h3 className="modal-title">Add steps to your recipe</h3>
            <button
              type="button"
              className="btn btn-text btn-circle btn-sm absolute end-3 top-3"
              aria-label="Close"
              data-overlay="#steps-modal"
            >
              <span className="icon-[tabler--x] size-4" />
            </button>
          </div>
          <div className="modal-body w-full h-full flex flex-col gap-4 items-start justify-start">
            <span className="text-sm text-accent/80">
              You can add as many steps as you want by clicking steering buttons
            </span>
            <div className="flex flex-col justify-center gap-4 w-full">
              {steps.map((step, index) => (
                <div key={index} className="flex justify-between items-center gap-4 relative">
                  <div className="grow">
                    <label className="label-text" htmlFor={`step-description-${index}`}>
                      Step no. {index + 1}
                    </label>

                    <textarea
                      id={`step-description-${index}`}
                      value={step.description}
                      onChange={(e) => handleStepDescChange(e.target.value, index)}
                      className="textarea"
                      placeholder="Enter instructions here..."
                    />
                  </div>

                  <NumberInput
                    quantity={step.estimated_time}
                    onQuantityChange={handleStepTimeChange}
                    label={"Estimated time"}
                    elementIndex={index}
                  ></NumberInput>

                  {index === steps.length - 1 && (
                    <span
                      className="icon-[mingcute--wastebasket-line] text-accent/80 cursor-pointer absolute top-0 right-0"
                      style={{ width: 24, height: 24 }}
                      onClick={handleStepDelete}
                    />
                  )}
                </div>
              ))}
              <button type="button" onClick={handleStepAdd} className="btn btn-primary">
                Add new step
              </button>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-soft btn-secondary" data-overlay="#steps-modal">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
