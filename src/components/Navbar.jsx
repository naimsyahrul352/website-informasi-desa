import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "@/assets/img/logo.png";

const menus = [
  { name: "Beranda", path: "/" },
  { name: "Profil Desa", path: "/profil-desa" },
  { name: "Layanan", path: "/layanan" },
  { name: "Pengaduan", path: "/pengaduan" },
  { name: "Berita", path: "/berita" },
  { name: "Potensi", path: "/potensi" },
  { name: "UMKM", path: "/umkm" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);

  // klik luar → tutup
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 z-50 w-full bg-blue-900 shadow">
      <div ref={wrapperRef} className="relative">
        {/* NAVBAR */}
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white font-bold text-blue-900">
              <img src={logo} alt="logo" />
            </div>
            <div className="leading-tight text-white">
              <p className="text-sm font-semibold">Desa Sukamaju</p>
              <p className="text-xs text-blue-200">Kecamatan Kabor</p>
            </div>
          </NavLink>

          {/* Desktop Menu */}
          <ul className="hidden items-center gap-8 md:flex">
            {menus.map((menu) => (
              <li key={menu.name}>
                <NavLink
                  to={menu.path}
                  className={({ isActive }) =>
                    `relative text-sm font-medium transition ${
                      isActive ? "text-white" : "text-blue-200"
                    } after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full`
                  }
                >
                  {menu.name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="relative z-50 flex h-9 w-9 flex-col items-center justify-center gap-1 md:hidden"
            aria-label="Toggle Menu"
          >
            <span
              className={`h-[2px] w-6 bg-white transition ${
                open ? "translate-y-[6px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-[2px] w-6 bg-white transition ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-[2px] w-6 bg-white transition ${
                open ? "-translate-y-[6px] -rotate-45" : ""
              }`}
            />
          </button>
        </nav>

        {/* MOBILE MENU */}
        <div
          className={`md:hidden overflow-hidden bg-blue-900 transition-all duration-300 ${
            open ? "max-h-[480px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col divide-y divide-blue-800 px-6 py-4">
            {menus.map((menu) => (
              <li key={menu.name}>
                <NavLink
                  to={menu.path}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block py-3 text-sm font-medium ${
                      isActive ? "text-white" : "text-blue-200"
                    }`
                  }
                >
                  {menu.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
