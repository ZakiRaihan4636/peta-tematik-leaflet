import Navbar from './components/navbar';
import Footer from './components/footer';

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen p-7">
        {/* Konten utama website Anda */}
        <h2>Selamat datang di Peta Tematik Bali!</h2>
      </main>
      <Footer />
    </div>
  );
}
