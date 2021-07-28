import { useState, useEffect } from "react";
import validateSellInfo from "./validateSellInfo";
import formService from "../../services/formData";

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
  const [sellErrors, setsellErrors] = useState({});
  const [product, setProduct] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleRadioChange = (value) => {
    setProduct(value);
  };

  const sendSignupFarmerRequest = async () => {
    const data = {
      name: values["name"],
      contact_number: values["contact_number"],
      address: values["address"],
      province: values["province"],
      landsize: values["landsize"],
      text: values["textarea"],
    };

    try {
      if (Object.keys(errors).length === 0) {
        await formService.farmSignup(data).then(setSellSubmit(true));
      }
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
      product: product,
      text: values["textarea"],
    };


    try {
      if (Object.keys(sellErrors).length === 0) {
        console.log(data);
        await formService.buyRequest(data).then(setIsSubmitting(true));
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (event.target.action.includes("buy")) {
      sendOrderRequest();
      setErrors(validate(values));
    } else {
      sendSignupFarmerRequest();
      setsellErrors(validateSellInfo(values));
    }
  };

  useEffect(() => {
    if (Object.keys(sellErrors).length === 0 && sellSubmit) {
      callback();
    }

    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [sellErrors, errors]);

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
    sellErrors,
    handleRadioChange,
  };
};

export default useForm;
