import axios from "axios";

const baseUrl = "/search";

export function getResults(query) {
  return axios.get(`${baseUrl}/${query}`);
}
