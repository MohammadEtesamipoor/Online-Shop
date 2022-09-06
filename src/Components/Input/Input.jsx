import { Input, Box, Textarea } from "@chakra-ui/react";
import { useField, ErrorMessage } from "formik";
import persian_fa from "react-date-object/locales/persian_fa";
import { Calendar } from "react-multi-date-picker";
import DatePicker from "react-multi-date-picker";

export const FieldInput = ( {isTextarea=false, ...props }) => {
  const [field, value] = useField(props);
  return (
    <>
      {isTextarea ? (
        <Textarea {...field} {...props} mt="15px" />
      ) : (
        <Input borderColor="gray.400" {...field} variant="flushed" {...props} mt="15px" />
      )}

      <Box color="#b83c3ccc">
        <ErrorMessage name={field.name} />
      </Box>
    </>
  );
};

export const FieldDate = ( {...props }) => {
  const [field, value] = useField(props);
  return (
    <>
        <DatePicker onChange={(e)=>{
            field.value.date=e.unix
        }} {...props}/>
      <Box color="#b83c3ccc">
        <ErrorMessage name={"date"} />
      </Box>
    </>
  );
};
