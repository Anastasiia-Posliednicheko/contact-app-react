import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage  } from "formik";
import * as Yup from "yup";
import {register} from "../../redux/auth/operations";
import css from "../RegistrationForm/RegistrationForm.module.css";

const validationSchema = Yup.object({
  name: Yup.string().min(2, "Too short").max(50, "Too Long").required("Required"),
  email: Yup.string().email("Invalid email").max (50, "Too Long").required("Required"),
  password: Yup.string().min(8, "Minimum 8 characters").max(50, "Too Long").required("Required"),
});

export default function RegistrationForm (){
    const dispatch = useDispatch();
     const navigate = useNavigate();

    const initialValues = {
    name: "",
    email: "",
    password: "",
    };
    const handleSubmit = async (values, { resetForm }) => {
    const result = await dispatch(register(values));
    if (result.meta.requestStatus === 'fulfilled') {
      navigate('/contacts'); 
    }

    resetForm();
  };


  

    return ( 
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          >
           <Form className={css.form }>
               <label>
                  Name 
                 <Field name="name" type="text"/>
               </label>
               <label>
                 Email 
                 <Field name="email" type="email"/>
               </label>
               <label>
                 Password
                 <Field name="password" type="password"/>
               </label>
                <button type="submit" className={css.button}>
                 Register
                </button>
          </Form>  
        </Formik>
    );
}