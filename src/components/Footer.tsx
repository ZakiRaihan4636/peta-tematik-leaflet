'use client';

import React from 'react';
import styled from 'styled-components';
import { Facebook, Instagram, Twitter, GitHub } from 'react-feather';

const FooterContainer = styled.footer`
  background-color: #1f2937;
  color: #f3f4f6;
  padding: 2rem 1rem;
  text-align: center;

  .footer-content {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;

    @media (min-width: 768px) {
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;
    }
  }

  .logo {
    font-size: 1.5rem;
    font-weight: bold;
    color: #10b981;
  }

  .nav {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    @media (min-width: 768px) {
      flex-direction: row;
    }
  }

  .nav a {
    color: #f3f4f6;
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
      color: #10b981;
    }
  }

  .social-icons {
    display: flex;
    gap: 1rem;
  }

  .social-icons a {
    color: #f3f4f6;
    font-size: 1.5rem;
    transition: color 0.3s;

    &:hover {
      color: #10b981;
    }
  }

  .credits {
    margin-top: 2rem;
    font-size: 0.875rem;
    color: #9ca3af;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <div className="footer-content">
        {/* Logo */}
        <div className="logo">MyCompany</div>

        {/* Navigation Links */}
        <nav className="nav">
          <a href="/kecamatan">Kecamatan</a>
          <a href="/kabupaten">Kabupaten</a>
          <a href="/tentang">Tentang Kami</a>
        </nav>

        {/* Social Media Icons */}
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <Facebook />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <Instagram />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <Twitter />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <GitHub />
          </a>
        </div>
      </div>

      {/* Credits */}
      <div className="credits">&copy; {new Date().getFullYear()} MyCompany. All rights reserved.</div>
    </FooterContainer>
  );
};

export default Footer;
