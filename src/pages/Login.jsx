import LoginForm from "../components/LoginPage/LoginForm/LoginForm";

export default function Login() {
  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-col gap-8 w-128">
        <h1 className="text-4xl text-center">
          Discover great recipes on the <span className="text-primary">CookLeaf®</span> platform
        </h1>
        <LoginForm></LoginForm>
      </div>
    </div>
  );
}
