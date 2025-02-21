import { api } from "@/axios/api";

const ROUTES = {
  SIGN_UP: "/auth/signup",
};

async function signUpUser(body: {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}) {
  await api.post(ROUTES.SIGN_UP, body);
}

export const signup = {
  user: signUpUser,
};
