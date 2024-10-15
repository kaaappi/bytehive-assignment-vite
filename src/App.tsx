import { styled } from "@mui/material/styles";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import SideNav from "./components/nav/SideNav.tsx";
import Analytics from "./pages/Analytics";
import Crypto from "./pages/Crypto";
import Dashboard from "./pages/Dashboard";
import Ecommerce from "./pages/Ecommerce";
import Invoices from "./pages/Invoices";
import Logistics from "./pages/Logistics";
import Orders from "./pages/Orders";
import Products from "./pages/Products";
import PrivateRoute from "./pages/routes/PrivateRoute.tsx";

function App() {
  return (
    <BrowserRouter>
      <SideNav />
      <ContentContainer>
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />}></Route>
            <Route path="/analytics" element={<Analytics />}></Route>
            <Route path="/ecommerce" element={<Ecommerce />}></Route>
            <Route path="/crypto" element={<Crypto />}></Route>
            <Route path="/products" element={<Products />}></Route>
            <Route path="/orders" element={<Orders />}></Route>
            <Route path="/invoices" element={<Invoices />}></Route>
            <Route path="/logistics" element={<Logistics />}></Route>
          </Route>
        </Routes>
      </ContentContainer>
    </BrowserRouter>
  );
}

const ContentContainer = styled("div")({
  marginLeft: "280px",
  paddingLeft: "2rem",
  "@media (max-width: 1025px)": {
    marginLeft: "10px",
    paddingLeft: 0,
  },
});
export default App;
