import React, { FC } from "react";
import { usePostApiAuthLogin } from "../api/endpoints/auth/auth.ts";
import { useAuthStore } from "../authStore.ts";
import { AuthResponseDto, LoginRequestDto } from "../api/types";
import { useNavigate } from "react-router-dom";

const Login: FC = () => {
  const mutation = usePostApiAuthLogin();
  const { login, logout } = useAuthStore();
  const navigate = useNavigate();
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const loginData: LoginRequestDto = {
      email: "BHuser@gmail.com",
      password: "12345678",
    };

    mutation.mutate(
      { data: loginData },
      {
        onSuccess: (response: AuthResponseDto) => {
          console.log("Login successful:", response);
          if (response.token) login(response.token);
          navigate("/dashboard");
        },
        onError: (error) => {
          console.error("Login failed:", error);
        },
      },
    );
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Login</button>
      <button onClick={handleLogout}>Logout</button>
      {mutation.isError && <div>Error: {mutation.error.message}</div>}
    </form>
  );
};

export default Login;
