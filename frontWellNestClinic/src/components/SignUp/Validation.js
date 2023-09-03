const validation = (userData) => {
  const error = {};

  //Email validation
  if (!/\S+@\S+\.\S+/.test(userData.email)) {
    error.email = "This is not a valid email";
  }
  if (!userData.email) {
    error.email = "You must enter an email address";
  }
  if (userData.email.length > 35) {
    error.email =
      "The email address should not contain more than 35 characters";
  }
  //Password validation
  if (
    !/(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\\-/])/.test(
      userData.password
    )
  ) {
    error.password =
      "Password must contain at least one number, one letter, and one special character";
  }

  if (userData.password.length < 6) {
    error.password = "Password must contain at least 6 characters";
  }

  return error;
};

export default validation;
