import MailInput from "./components/MailInput/MailInput";
import PasswordInput from "./components/PasswordInput/PasswordInput";
import { Link } from "react-router-dom";

export default function RegisterForm() {
  return (
    <>
      <div className="w-128 bg-base-200 rounded-lg p-6 mb-8">
        <h4 className="text-2xl mb-2">Register</h4>
        <p className="mb-6">Provide your e-mail and strong password!</p>
        <form method="post" className="flex flex-col gap-4 justify-center mb-8">
          <MailInput></MailInput>
          <PasswordInput></PasswordInput>
          <button className="w-full btn btn-primary">Register!</button>
        </form>
        <div className="w-full flex justify-center">
          <Link to={"/login"} className="link link-primary link-animated">
            Do you already have an account? Sign in
          </Link>
        </div>
      </div>
    </>
  );
}
