import axios from "axios";

export const taskAxios = axios.create({
  baseURL: "http://localhost:5432/api/task/",
});

export const oldPersonAxios = axios.create({
  baseURL: "http://localhost:5432/api/oldperson/",
});

export const personAxios = axios.create({
  baseURL: "http://localhost:5432/api/person/",
});

export const authAxios = axios.create({
  baseURL: "http://localhost:5432/api/auth/",
});

export const scheduleAxios = axios.create({
  baseURL: "http://localhost:5432/api/schedule/",
});
