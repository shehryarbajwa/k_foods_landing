import { useState, useEffect } from "react";
import axios from "axios";

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    name: "",
    contact_number: "",
    address: "",
    province: "",
    product: "",
    textarea: "",
    landsize: "",
  });

  const [buy, setBuy] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleBuySubmit = (event) => {
    event.preventDefault();
    setBuy(true);

  }


  const handleSubmit = async (event) => {
    const { name, value } = event.target;

    event.preventDefault();

    setErrors(validate(values));

    setIsSubmitting(true);

    const data = {
      name: values["name"],
      contact_number: values["contact_number"],
      address: values["address"],
      province: values["province"],
      product: values["product"],
      text: values["textarea"],
    };

    console.log(data);

    if (buy) {
      const sendOrderRequest = async () => {
        try {
          const resp = await axios.post("http://localhost:3000/buy", data);
          console.log(resp.data);
        } catch (err) {
          // Handle Error Here
          console.error(err);
        }
      };
      sendOrderRequest();
    } else {
      const signupFarmerRequest = async () => {
        try {
          const resp = await axios.post("http://localhost:3000/sell", data);
          console.log(resp.data);
        } catch (err) {
          // Handle Error Here
          console.error(err);
        }
      };
      signupFarmerRequest();
    }
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  return { handleChange, handleSubmit, values, errors, handleBuySubmit };
};

export default useForm;
