import { useState } from "react";
import logo from "@/assets/img/logo-desa.png";

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-blue-800 md:border-none">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-4 text-left text-sm font-semibold text-white md:cursor-default md:py-0"
      >
        {title}
        <i
          className={`bi bi-chevron-down transition-transform md:hidden ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all md:block ${
          open ? "max-h-96 pb-4" : "max-h-0 md:max-h-none"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-slate-200">
      {/* Main */}
      <div className="mx-auto max-w-7xl px-6 py-12 sm:px-10 md:px-6">
        <div className="grid gap-6 md:grid-cols-4 md:gap-10">
          {/* Logo Desa */}
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white font-bold text-blue-900">
                <img src={logo} alt="logo" />
              </div>
              <div>
                <p className="text-base font-semibold text-white">
                  Desa Modern
                </p>
                <p className="text-sm text-blue-200">Kecamatan Kanor</p>
              </div>
            </div>

            <p className="mt-4 hidden text-sm leading-relaxed text-blue-200 md:block">
              Website resmi Desa Modern sebagai media informasi dan pelayanan
              masyarakat.
            </p>
          </div>

          {/* Menu */}
          <Accordion title="Menu">
            <ul className="space-y-2 text-sm text-blue-200">
              {[
                "Beranda",
                "Profil Desa",
                "Layanan",
                "Pengaduan",
                "Berita",
                "Kontak",
              ].map((item, i) => (
                <li key={i}>
                  <a href="#" className="hover:text-white">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </Accordion>

          {/* Kontak */}
          <Accordion title="Kontak Desa">
            <ul className="space-y-3 text-sm text-blue-200">
              <li className="flex gap-3">
                <i className="bi bi-telephone-fill mt-1" />
                (0353) 123456
              </li>
              <li className="flex gap-3">
                <i className="bi bi-envelope-fill mt-1" />
                desasukamaju@email.com
              </li>
              <li className="flex gap-3">
                <i className="bi bi-clock-fill mt-1" />
                Senin – Jumat, 08.00 – 15.00
              </li>
              <li className="flex gap-3">
                <i className="bi bi-geo-alt-fill mt-1" />
                Jl. Raya Desa Modern, Kanor
              </li>
            </ul>
          </Accordion>

          {/* Sosial Media */}
          <Accordion title="Media Sosial">
            <div className="flex gap-4">
              <a className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-800 hover:bg-blue-700">
                <i className="bi bi-instagram" />
              </a>
              <a className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-800 hover:bg-blue-700">
                <i className="bi bi-facebook" />
              </a>
              <a className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-800 hover:bg-blue-700">
                <i className="bi bi-youtube" />
              </a>
            </div>
          </Accordion>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-blue-800 py-4 text-center text-xs text-blue-200">
        © 2025 | Muhammad Syahrul Naim
      </div>
    </footer>
  );
}
