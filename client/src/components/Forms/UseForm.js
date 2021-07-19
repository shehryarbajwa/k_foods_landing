import { useState, useEffect } from "react";
import axios from "axios";

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    name: "",
    contact_number: "",
    address: "",
    province: "",
    landsize: "",
    product: "",
    textarea: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sellSubmit, setSellSubmit] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const FarmerSignup = async () => {
    const data = {
      name: values["name"],
      contact_number: values["contact_number"],
      address: values["address"],
      province: values["province"],
      landsize: values["landsize"],
      text: values["textarea"],
    };

    try {
      await axios.post("http://localhost:3000/sell", data)
      .then(setSellSubmit(true));
    } catch (err) {
      console.error(err);
    }
  };

  const sendOrderRequest = async () => {
    const data = {
      name: values["name"],
      contact_number: values["contact_number"],
      address: values["address"],
      province: values["province"],
      product: values["product"],
      text: values["textarea"],
    };

    try {
      await axios.post("http://localhost:3000/buy", data)
      .then(setIsSubmitting(true));
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setErrors(validate(values));

    if (event.target.action === "http://localhost:3000/buy") {
      sendOrderRequest();
    } else {
      FarmerSignup();
    }
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }

    if (Object.keys(errors).length === 0 && sellSubmit) {
      callback();
    }
  }, []);

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;
