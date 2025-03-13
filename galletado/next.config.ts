import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    REACT_APP_FIREBASE_API_KEY: process.env.REACT_APP_FIREBASE_API_KEY
  }
  /* config options here */
};

export default nextConfig;
