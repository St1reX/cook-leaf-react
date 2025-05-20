import MailInput from "./RegisterFormFields/MailInput/MailInput";
import PasswordInput from "./RegisterFormFields/PasswordInput/PasswordInput";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Notyf } from "notyf";
import useRegisterMutation from "../../../mutations/useRegisterMutation";

export default function RegisterForm() {
  const notyf = new Notyf({
    position: {
      x: "center",
      y: "top",
    },
  });

  const registerMutation = useRegisterMutation();

  return (
    <>
      <div className="w-128 bg-base-200 rounded-lg p-6 mb-8">
        <h4 className="text-2xl mb-2">Register</h4>
        <p className="mb-6">Provide your e-mail and strong password!</p>

        <Formik
          initialValues={{ mail: "", password: "" }}
          validationSchema={Yup.object({
            mail: Yup.string().email("Provided email address is invalid").required("Mail is required"),
            password: Yup.string()
              .required("Password is required")
              .test(
                "is-strong-password",
                "Password must contain at least 6 characters, one uppercase letter, one number, and one special character.",
                (value = "") =>
                  value.length >= 6 &&
                  /[A-Z]/.test(value) &&
                  /[0-9]/.test(value) &&
                  /[^a-zA-Z0-9]/.test(value)
              ),
          })}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            try {
              await registerMutation.mutateAsync(values);

              notyf.success("Your profile has been registered successfully. Now you can log in!");
              resetForm();
            } catch (error) {
              if (error.response.status === 400) {
                notyf.error(`${error.response.data.message}`);
              } else {
                notyf.error("Something went wrong.");
              }
            } finally {
              setSubmitting(false);
            }
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
                      notyf.error("There are errors in some of the form fields.");
                    }
                  })
                }
                className="w-full btn btn-primary"
              >
                Register!
              </button>
            </Form>
          )}
        </Formik>

        <div className="w-full flex justify-center">
          <Link to={"/login"} className="link link-primary link-animated">
            Do you already have an account? Sign in
          </Link>
        </div>
      </div>
    </>
  );
}
