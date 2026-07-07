import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
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

            {/* About */}
      <section id="about" className="section bg-slate-100">
        <div className="container">
          <div className="max-w-3xl">

            <p className="text-orange-500 font-semibold">
              ABOUT TALLERES SIMON
            </p>

            <h2 className="text-4xl font-bold mt-3">
              Your Trusted Costa del Sol Garage
            </h2>

            <p className="mt-6 text-lg text-slate-600">
              Talleres Simon is an independent English-speaking garage
              providing professional vehicle servicing, repairs and
              diagnostics in Vélez-Málaga and the surrounding Costa del Sol
              area.
            </p>

            <p className="mt-4 text-lg text-slate-600">
              Our experienced technicians use modern equipment to diagnose
              problems quickly and provide honest, reliable repairs for cars,
              vans and 4x4 vehicles.
            </p>

          </div>
        </div>
      </section>
            {/* Why Choose Us */}
      <section className="section">
        <div className="container">

          <p className="text-orange-500 font-semibold">
            WHY CHOOSE US
          </p>

          <h2 className="text-4xl font-bold mt-3">
            Reliable Service You Can Count On
          </h2>

          <div className="grid md:grid-cols-4 gap-6 mt-8">

            {[
              "English Speaking Mechanics",
              "Years of Experience",
              "Modern Diagnostic Equipment",
              "Honest Advice & Fair Prices",
            ].map((item) => (
              <div
                key={item}
                className="p-6 rounded-xl bg-slate-100"
              >
                <h3 className="font-semibold text-lg">
                  {item}
                </h3>

                <p className="mt-3 text-slate-600">
                  Professional workmanship and customer-focused service.
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>
            {/* Why Choose Us */}
      <section className="section">
        <div className="container">

          <p className="text-orange-500 font-semibold">
            WHY CHOOSE US
          </p>

          <h2 className="text-4xl font-bold mt-3">
            Reliable Service You Can Count On
          </h2>

          <div className="grid md:grid-cols-4 gap-6 mt-8">

            {[
              "English Speaking Mechanics",
              "Years of Experience",
              "Modern Diagnostic Equipment",
              "Honest Advice & Fair Prices",
            ].map((item) => (
              <div
                key={item}
                className="p-6 rounded-xl bg-slate-100"
              >
                <h3 className="font-semibold text-lg">
                  {item}
                </h3>

                <p className="mt-3 text-slate-600">
                  Professional workmanship and customer-focused service.
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>
            {/* Contact */}
      <section id="contact" className="section bg-slate-950 text-white">
        <div className="container">

          <p className="text-orange-500 font-semibold">
            CONTACT US
          </p>

          <h2 className="text-4xl font-bold mt-3">
            Book Your Vehicle Service Today
          </h2>

          <p className="mt-6 text-slate-300 max-w-2xl">
            Contact Talleres Simon for servicing, repairs and diagnostics
            in Vélez-Málaga and the Costa del Sol.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-8">

            <div className="p-6 rounded-xl bg-slate-800">
              <h3 className="font-semibold text-xl">
                Call Us
              </h3>
              <p className="mt-2">
                +34 XXX XXX XXX
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-800">
              <h3 className="font-semibold text-xl">
                WhatsApp
              </h3>
              <p className="mt-2">
                Message us directly
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-800">
              <h3 className="font-semibold text-xl">
                Location
              </h3>
              <p className="mt-2">
                Vélez-Málaga, Spain
              </p>
            </div>

          </div>

        </div>
      </section>
      <Footer />
      <WhatsAppButton />

    </main>
  );
}

