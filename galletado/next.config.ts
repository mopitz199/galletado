import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    REACT_APP_FIREBASE_API_KEY: process.env.REACT_APP_FIREBASE_API_KEY
  },
  images: {
    domains: ['firebasestorage.googleapis.com'],
  },
  /* config options here */
};

export default nextConfig;
