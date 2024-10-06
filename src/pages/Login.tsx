import React, { FC } from "react";
import { usePostApiAuthLogin } from "../api/endpoints/auth/auth.ts";
import { useAuthStore } from "../authStore.ts";
import { AuthResponseDto, LoginRequestDto } from "../api/types";
import { useNavigate } from "react-router-dom";
import "@fontsource/plus-jakarta-sans";
import { Box, Button, Link, styled, TextField, Typography } from "@mui/material";
const Login: FC = () => {
  const mutation = usePostApiAuthLogin();
  const { login } = useAuthStore();
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
  return (
    // <form onSubmit={handleSubmit}>
    //   <button type="submit">Login</button>
    //   <button onClick={handleLogout}>Logout</button>
    //   {mutation.isError && <div>Error: {mutation.error.message}</div>}
    // </form>
    <MainContainer>
      <StyledCard>
        <NavSection>
          <ArrowBackIcon style={{ fontSize: "20px" }} />
          <Typography component="h2" pl={"10px"} fontWeight={"700"} fontSize={"14px"}>
            Back
          </Typography>
        </NavSection>
        <FormContainer>
          <Typography component="h2" fontWeight={"700"} fontSize={"18px"}>
            Log in
          </Typography>
          <Typography variant="body2" color="textSecondary" fontSize={"14px"}>
            Don't have an account?{" "}
            <Link href="#" color={"#6366F1"}>
              Register
            </Link>
          </Typography>
          <StyledForm noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <StyledButton type="submit" fullWidth variant="contained" color="primary" onClick={handleSubmit}>
              Log in
            </StyledButton>
            <Box mt={2}>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Box>
          </StyledForm>
        </FormContainer>
      </StyledCard>
    </MainContainer>
  );
};

import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const MainContainer = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  backgroundImage: "url('public/hero-illustration.svg')",
  backgroundRepeat: "no-repeat",
}));

const NavSection = styled("div")(() => ({
  marginBottom: "40px",
  display: "flex",
  alignItems: "center",
}));

const StyledCard = styled("div")(() => ({}));

const FormContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  boxShadow: "0px 6px 30px 0px #00000014",
  maxWidth: 400,
  borderRadius: "20px",
  "@media (max-width: 600px)": {
    padding: theme.spacing(3),
    maxWidth: "90%",
  },

  "@media (max-width: 375px)": {
    padding: theme.spacing(2),
  },
}));

const StyledForm = styled("form")({
  width: "100%",
  marginTop: 8,
});

const StyledButton = styled(Button)(() => ({
  boxShadow: "box-shadow: 0px 1px 2px 0px #00000014;",
  backgroundColor: "#6366F1",
}));

export default Login;
