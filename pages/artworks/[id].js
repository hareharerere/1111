// /pages/artworks/[id].js

import { useRouter } from 'next/router';
import artworks from '../../data/artworks';

export default function ArtworkPage({ artwork }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!artwork) {
    return <div>Artwork not found.</div>;
  }

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-2">{artwork.title}</h1>
      <p className="mb-2">By: {artwork.artist}</p>
      <p className="mb-2">Year: {artwork.year}</p>
      <p className="mb-2">Medium: {artwork.medium}</p>
      <p className="mb-2">Size: {artwork.size}</p>
      <p className="mb-2">Price: {artwork.price || 'Not for sale'}</p>
      <img src={artwork.image} alt={artwork.title} className="mt-4 max-w-full" />
    </div>
  );
}

export async function getStaticPaths() {
  const artworkKeys = Object.keys(artworks);
  const paths = artworkKeys.map((key) => ({
    params: { id: key },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const artwork = artworks[params.id] || null;

  return {
    props: {
      artwork,
    },
  };
}
