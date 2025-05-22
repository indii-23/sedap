import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Guest from "./pages/Guest";
// import CekMember from "./pages/CekMember";
// import GuestLayout from "./layouts/GuestLayout";
import "./assets/tailwind.css";


function App() {
  return (
    <Routes>
      <Route element={<GuestLayout />}>
        <Route path="/guest" element={<Guest />} />
        <Route path="/guest/member" element={<CekMember />} />
      </Route>
    </Routes>
  );
}

export default App;