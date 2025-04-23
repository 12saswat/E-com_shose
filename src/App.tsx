import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPages from "./LandingPages";
import { NotifyForm } from "./components/Pages/Notify-form";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPages />} />
        <Route
          path="/notifyForm"
          element={
            <div className="flex items-center justify-center min-h-screen">
              <NotifyForm className="w-full max-w-md" />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
