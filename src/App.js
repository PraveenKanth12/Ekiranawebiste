import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import PageNotFound from "./PageNotFound";
import Homecombo from "./Homecombo";
import Login from "./Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <>
            <Route path="/checkout" element={<Checkout />}></Route>
            <Route path="/" element={<Homecombo />}></Route>
            <Route path="*" element={<PageNotFound />} />
            <Route path="/login" element={<Login />} />
          </>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
