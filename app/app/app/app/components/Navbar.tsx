export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/90 backdrop-blur text-white">
      <div className="container flex items-center justify-between py-5">

        <div className="text-2xl font-bold">
          Talleres <span className="text-orange-500">Simon</span>
        </div>

        <div className="hidden md:flex gap-8">
          <a href="/" className="hover:text-orange-500">
            Home
          </a>

          <a href="#services" className="hover:text-orange-500">
            Services
          </a>

          <a href="#about" className="hover:text-orange-500">
            About
          </a>

          <a href="#contact" className="hover:text-orange-500">
            Contact
          </a>
        </div>

        <a
          href="tel:+34952000000"
          className="bg-orange-500 px-4 py-2 rounded-lg font-semibold"
        >
          Call Now
        </a>

      </div>
    </nav>
  );
}
