import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage  } from "formik";
import * as Yup from "yup";
import {register} from "../../redux/auth/operations";
import css from "../RegistrationForm/RegistrationForm.module.css";

const validationSchema = Yup.object({
  name: Yup.string().min(2, "Too short").max(50, "Too Long").required("Required"),
  email: Yup.string().email("Invalid email").max (50, "Too Long").required("Required"),
  password: Yup.string().min(6, "Minimum 6 characters").max(50, "Too Long").required("Required"),
});

export default function RegistrationForm (){
    const dispatch = useDispatch();

    const handleSubmit = (values, { resetForm}) => {
        dispatch(register(values));
        resetForm();
    };

    return ( 
        <Formik
          initialValues={{ name: "", email: "", password: ""}}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          >
           <Form className={css.form }>
               <label>
                  Name 
                 <Field name="name" type="text"/>
                 <ErrorMessage name="name" component="div"  className={css.error}/>
               </label>
               <label>
                 Email 
                 <Field name="email" type="email"/>
                 <ErrorMessage name="email" component="div"  className={css.error}/>
               </label>
               <label>
                 Password
                 <Field name="password" type="password"/>
                 <ErrorMessage name="password" component="div"  className={css.error}/>
               </label>
                <button type="submit" className={css.button}>
                 Register
                </button>
          </Form>  
        </Formik>
    );
}