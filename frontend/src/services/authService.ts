import { User } from "@/types/userTypes";
import { api } from "@/axios/api";

const ROUTES = {
  LOGIN: "/auth/login",
  LOGOUT: "/auth/logout",
};

async function login(body: { email: string; password: string }) {
  const { data } = await api.post<User>(ROUTES.LOGIN, body);

  return data;
}

async function logout() {
  const { data } = await api.post<User>(ROUTES.LOGOUT);

  return data;
}

export const auth = {
  login,
  logout,
};
