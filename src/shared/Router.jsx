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
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/games" element={<CardList />} />
        <Route path="/game/submit" element={<Edit />} />
        <Route path="/games/:gameId" element={<Detail />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </>
  );
};

export default Router;
