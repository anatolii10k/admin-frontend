import axios from "axios";

const endpointAPI = axios.create();

// Set your own baseURL
endpointAPI.defaults.baseURL = process.env.REACT_APP_PUBLIC_URL;

endpointAPI.setAuthToken = (jwtToken) => {
  endpointAPI.defaults.headers.common["Authorization"] = `Bearer ${jwtToken}`;
};

export default endpointAPI;
