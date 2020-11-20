import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getLocations(perPage, page) {
    return apiClient.get("/locations?_limit=" + perPage + "&_page=" + page);
  },
  getLocation(id) {
    return apiClient.get("/locations/" + id);
  },
};
