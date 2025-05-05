import { Link } from "react-router-dom";
import MailInput from "./components/MailInput/MailInput";
import PasswordInput from "./components/PasswordInput/PasswordInput";

export default function LoginForm() {
  return (
    <>
      <div className="w-128 bg-base-200 rounded-lg p-6 mb-8">
        <h4 className="text-2xl mb-2">Login</h4>
        <p className="mb-6">Enter your mail and password to enter recipes kingdom!</p>
        <form method="post" className="flex flex-col gap-4 justify-center mb-8">
          <MailInput></MailInput>
          <PasswordInput></PasswordInput>
          <button className="w-full btn btn-primary">Login!</button>
        </form>
        <div className="w-full flex justify-center">
          <Link to={"/register"} className="link link-primary link-animated">
            Don't have an account yet? Sign up now!
          </Link>
        </div>
      </div>
    </>
  );
}
