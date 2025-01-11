
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center py-8 bg-gray-800 text-white">
      <div className="flex items-center gap-2 mb-4">
        <Image
          src="/bali-logo.svg" // Ganti dengan logo Bali atau SIG Anda
          alt="Bali SIG Logo"
          width={50}
          height={50}
        />
        <span className="text-lg font-bold">Bali SIG</span>
      </div>
      <p className="text-center text-sm sm:text-base mb-4">
        © 2025 Bali SIG. Semua hak cipta dilindungi.
      </p>
      <div className="flex gap-6">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Next.js logo"
            width={16}
            height={16}
          />
          Powered by Next.js
        </a>
      </div>
    </footer>
  );
};

export default Footer;
