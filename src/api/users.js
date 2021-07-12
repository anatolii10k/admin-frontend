import Axios from "./axios";

export const getUser = async () => {
  try {
    Axios.setAuthToken(localStorage.authToken);
    const response = await Axios.get("/users");
    return response.data;
  } catch (e) {
    throw e.response.data;
  }
};
