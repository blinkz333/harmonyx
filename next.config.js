module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/dashbord',
        permanent: true,
      },
    ]
  },
  publicRuntimeConfig: {
    site: {
      name: 'Hamonyx',
      url:
        process.env.NODE_ENV === 'development'
          ? 'http://localhost:3000'
          : 'https://earvinpiamonte-nextjs-tailwindcss-template.vercel.app',
      title: 'Hamonyx',
      description: 'Hamonyx',
      socialPreview: '/images/preview.png',
    },
  },
  swcMinify: true,
};
