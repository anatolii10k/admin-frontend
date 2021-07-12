import Axios from "./axios";

export const createNews = async (bodyData, data) => {
  try {
    Axios.setAuthToken(localStorage.authToken);
    const response = await Axios.post("/news", bodyData, data);
    return response.data;
  } catch (e) {
    throw e.response.data;
  }
};

export const getNews = async (id) => {
  console.log(id);
  try {
    Axios.setAuthToken(localStorage.authToken);
    const response = await Axios.get(`/news?id=${id}`);
    return response.data;
  } catch (e) {
    throw e.response.data;
  }
};

export const deleteNews = async (id) => {
  console.log(id);
  try {
    Axios.setAuthToken(localStorage.authToken);
    const response = await Axios.delete(`/news?id=${id}`);
    return response.data;
  } catch (e) {
    throw e.response.data;
  }
};
