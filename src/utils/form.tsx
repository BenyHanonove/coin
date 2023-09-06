interface FormData {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
}


export const validateForm = (formData:FormData) => {
    if (!formData.fullName) {
      return "Full Name is required";
    }

    if (!formData.email) {
      return "Email is required";
    } else if (!isValidEmail(formData.email)) {
      return "Invalid email format";
    }

    if (!formData.password) {
      return "Password is required";
    } else if (formData.password.length < 6) {
      return "Password should be at least 6 characters long";
    }

    if (formData.password !== formData.confirmPassword) {
      return "Passwords do not match";
    }

    return "";
  };

const isValidEmail = (email:string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};



export const validateCreditCardNumber = (input:string)=>{
  
  const cardNumber = input.replace(/-/g, '');

  //Check length
  if (![13, 15, 16].includes(cardNumber.length)) {
    return false;
  };

  //Check digits
  if (!/^\d+$/.test(cardNumber)) {
    return false;
  };

  return true;
};