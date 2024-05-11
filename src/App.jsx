import "./App.css";
import { MyProvider } from "./Context/MyContextProvider";
import Layout from "./Component/Layout";
import FIndCard from "./Component/FIndCard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <main>
        <MyProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />} />
              <Route path="/find" element={<FIndCard />} />
            </Routes>
          </BrowserRouter>
        </MyProvider>
      </main>
    </>
  );
}

export default App;
