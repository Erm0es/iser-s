import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<div>Hem</div>} />
          <Route path="/om-oss" element={<div>Om oss</div>} />
          <Route path="/tjanster" element={<div>Tjänster</div>} />
          <Route path="/galleri" element={<div>Galleri</div>} />
          <Route path="/kontakt" element={<div>Kontakt</div>} />
        </Routes>
      </main>
    </>
  );
}

