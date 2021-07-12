import Axios from "./axios";

export const login = async (bodyData) => {
  try {
    const response = await Axios.post("/auth", bodyData);
    return response.data;
  } catch (e) {
    throw e.response.data;
  }
};

export const getAdmin = async (id) => {
  try {
    const response = await Axios.get(`/admins/${id}`);
    return response.data;
  } catch (e) {
    throw e.response.data;
  }
};
