import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components";
import { CountryPage, HomePage } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/:country" element={<CountryPage />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
