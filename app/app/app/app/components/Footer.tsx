export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white py-8">
      <div className="container">

        <div className="flex flex-col md:flex-row justify-between gap-6">

          <div>
            <h2 className="text-2xl font-bold">
              Talleres <span className="text-orange-500">Simon</span>
            </h2>

            <p className="mt-3 text-slate-400">
              Professional vehicle repairs and servicing
              on the Costa del Sol.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">
              Contact
            </h3>

            <p className="mt-2 text-slate-400">
              Vélez-Málaga, Spain
            </p>

            <p className="text-slate-400">
              English Speaking Garage
            </p>
          </div>

        </div>

        <div className="border-t border-slate-800 mt-8 pt-6 text-slate-500 text-sm">
          © {new Date().getFullYear()} Talleres Simon. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
