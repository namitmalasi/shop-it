import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNWQ3YjEwZmU1N2QyZDY3OTQ2MzczMyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzMzYxNzIwOCwiZXhwIjoxNjMzODc2NDA4fQ.mpD0A_YqdtE3RayVfj8zsipVnmNzS7JjCvhU9bLyWLY";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
