import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import Beranda from "@/pages/Beranda";
import ProfilDesa from "@/pages/ProfilDesa";

export default function App() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <>
      <Navbar />

      <main className={isHome ? "" : "pt-20"}>
        <Routes>
          <Route path="/" element={<Beranda />} />
          <Route path="/profil-desa" element={<ProfilDesa />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}
