import "@fontsource/inter";

import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import MenuIcon from "@mui/icons-material/Menu";
import { Button, styled, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import { NavLink } from "react-router-dom";

import AnalyticsSVG from "../../assets/icons/Analytics.svg";
import LogoSVG from "../../assets/icons/Avatar.svg";
import CryptoSVG from "../../assets/icons/Crypto.svg";
import EcommerceSVG from "../../assets/icons/Ecommerce.svg";
import FileSVG from "../../assets/icons/File.svg";
import InvoicesSVG from "../../assets/icons/Invoices.svg";
import LogisticsSVG from "../../assets/icons/Logistics.svg";
import OrdersSVG from "../../assets/icons/Orders.svg";
import OverviewSVG from "../../assets/icons/Overview.svg";
import ProductsSVG from "../../assets/icons/Products.svg";

export default function ResponsiveDrawer() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const routes = ["/dashboard", "/analytics", "/ecommerce", "/crypto"];

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const mainActions = [
    { icon: <OverviewSVG />, text: "Overview" },
    { icon: <AnalyticsSVG />, text: "Analytics" },
    { icon: <EcommerceSVG />, text: "Ecommerce" },
    { icon: <CryptoSVG />, text: "Crypto" },
  ];

  const analyticsItems = [
    { icon: <ProductsSVG />, text: "Products" },
    { icon: <OrdersSVG />, text: "Orders" },
    { icon: <InvoicesSVG />, text: "Invoices" },
    { icon: <LogisticsSVG />, text: "Logistics" },
  ];

  const drawer = (
    <SidebarContainer>
      <Box>
        <SidebarHeader>
          <LogoSVG />
          <Box pl={"0.5rem"}>
            <Typography variant="h6" color="white" fontWeight={"700"}>
              Devias
            </Typography>
            <Typography variant="body2" color="#B5BCC4">
              Premium tier
            </Typography>
          </Box>
        </SidebarHeader>
      </Box>
      <Box>
        {mainActions.map((action, index) => (
          // <ActionButton key={action.text} variant="text" startIcon={action.icon}>
          //   {action.text}
          // </ActionButton>
          // <NavLink key={action.text} to={routes[index]}>
          //   <ActionButton
          //     variant="text"
          //     startIcon={action.icon}
          //   >
          //     {action.text}
          //   </ActionButton>
          // </NavLink>
          <NavLink
            key={action.text}
            to={routes[index]}
            style={{ textDecoration: "none" }}
            children={({ isActive }) => (
              <ActionButton variant="text" startIcon={action.icon} isActive={isActive}>
                {action.text}
              </ActionButton>
            )}
          />
        ))}
      </Box>
      <Typography color="#B5BCC4" mt={2} fontSize={"14px"} fontWeight={"600"}>
        ANALYTICS
      </Typography>
      <Box>
        {analyticsItems.map((item) => (
          <Box>
            <ActionButton
              key={item.text}
              variant="text"
              startIcon={item.icon}
              endIcon={<ChevronRightIcon style={{ color: "#4D5761" }} />}
            >
              {item.text}
            </ActionButton>
          </Box>
        ))}
      </Box>
      <DocumentationButton variant="outlined" startIcon={<FileSVG />}>
        Documentation
      </DocumentationButton>
    </SidebarContainer>
  );

  return (
    <Box>
      <DrawerIconContainer>
        <IconButton edge="start" onClick={handleDrawerToggle}>
          <MenuIcon style={{ color: "black" }} />
        </IconButton>
      </DrawerIconContainer>
      <Box>
        <CustomDrawerTemporary
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true,
          }}
        >
          {drawer}
        </CustomDrawerTemporary>

        <CustomDrawer variant="permanent" open>
          {drawer}
        </CustomDrawer>
      </Box>
    </Box>
  );
}

const DrawerIconContainer = styled("div")({
  marginLeft: "15px",
  paddingLeft: 0,
  display: "none",
  "@media (max-width: 1025px)": {
    display: "block",
  },
});
const SidebarHeader = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  marginBottom: "1rem",
}));

const CustomDrawer = styled(Drawer)(() => ({
  "& .MuiDrawer-paper": {
    boxSizing: "border-box",
    width: "280px",
  },
  "@media (min-width: 1025px)": {
    display: "block",
  },
  "@media (max-width: 1024px)": {
    display: "none",
  },
}));

const CustomDrawerTemporary = styled(Drawer)(() => ({
  "& .MuiDrawer-paper": {
    boxSizing: "border-box",
    width: "230px",
  },
  "@media (min-width: 1025px)": {
    display: "none",
  },
  "@media (max-width: 1024px)": {
    display: "block",
  },
}));

const SidebarContainer = styled(Box)(() => ({
  backgroundColor: "#1A2027",
  padding: "1rem",
  height: "100vh",
}));

// const ActionButton = styled(Button)(() => ({
//   justifyContent: "flex-start",
//   width: "100%",
//   marginBottom: "0.5rem",
//   textTransform: "none",
//   fontFamily: "Inter",
//   color: "#B5BCC4",
//   fontWeight: "600",
//   "& .MuiButton-startIcon": {
//     marginRight: "1.1rem",
//     marginLeft: "0.1rem",
//   },
//   "&:hover": {
//     backgroundColor: "#FFFFFF0A",
//   },
//   borderRadius: "12px",
//   "& .MuiButton-endIcon": {
//     marginLeft: "auto",
//   },
// }));
const ActionButton = styled(Button)<{ isActive: boolean }>(({ isActive }) => ({
  justifyContent: "flex-start",
  width: "100%",
  marginBottom: "0.5rem",
  textTransform: "none",
  fontFamily: "Inter",
  color: isActive ? "white" : "#B5BCC4",
  fontWeight: "600",
  "& .MuiButton-startIcon": {
    marginRight: "1.1rem",
    marginLeft: "0.1rem",
  },
  "&:hover": {
    backgroundColor: "#FFFFFF0A",
  },
  borderRadius: "12px",
  "& .MuiButton-endIcon": {
    marginLeft: "auto",
  },
  backgroundColor: isActive ? "#FFFFFF0A" : "transparent",
}));

const DocumentationButton = styled(Button)(() => ({
  textTransform: "none",
  borderColor: "white",
  borderRadius: 12,
  width: "100%",
  marginTop: "2rem",
  color: "white",
}));
