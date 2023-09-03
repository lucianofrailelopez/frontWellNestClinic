import axios from "axios";
import { LOGIN_USER, SIGN_UP } from "./types";

export const loginUser = (email, password, dni) => {
  return async function (dispatch) {
    const datos = {
      password: password,
      userName: email,
      dni: dni,
    };
    const endpoint =
      "https://serverwellnestclinic.onrender.com/userClient/login";
    try {
      const response = await axios.post(endpoint, datos);
      const apiResponse = response.data;

      dispatch({ type: LOGIN_USER, payload: apiResponse });

      return response;
    } catch (error) {
      return error.response;
    }
  };
};

export const signUp = async (email, password, id) => {
  const endpoint =
    "https://serverwellnestclinic.onrender.com/userClient/register";
  try {
    const body = {
      email: email,
      password: password,
      id: id,
    };
    const response = await axios.post(endpoint, body);

    return response;
  } catch (error) {
    return error.response;
  }
};
