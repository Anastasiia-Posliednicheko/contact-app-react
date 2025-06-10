import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { login } from "../../redux/auth/operations";
import css from "./LoginForm.module.css";

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email").max(50).required("Required"),
  password: Yup.string().min(6).max(50).required("Required"),
});

export default function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (values, { resetForm }) => {
    const result = await dispatch(login(values));
    if (result.meta.requestStatus === 'fulfilled') {
      navigate('/contacts');
    }
    resetForm();
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <label>
          Email
          <Field name="email" type="email" />
          <ErrorMessage name="email" component="div" />
        </label>
        <label>
          Password
          <Field name="password" type="password" />
          <ErrorMessage name="password" component="div" />
        </label>
        <button type="submit" className={css.button}>Login</button>
      </Form>
    </Formik>
  );
}
