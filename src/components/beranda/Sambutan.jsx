import { useSlideIn } from "@/hooks/useSlideIn";
import kades from "@/assets/img/orang1.png";

export default function Sambutan() {
  const title = useSlideIn("up");
  const photo = useSlideIn("up", 150);
  const text = useSlideIn("up", 300);

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-5xl px-8 sm:px-10 md:px-6">
        {/* Heading */}
        <div
          ref={title.ref}
          className={`mb-10 text-center ${title.className}`}
          style={title.style}
        >
          <h2 className="text-xl font-semibold text-slate-800 sm:text-2xl md:text-3xl">
            Sambutan Kepala Desa
          </h2>
          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-blue-600" />
        </div>

        {/* Content */}
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          {/* Foto + Identitas */}
          <div
            ref={photo.ref}
            className={`flex justify-center md:order-2 ${photo.className}`}
            style={photo.style}
          >
            <div className="w-fit rounded-xl border border-slate-100 bg-white p-4 shadow-lg">
              <img
                src={kades}
                alt="Kepala Desa"
                className="h-64 w-52 rounded-lg object-cover sm:h-72 sm:w-56 md:h-80 md:w-64"
                loading="lazy"
              />

              <div className="mt-4 text-center">
                <p className="text-sm font-semibold text-slate-800">
                  Ahmad Fauzi, S.Sos
                </p>
                <p className="text-xs text-slate-500">
                  Kepala Desa Modern <br />
                  Periode 2025 – 2033
                </p>
              </div>
            </div>
          </div>

          {/* Teks Sambutan */}
          <div
            ref={text.ref}
            className={`text-justify text-sm leading-relaxed text-slate-600 sm:text-base ${text.className}`}
            style={text.style}
          >
            <p className="text-sm font-medium text-slate-700 sm:text-base">
              Assalamu’alaikum Warahmatullahi Wabarakatuh.
            </p>

            <p className="mt-4">
              Puji syukur kita panjatkan ke hadirat Allah SWT, karena atas
              rahmat-Nya website Desa ini dapat hadir sebagai sarana informasi
              dan pelayanan bagi masyarakat.
            </p>

            <p className="mt-4">
              Kami berharap website ini dapat menjadi media yang transparan,
              informatif, serta mampu mendekatkan pelayanan pemerintah desa
              kepada seluruh warga.
            </p>

            <p className="mt-6 font-semibold text-slate-800 text-right">
              — Kepala Desa
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
