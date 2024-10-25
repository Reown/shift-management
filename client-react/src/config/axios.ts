import axios from "axios";

const taskAxios = axios.create({
  baseURL: "http://localhost:5432/api/task/",
});

const oldPersonAxios = axios.create({
  baseURL: "http://localhost:5432/api/oldperson/",
});

const personAxios = axios.create({
  baseURL: "http://localhost:5432/api/person/",
});

export { taskAxios, oldPersonAxios };
