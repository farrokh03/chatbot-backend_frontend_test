import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "../Pages/Layout";
import Home from "../Pages/Homepage";
import Chat from "../Pages/Chat";
import Signin from "../Pages/Signin";
import Signup from "../Pages/Signup";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="Signin" element={<Signin />} />
            <Route path="/Signup" element={<Signup />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
