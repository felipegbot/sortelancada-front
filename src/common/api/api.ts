import axios from "axios";
import { confirmAlert } from "react-confirm-alert";
import { redirect } from "next/navigation";

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

const Api = axios.create({
  baseURL: process.env.REACT_APP_API_URL ?? "http://localhost:1337",
  headers,
});

Api.interceptors.request.use(async (config) => {
  const token = localStorage.getItem("user_token");
  if (token && config && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

Api.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    console.log(error, "Api request error");
    if (
      error.response?.data?.message === "expired-token" ||
      error.response?.data?.message === "invalid signature"
    ) {
      localStorage.clear();
      const handleConfirmDialog = () => {
        confirmAlert({
          closeOnClickOutside: false,
          title: "Atenção",
          message: "Sua sessão expirou, faça login novamente",
          buttons: [
            {
              label: "Ok",
              onClick: () => {
                redirect("/");
              },
            },
          ],
        });
      };
      return handleConfirmDialog();
    }
    return Promise.reject(error);
  },
);

export default Api;
