import Axios from "./axios";

export const createEvent = async (bodyData, data) => {
  try {
    Axios.setAuthToken(localStorage.authToken);
    const response = await Axios.post("/events", bodyData, data);
    return response.data;
  } catch (e) {
    throw e.response.data;
  }
};

export const getEvent = async (id) => {
  try {
    Axios.setAuthToken(localStorage.authToken);
    const response = await Axios.get(`/events?id=${id}`);
    return response.data;
  } catch (e) {
    throw e.response.data;
  }
};

export const deleteEvent = async (id) => {
  try {
    Axios.setAuthToken(localStorage.authToken);
    const response = await Axios.delete(`/events?id=${id}`);
    return response.data;
  } catch (e) {
    throw e.response.data;
  }
};
