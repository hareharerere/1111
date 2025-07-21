// /pages/artists/[id].js

import { useRouter } from 'next/router';
import artists from '../../data/artists';

export default function ArtistPage({ artist }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!artist) {
    return <div>Artist not found.</div>;
  }

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-4">{artist.name}</h1>
      <p className="text-lg">{artist.bio}</p>
    </div>
  );
}

export async function getStaticPaths() {
  const artistKeys = Object.keys(artists);
  const paths = artistKeys.map((key) => ({
    params: { id: key },
  }));

  return {
    paths,
    fallback: true, // or false
  };
}

export async function getStaticProps({ params }) {
  const artist = artists[params.id] || null;

  return {
    props: {
      artist,
    },
  };
}
