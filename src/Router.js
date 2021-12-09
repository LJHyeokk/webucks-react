import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import List from "./pages/list/List";
import Login from "./pages/login/Login";
import Detail from "./pages/detail/Detail";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/List" element={<List />} />
        <Route path="/Detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
