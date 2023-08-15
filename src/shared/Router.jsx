import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import CardList from "../pages/CardList";
import Detail from "../pages/Detail";
import Error from "../pages/Error";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Edit from "../pages/Edit";
import Home from "../pages/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/project02_99_balanceGame2/" element={<Home />} />
        <Route path="/project02_99_balanceGame2/login" element={<Login />} />
        <Route
          path="/project02_99_balanceGame2/signup"
          element={<Register />}
        />
        <Route path="/project02_99_balanceGame2/games" element={<CardList />} />
        <Route
          path="/project02_99_balanceGame2/game/submit"
          element={<Edit />}
        />
        <Route
          path="/project02_99_balanceGame2/games/:gameId"
          element={<Detail />}
        />
        <Route path="/*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
