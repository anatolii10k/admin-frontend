import Axios from "./axios";

export const createVideo = async (bodyData, data) => {
  try {
    Axios.setAuthToken(localStorage.authToken);
    const response = await Axios.post("/video", bodyData, data);
    return response.data;
  } catch (e) {
    throw e.response.data;
  }
};

export const getVideo = async (id) => {
  try {
    Axios.setAuthToken(localStorage.authToken);
    const response = await Axios.get(`/video?id=${id}`);
    return response.data;
  } catch (e) {
    throw e.response.data;
  }
};

export const deleteEvent = async (id) => {
  try {
    Axios.setAuthToken(localStorage.authToken);
    const response = await Axios.delete(`/video?id=${id}`);
    return response.data;
  } catch (e) {
    throw e.response.data;
  }
};
