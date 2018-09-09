const Axios = require("axios");

exports.initializeAxios = () => {
  Axios.defaults.baseURL = "https://sellics-frontend-test.herokuapp.com/";
  Axios.defaults.headers.common["Content-Type"] = "application/json";
  Axios.defaults.headers.common["Accept"] = "application/json";
};
