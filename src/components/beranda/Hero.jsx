import { useSlideIn } from "@/hooks/useSlideIn";

export default function Hero() {
  const title = useSlideIn("up");
  const subtitle = useSlideIn("up", 150);
  const button = useSlideIn("up", 300);

  return (
    <section
      id="beranda"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center text-white">
        <h1
          ref={title.ref}
          className={`text-2xl font-bold leading-tight md:text-5xl ${title.className}`}
          style={title.style}
        >
          Selamat Datang <br />
          Website Resmi Desa Modern
        </h1>
        <h3
          ref={title.ref}
          className={`mt-2 text-1xl leading-tight md:text-2xl ${title.className}`}
          style={title.style}
        >
          Kecamatan Kanor, Bojonegoro - Jawa Timur
        </h3>

        <p
          ref={subtitle.ref}
          className={`mt-2 text-sm text-gray-200 md:text-base ${subtitle.className}`}
          style={subtitle.style}
        >
          sumber informasi terbaru tentang pemerintahan desa modern
        </p>

        <div
          ref={button.ref}
          className={`mt-8 ${button.className}`}
          style={button.style}
        >
          <a
            href="#layanan"
            className="group relative inline-block overflow-hidden rounded-md bg-blue-600 px-8 py-3 text-sm font-semibold text-white shadow-lg"
          >
            {/* Glass shine */}
            <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

            <span className="relative z-10 flex items-center gap-2">
              <i className="bi bi-grid"></i>
              Layanan
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
