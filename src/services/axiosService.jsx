import axios from "axios";

export default function axiosService() {}

axiosService.prototype.post = function (url, data) {
  return axios.post(url, data);
};

axiosService.prototype.get = function (url) {
  return axios.get(url);
};