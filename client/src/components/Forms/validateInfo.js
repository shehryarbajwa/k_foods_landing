export default function validateInfo(values) {
  let errors = {};

  if (!values.name.trim()) {
    errors.name = "نام درج کرنا ضروری ہے";
  }

  if (!values.contact_number) {
    errors.contact_number = "ٹیلیفون نمبر درج کرنا ضروری ہے";
  }

  if (!values.address) {
    errors.address = "پتہ درج کرنا ضروری ہے";
  }

  if (!values.province) {
    errors.province = "صوبہ درج کرنا ضروری ہے";
  }


  return errors;
}
