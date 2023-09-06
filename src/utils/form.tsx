// Define the structure of the form data using an interface
export interface FormData {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

// Function to validate the form data
export const validateForm = (formData:FormData) => {
    
    // Check if the Full Name field is empty
    if(!formData.fullName) {
      return "Full Name is required";
    };

    // Check if the Email field is empty
    if(!formData.email) {
      return "Email is required";
    } else if (!isValidEmail(formData.email)) {
      return "Invalid email format";
    }

    // Check if the Password field is empty
    if(!formData.password) {
      return "Password is required";
    } else if (formData.password.length < 6) {
      return "Password should be at least 6 characters long";
    }
    
    // Check if the Password and Confirm Password fields match
    if(formData.password !== formData.confirmPassword) {
      return "Passwords do not match";
    }

    return "";
  };


// Function to validate email format using a regular expression
const isValidEmail = (email:string) => {
  // Regular expression to validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
