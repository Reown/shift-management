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

const authAxios = axios.create({
  baseURL: "http://localhost:5432/api/auth/",
});

const scheduleAxios = axios.create({
  baseURL: "http://localhost:5432/api/schedule/",
});

export { taskAxios, oldPersonAxios, personAxios, authAxios, scheduleAxios };
