import { FC } from "react";
import { usePostApiAuthLogin } from "../api/endpoints/auth/auth.ts";
import { useAuthStore } from "../authStore.ts";
import { AuthResponseDto, LoginRequestDto } from "../api/types";
import { useNavigate } from "react-router-dom";
import "@fontsource/plus-jakarta-sans";
import { Box, Button, Link, styled, TextField, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useForm } from "react-hook-form";
import { loginFormValidation } from "../../utils/loginValidation.ts";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
interface FormValues {
  email: string;
  password: string;
}

const Login: FC = () => {
  const { mutate: loginRequest } = usePostApiAuthLogin();
  const { login } = useAuthStore();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const onSubmit = (data: FormValues) => {
    const loginData: LoginRequestDto = {
      email: data.email,
      password: data.password,
    };

    loginRequest(
      { data: loginData },
      {
        onSuccess: handleLoginSuccess,
        onError: handleLoginError,
      },
    );
  };
  const handleLoginSuccess = (response: AuthResponseDto) => {
    if (response.token) login(response.token);
    navigate("/dashboard");
  };

  const handleLoginError = (error: { message: string }) => {
    console.error("Login failed:", error);
    toast.error("Login failed. Please try again.");
  };

  return (
    <MainContainer>
      <ToastContainer />
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
          <StyledForm noValidate onSubmit={handleSubmit(onSubmit)}>
            <StyledTextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email address"
              autoComplete="email"
              autoFocus
              {...register("email", loginFormValidation.email)}
              error={!!errors.email}
              helperText={errors.email?.message}
            />
            <StyledTextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              {...register("password", loginFormValidation.password)}
              error={!!errors.password}
              helperText={errors.password?.message}
            />
            <StyledButton type="submit" fullWidth variant="contained" color="primary">
              Log in
            </StyledButton>
            <FormFooter>
              <Link href="#" variant="body2" color={"#6366F1"}>
                Forgot password?
              </Link>
            </FormFooter>
          </StyledForm>
        </FormContainer>
      </StyledCard>
    </MainContainer>
  );
};

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

const StyledTextField = styled(TextField)(() => ({
  "& fieldset": {
    borderRadius: "8px",
  },
}));

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
  marginTop: "10px",
  borderRadius: "12px",
}));
const FormFooter = styled("div")({
  display: "flex",
  justifyContent: "center",
  paddingTop: "10px",
});

export default Login;
