'use client';
import ContainerPage from '@/components/Container';
import styled from 'styled-components';
import Image from 'next/image';
import heroImage from '@/assets/bali.svg';

const StyledHome = styled.div`
  /* Hero Section */
  .hero {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 0;

    @media (max-width: 1024px) {
      flex-direction: column-reverse;
      text-align: center;
    }
  }

  .hero-content {
    max-width: 600px;

    @media (max-width: 1024px) {
      margin-bottom: 2rem;
    }
  }

  .hero-content h1 {
    font-size: 2.5rem;
    font-weight: bold;
    color: #111827;
    margin-bottom: 1rem;

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  .hero-content p {
    color: #6b7280;
    margin-bottom: 1.5rem;
    font-size: 1rem;

    @media (max-width: 768px) {
      font-size: 0.875rem;
    }
  }

  .hero-image {
    width: 50%;

    @media (max-width: 1024px) {
      width: 80%;
    }

    @media (max-width: 768px) {
      width: 100%;
    }
  }

  .features {
    text-align: center;
    padding: 4rem 0;

    h2 {
      font-size: 2rem;
      font-weight: bold;
      color: #111827;
      margin-bottom: 1rem;

      @media (max-width: 768px) {
        font-size: 1.5rem;
      }
    }

    p {
      color: #6b7280;
      margin-bottom: 2rem;
      font-size: 1rem;

      @media (max-width: 768px) {
        font-size: 0.875rem;
      }
    }

    .feature-list {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;

      @media (max-width: 1024px) {
        grid-template-columns: repeat(2, 1fr);
      }

      @media (max-width: 768px) {
        grid-template-columns: 1fr;
      }
    }

    .feature-item {
      background-color: #ffffff;
      padding: 2rem;
      border-radius: 0.5rem;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease;

      &:hover {
        transform: translateY(-5px);
      }

      h3 {
        font-size: 1.25rem;
        font-weight: bold;
        margin-bottom: 0.5rem;

        @media (max-width: 768px) {
          font-size: 1rem;
        }
      }

      p {
        color: #6b7280;
        font-size: 0.875rem;

        @media (max-width: 768px) {
          font-size: 0.75rem;
        }
      }
    }
  }
`;

export default function Home() {
  return (
    <div>
      <StyledHome>
        <ContainerPage>
          {/* Hero Section */}
          <section className="hero">
            <div className="hero-content">
              <h1>Peta Tematik Pulau Bali</h1>
              <p>
                Peta tematik Pulau Bali dirancang untuk memberikan gambaran
                komprehensif tentang berbagai data penting yang mencakup jumlah
                turis, destinasi wisata, populasi, masjid, sekolah tinggi, serta
                pembagian administratif hingga tingkat kabupaten dan kecamatan.
              </p>
              <p>
                Peta ini mengintegrasikan data yang akurat dan terkini, sehingga
                menjadi alat yang ideal untuk penelitian, perencanaan
                pembangunan, atau sekadar menambah wawasan Anda tentang
                keindahan dan potensi Pulau Bali.
              </p>
              <button
                style={{
                  backgroundColor: '#10b981',
                  color: '#ffffff',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '0.5rem',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                Get Started
              </button>
            </div>
            <div className="hero-image">
              <Image src={heroImage} alt="Hero" />
            </div>
          </section>
        </ContainerPage>
      </StyledHome>
    </div>
  );
}
