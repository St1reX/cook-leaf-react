import useFlyonUIInit from "../hooks/useFlyonUIInit";
import RegisterForm from "../components/RegisterPage/RegisterForm/RegisterForm";

export default function Register() {
  useFlyonUIInit();

  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-col gap-8 w-128">
        <h1 className="text-4xl text-center">
          Join <span className="text-primary">CookLeaf®</span>, the official and best recipe platform
        </h1>
        <RegisterForm></RegisterForm>
      </div>
    </div>
  );
}
