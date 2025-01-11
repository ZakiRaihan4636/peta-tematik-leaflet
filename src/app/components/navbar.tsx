import Link from 'next/link';

const Navbar = () => {
  return (
    <header className="flex items-center justify-between w-full py-4 px-6 bg-white shadow-md">
      <div className="flex items-center gap-4">
        {/* <Image
          src="/bali-logo.svg" // Ganti dengan logo Bali atau SIG Anda
          alt="Bali SIG Logo"
          width={50}
          height={50}
        /> */}
        <h1 className="text-2xl font-bold text-primary">
          Bali SIG - Peta Tematik
        </h1>
      </div>
      <nav>
        <ul className="flex gap-6 text-sm">
          <li>
            <Link href="#home" className="hover:text-highlight">
              Beranda
            </Link>
          </li>
          <li>
            <Link href="#about" className="hover:text-highlight">
              Tentang
            </Link>
          </li>
          <li>
            <Link href="#features" className="hover:text-highlight">
              Fitur
            </Link>
          </li>
          <li>
            <Link href="#contact" className="hover:text-highlight">
              Kontak
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
