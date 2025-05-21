import { Link, useNavigate } from "react-router-dom";
import MailInput from "./LoginFormFields/MailInput/MailInput";
import PasswordInput from "./LoginFormFields/PasswordInput/PasswordInput";
import { notyfInstance } from "../../../constants/notyfConfig";
import useLoginMutation from "../../../mutations/useLoginMutation";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useAuth } from "../../../context/AuthContext";

export default function LoginForm() {
  const routerNavigate = useNavigate();

  const loginMutation = useLoginMutation();
  const { setUser } = useAuth();

  return (
    <>
      <div className="w-128 bg-base-200 rounded-lg p-6 mb-8">
        <h4 className="text-2xl mb-2">Login</h4>
        <p className="mb-6">Enter your mail and password to enter recipes kingdom!</p>
        <Formik
          initialValues={{ mail: "", password: "" }}
          validationSchema={Yup.object({
            mail: Yup.string().email("Provided email address is invalid").required("Mail is required"),
            password: Yup.string().required("Password is required"),
          })}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            const userData = await loginMutation.mutateAsync(values);
            setUser(userData);

            resetForm();
            setSubmitting(false);
            routerNavigate("/");
          }}
        >
          {({ errors, validateForm }) => (
            <Form method="post" className="flex flex-col gap-4 justify-center mb-8">
              <MailInput></MailInput>
              <PasswordInput></PasswordInput>

              <button
                type="submit"
                onClick={() =>
                  validateForm().then(() => {
                    if (Object.keys(errors).length > 0) {
                      notyfInstance.error("There are errors in some of the form fields.");
                    }
                  })
                }
                className="w-full btn btn-primary"
              >
                Login
              </button>
            </Form>
          )}
        </Formik>
        <div className="w-full flex justify-center">
          <Link to={"/register"} className="link link-primary link-animated">
            Don't have an account yet? Sign up now!
          </Link>
        </div>
      </div>
    </>
  );
}
