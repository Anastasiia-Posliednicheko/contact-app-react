import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { login } from "../../redux/auth/operations";

import css from "./LoginForm.module.css";

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email").max(50, "Too Long").required("Required"),
  password: Yup.string().min(6, "Minimum 6 characters").max(50, "Too Long").required("Required"),
});

export default function LoginForm () {
    const dispatch = useDispatch();

    const handleSubmit = (values, {resetForm}) => {
        dispatch(login(values));
        resetForm;
    };

    return (
        <Formik 
        initialValues={{ email: "", password: ""}}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        >
            <Form className={css.form}>
                <label>
                    Email
                    <Field name="email" type="email"/>
                    <ErrorMessage name="email" component="div" style={{ color: "red"}}/>
                </label>
                <label>
                    Password
                    <Field name="password" type="password"/>
                    <ErrorMessage name="password" component="div" style={{color: "red"}}/>
                </label>
                <button type="submit" className={css.button}>Login</button>
            </Form>
        </Formik>

    );
}