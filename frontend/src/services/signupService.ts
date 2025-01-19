import { api } from "./apiService";

const ROUTES = {
  SIGN_UP: "/users",
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
