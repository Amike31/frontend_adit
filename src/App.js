import React from "react";
import { Route, Routes } from 'react-router-dom';
import Container from "./components/Container";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from './pages/Home';
import History from "./pages/History";
import HistoryDetail from "./pages/HistoryDetail";

function App() {
  // if path is contain /auth, dont render the container
  // first check the path
  const path = window.location.pathname;
  console.log(path);

  return (
    <Container
      isAuth={path.includes('/auth') ? true : false}
    >
      <Routes>
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/history/:id" element={<HistoryDetail />} />
      </Routes>
    </Container>
  );
}

export default App;
