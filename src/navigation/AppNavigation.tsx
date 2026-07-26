import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppRoute from "./AppRoute";
import Home from "../screens/primary/Home";
import SiteLayout from "./layout/SiteLayout";
import ScrollToTop from "../components/ScrolltoTop";
import { HeaderProvider } from "../context/HeaderContext";

const AppNavigation = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <HeaderProvider>
              <AppRoute component={Home} layout={SiteLayout} />
            </HeaderProvider>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppNavigation;
