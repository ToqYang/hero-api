import { useState } from "react";
import { HandleNameChangeInterface } from "../interfaces/global";

const useForm = (initialState: any) => {
  const [values, setValues] = useState(initialState);

  const reset = () => {
    setValues(initialState);
  };

  const handleInputChange = ({ target }: HandleNameChangeInterface) => {
    setValues({
      ...values,
      [target.name]: target.value,
    });
  };

  return {values, handleInputChange, reset};
};

export default useForm;