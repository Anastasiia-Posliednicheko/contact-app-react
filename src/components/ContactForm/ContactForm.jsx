import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {useDispatch} from "react-redux";
import { addContact } from '../../redux/contacts/operations';
import { toast} from "react-hot-toast";
import css from "./ContactForm.module.css";



const validationSchema = Yup.object({
    name: Yup.string().min(3,"Too short").max(50, "Max 50").required("Required"),
    number: Yup.string().min(3,"Too short").max(50, "Max 50").required("Required")
});

export default function ContactForm (){
    const dispatch = useDispatch();
    return ( 
        <Formik
         initialValues={{ name: "", number: "" }}
         validationSchema={validationSchema}
         onSubmit={async (values, { resetForm }) => {
        try {
          const result = await dispatch(addContact(values)).unwrap();
          toast.success(`Contact "${result.name}" added!`);
          resetForm();
        } catch {
          toast.error("Failed to add contact");
        }
      }}
        >
         <Form className={css.container}>
          <div >
           <label htmlFor="name">Name</label>
           <Field name="name" type="text" placeholder="Enter contact name"/>
           <ErrorMessage name="name"component="div" className={css.error} /> 
          </div>
          <div>
           <label htmlFor="number">Number</label>
           <Field name="number" type="text" placeholder="Enter phone number"/>
           <ErrorMessage name="number" component="div" className={css.error} />
          </div>
          <button type="submit">Add Contact</button>
         </Form>
        </Formik>



    );

}