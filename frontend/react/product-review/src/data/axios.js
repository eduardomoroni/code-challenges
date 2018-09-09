import Axios from "axios";

const { REACT_APP_API_PROXY_URL, REACT_APP_API_BASE_URL } = process.env;

export const initializeAxios = () => {
  Axios.defaults.baseURL = REACT_APP_API_BASE_URL || REACT_APP_API_PROXY_URL;
  Axios.defaults.headers.common["Content-Type"] = "application/json";
  Axios.defaults.headers.common["Accept"] = "application/json";
};
