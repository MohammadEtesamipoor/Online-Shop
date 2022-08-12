import { useFormik } from "formik";
export const LoginValidtion = (userName, password) => {
  return useFormik({
    initialValues: {
      userName: '',
      password: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
    validate: (values) => {
        const error={};
        
    }
  });
};
