import Navbar from "@/components/Navbar";
export default function Home() {
  return (
    <main>
      <Navbar />
      <section className="min-h-screen bg-slate-950 text-white flex items-center">
        <div className="container">
          <p className="text-orange-500 font-semibold mb-4">
            ENGLISH SPEAKING GARAGE • COSTA DEL SOL
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Professional Vehicle Repairs
            <br />
            You Can Trust
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-slate-300">
            Talleres Simon provides expert servicing, diagnostics and repairs
            for cars, vans and 4x4 vehicles in Vélez-Málaga and the Costa del Sol.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="#contact"
              className="bg-orange-500 px-6 py-3 rounded-lg font-semibold"
            >
              Book a Service
            </a>

            <a
              href="tel:+34952000000"
              className="border border-white px-6 py-3 rounded-lg font-semibold"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="text-3xl font-bold">
            Our Services
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {[
              "Vehicle Servicing",
              "Engine Diagnostics",
              "Brake Repairs",
              "Clutches",
              "Air Conditioning",
              "Tyres",
            ].map((service) => (
              <div
                key={service}
                className="p-6 rounded-xl bg-slate-100"
              >
                <h3 className="text-xl font-semibold">
                  {service}
                </h3>
                <p className="mt-2 text-slate-600">
                  Professional repairs carried out by experienced technicians.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
