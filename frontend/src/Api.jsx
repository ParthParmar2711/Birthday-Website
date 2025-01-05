import axios from "axios";

const instance = axios.create({
  baseURL: "https://your-app-name.onrender.com",
});

export default instance;
