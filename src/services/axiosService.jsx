import axios from "axios";

export default function axiosService() {}

axiosService.prototype.post = function (url, data) {
  return axios.post(url, data);
};