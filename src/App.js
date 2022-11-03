import React from "react";
import "./App.css";
import MainNavigation from "./components/MainNavigation";
import "bootstrap/dist/css/bootstrap.min.css";
import { useThemeHook } from "./store/ThemeProvider";
import { Router } from "@reach/router";
import Home from "./pages/Home";
import Cart from "./pages/Cart";


function App() {
  const [theme] = useThemeHook();
  return (
    <main
      className={theme ? "bg-black" : "bg-light-2"}
      style={{ height: "100vh", overflowY: "auto" }}
    >
      <MainNavigation />
      <Router >
        <Home path="/"/>
        <Cart path="/cart" />
      </Router>
    </main>
  );
}

export default App;
