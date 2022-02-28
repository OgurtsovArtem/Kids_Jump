import "./App.css";
import MainPage from "../pages/MainPage";
import TestDrivePage from "../pages/TestDrivePage";
import ForKidsPage from "../pages/ForKidsPage";
import ContactsUsPage from "../pages/ContactsUsPage";
import GamesPage from "../pages/GamesPage";
import FaqPage from "../pages/FaqPage";
import NotFoundPage from "../pages/NotFoundPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route path="/test-drive" element={<TestDrivePage />} />
        <Route path="/for-kids" element={<ForKidsPage />} />
        <Route path="/contacts-us" element={<ContactsUsPage />} />
        <Route path="/games" element={<GamesPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
