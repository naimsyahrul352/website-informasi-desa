import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import Beranda from "@/pages/Beranda";
import ProfilDesaModern from "@/pages/ProfilDesaModern";
import Layanan from "./pages/Layanan";
import Pengaduan from "./pages/Pengaduan";
import Berita from "./pages/Berita";
import DetailBerita from "./pages/DetailBerita";
import Potensi from "./pages/Potensi";
import DetailPotensi from "./pages/DetailPotensi";
import Umkm from "./pages/Umkm";
import DetailUmkm from "./pages/DetailUmkm";
import ScrollToTop from "./components/ScrollTop";

export default function App() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <>
      <Navbar />
      <ScrollToTop />
      <main className={isHome ? "" : "pt-20"}>
        <Routes>
          <Route path="/" element={<Beranda />} />
          <Route path="/profil-desa" element={<ProfilDesaModern />} />
          <Route path="/layanan" element={<Layanan />} />
          <Route path="/pengaduan" element={<Pengaduan />} />
          <Route path="/berita" element={<Berita />} />
          <Route path="/berita/:id" element={<DetailBerita />} />
          <Route path="/potensi" element={<Potensi />} />
          <Route path="/potensi/:id" element={<DetailPotensi />} />
          <Route path="/umkm" element={<Umkm />} />
          <Route path="/umkm/:id" element={<DetailUmkm />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
