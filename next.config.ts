import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true, // Aktifkan SSR untuk styled-components
  },
};

export default nextConfig;
