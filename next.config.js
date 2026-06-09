/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: isGithubPages ? '/boks-it-website' : '',
  assetPrefix: isGithubPages ? '/boks-it-website/' : undefined,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
