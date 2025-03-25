import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import CursorFollower from "./components/onMouseEvents/CursorFollower";

function App() {
  return (
    <div

    // style={{ width: "100vw", height: "100vh", position: "relative" }}
    >
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </div>
  );
}

export default App;
