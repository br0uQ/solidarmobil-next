/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Basic redirect
      {
        source: "/umfrage",
        destination: "https://nextcloud.cloudwolke.top/apps/forms/s/g4aJAGbbneQiXF2XDKPTCMyK",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
