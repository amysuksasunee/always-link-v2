import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/en",
        destination: "/",
        permanent: true,
      },
{
  source: "/th",
  destination: "/",
  permanent: true,
},
{
  source: "/fr",
  destination: "/",
  permanent: true,
},

    ];
  },
};

export default nextConfig;