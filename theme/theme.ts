import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    fontFamily: "Plus Jakarta Sans, sans-serif",
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          "@media (max-width: 430px)": {
            fontSize: "14px",
            padding: "8px 16px",
          },
          fontSize: "16px",
          borderRadius: "12px",
          textTransform: "none",
          boxShadow: "none",
          "&:hover": {
            boxShadow: "none",
          },
        },
      },
    },
  },
});
