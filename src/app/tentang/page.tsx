'use client';

import ContainerPage from '@/components/Container';
import React from 'react';
import styled from 'styled-components';
import rafiqImage from '@/assets/rafiq.jpeg';
import lastriImage from '@/assets/lastri.jpeg';
import zakiImage from '@/assets/zaki.jpeg';
import anisaImage from '@/assets/anisa.jpg';

import Image from 'next/image';
import { GitHub, Instagram } from 'react-feather';
import Link from 'next/link';

const StyledComponent = styled.div`
  .title h1 {
    position: relative;
    margin-bottom: 1rem;
    padding-bottom: 1rem;

    &::after {
      content: '';
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: 0;
      width: 100px;
      height: 4px;
      background-color: #000;
    }

    span {
      color: #10b981;
    }
  }

  /* Deskripsi */
  .deskripsi {
    margin-top: 0.5rem;
    text-align: center;
  }

  .content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    margin-top: 2rem;

    /* Responsif untuk layar kecil */
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }

    /* Responsif untuk tablet */
    @media (min-width: 768px) and (max-width: 1023px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  /* Card Style */
  .card {
    display: flex;
    align-items: center;
    background-color: #f8fafc;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out;
    overflow: hidden;

    /* Responsif untuk layar kecil */
    @media (max-width: 968px) {
      flex-direction: column;
      text-align: center;
    }
  }

  .card-img {
    max-width: 200px;
    width: 100%;
    height: 200px;
    overflow: hidden;
    margin-right: 1rem;

    /* Responsif untuk layar kecil */
    @media (max-width: 968px) {
      margin: 0 auto 1rem auto;
      max-width: 100%;
    }
  }

  .card-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  /* Card Content */
  .card-content {
    display: flex;
    flex-direction: column;
    padding: 1rem;

    @media (max-width: 768px) {
      padding: 1rem;
    }
  }

  .card-content h3 {
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
    font-weight: 700;
  }
  .card-content h5 {
    color: #10b981;
  }

  .card-sosmed {
    margin-top: 1rem;
    gap: 1rem;
    display: flex;

    @media (max-width: 968px) {
      justify-content: center;
    }
  }
`;

const dataTeam = [
  {
    id: 1,
    name: 'Muhammad Zaki Raihan',
    img: zakiImage,
    role: 'Backend Developer',
    desc: 'Mengembangkan sistem backend untuk mendukung kebutuhan aplikasi.',
    instagram: 'https://www.instagram.com/_raihanddz/',
    github: 'https://github.com/zakiraihan4636',
  },

  {
    id: 2,
    name: 'Muhammad Rafiq',
    img: rafiqImage,
    role: 'Frontend Developer',
    desc: 'Mengembangkan antarmuka pengguna yang interaktif dan ',
    instagram: 'https://www.instagram.com/m.rafiqsans/',
    github: 'https://github.com/rafiq451',
  },
  {
    id: 3,
    name: 'Lastri',
    img: lastriImage,
    role: 'UI/UX Designer',
    desc: 'Merancang pengalaman pengguna yang intuitif dan menarik.',
    instagram: 'https://www.instagram.com/callme.three/',
    github: 'https://github.com/AsriLastri04',
  },
  {
    id: 4,
    name: 'Anisa Maulida',
    img: anisaImage,
    role: 'Project Manager',
    desc: 'Mengelola tim dan memastikan proyek selesai tepat waktu.',
    instagram: 'https://www.instagram.com/_maulidaaar/',
    github: 'https://github.com/annisam23',
  },
];

const AbaoutPage = () => {
  return (
    <StyledComponent>
      <ContainerPage>
        <section id="tentang" className="py-5">
          {/* Judul dan deskripsi */}
          <div className="title text-center">
            <div className="my-2">
              <h3 className="uppercase font-semibold text-xl">OUR TEAM</h3>
            </div>
            <h1 className="my-3 text-3xl font-bold">
              Profile <span> Pengembang</span>
            </h1>
            <section className="deskripsi">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, distinctio?</p>
            </section>
          </div>

          {/* Content */}
          <div className="content">
            {dataTeam.map((member) => (
              <section className="card" key={member.id}>
                <div className="card-img">
                  <Image src={member.img} alt={member.name} />
                </div>
                <div className="card-content">
                  <h3>{member.name}</h3>
                  <h5 className="mb-2 font-semibold ">{member.role}</h5>
                  <p>{member.desc}</p>
                  <div className="card-sosmed">
                    <Link href={member.instagram} target="_blank" rel="noopener noreferrer">
                      <Instagram color="#10b981" />
                    </Link>
                    <Link href={member.github} target="_blank" rel="noopener noreferrer">
                      <GitHub color="#10b981" />
                    </Link>
                  </div>
                </div>
              </section>
            ))}
          </div>
        </section>
      </ContainerPage>
    </StyledComponent>
  );
};

export default AbaoutPage;
