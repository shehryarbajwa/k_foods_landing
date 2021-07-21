export default function validateSellInfo(values) {
    let sellErrors = {};
  
    if (!values.name.trim()) {
        sellErrors.name = "نام درج کرنا ضروری ہے";
    }
  
    if (!values.contact_number) {
        sellErrors.contact_number = "ٹیلیفون نمبر درج کرنا ضروری ہے";
    }
  
    if (!values.address) {
        sellErrors.address = "پتہ درج کرنا ضروری ہے";
    }
  
    if (!values.province) {
        sellErrors.province = "صوبہ درج کرنا ضروری ہے";
    }
  
    return sellErrors;
}
  