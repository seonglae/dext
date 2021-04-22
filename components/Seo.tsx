import Head from 'next/head'

const sites = {
  'react-spring': {
    title: 'React Spring',
    image: 'https://docs.pmnd.rs/react-spring/share.jpg',
    description: 'Bring your components to life with simple spring animation primitives for React',
  },
  'react-three-fiber': {
    title: 'React Three Fiber',
    // image: "https://docs.pmnd.rs/react-spring/share,jpg",
    description: 'React-three-fiber is a React renderer for three.js.',
  },
  drei: {
    title: 'Drei',
    image: 'https://docs.pmnd.rs/logo-drei.jpg',
    description:
      'Drei is a growing collection of useful helpers and abstractions for react-three-fiber.',
  },
  zustand: {
    title: 'Zustand',
    description:
      'Zustand is a small, fast and scalable bearbones state-management solution, it has a comfy api based on hooks',
    image: 'https://docs.pmnd.rs/zustand-bear.png',
  },
}

export default function SEO({ query }) {
  const name = query.slug[0]
  const currentSeo = sites[name]

  return currentSeo ? (
    <Head>
      <title> {currentSeo.title} Documentation</title>
      <meta property="og:site_name" content={`${currentSeo.title} Documentation`} />
      <meta name="description" content={currentSeo.description} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={`https://docs.pmnd.rs/${query.slug[0]}`} />
      <meta property="og:title" content={`${currentSeo.title} Documentation`} />
      <meta property="og:description" content={currentSeo.description} />
      <meta property="og:image" content={currentSeo.image} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={`https://docs.pmnd.rs/${query.slug[0]}`} />
      <meta property="twitter:title" content={`${currentSeo.title} Documentation`} />
      <meta property="twitter:description" content={currentSeo.description} />
      <meta property="twitter:image" content={currentSeo.image} />
    </Head>
  ) : null
}