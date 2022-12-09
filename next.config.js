/* eslint-disable @typescript-eslint/explicit-function-return-type */

const nextConfig = {
  images: {
    domains: ['minimal.gallery', `${process.env.NEXT_PUBLIC_SUPABASE_ENDPOINT}`],
  },

  reactStrictMode: true,

  compiler: {
    removeConsole: {
      exclude: ['error'],
    },
  },

  swcMinify: true,

  async rewrites() {
    // eslint-disable-next-line no-console
    return [
      {
        destination: `https://${process.env.NEXT_PUBLIC_SUPABASE_ENDPOINT}/rest/v1/projects?apikey=${process.env.NEXT_PUBLIC_SUPABASE_PUBLIC_KEY}`,
        source: '/projects',
      },
      {
        destination: `https://${process.env.NEXT_PUBLIC_SUPABASE_ENDPOINT}/rest/v1/projects:path*&apikey=${process.env.NEXT_PUBLIC_SUPABASE_PUBLIC_KEY}`,
        source: '/projects/:path*',
      },
      {
        destination: `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=https://:path*&key=${process.env.NEXT_PUBLIC_GOOGLE_KEY}`,
        source: '/psi/:path*',
      },
      {
        destination: `https://api.coingecko.com/api/v3/simple/price?ids=:path*&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true`,
        source: '/coin/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
