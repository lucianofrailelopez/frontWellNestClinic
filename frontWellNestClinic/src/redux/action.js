import axios from "axios";

export const LOGIN_USER = "LOGIN_USER";

export const loginUser = (email, password) => {
  return async function (dispatch) {
    //cambiar hardocodeo por axios
    console.log("fjdhdjsd");
    if (email === "hola@gmail.com" && password === "hola"){

        
    } else {
        throw new Error('this is not a valid user')
    }
    //   dispatch({ type: LOGIN_USER, payload: data });
  };
};
