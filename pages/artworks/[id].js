import { useRouter } from 'next/router';
import artworks from '../../data/artworks';

export async function getStaticPaths() {
  const paths = artworks.map((art) => ({
    params: { id: art.id.toString() },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const artwork = artworks.find((a) => a.id.toString() === params.id);
  return { props: { artwork } };
}

export default function ArtworkDetail({ artwork }) {
  if (!artwork) return <div>作品未找到</div>;
  return (
    <div className="p-6">
      <img src={artwork.image} alt={artwork.title} className="w-full max-w-md" />
      <h1 className="text-3xl font-bold mt-4">{artwork.title}</h1>
      <p className="text-gray-700">{artwork.description}</p>
      <p className="text-sm text-gray-500">创作时间：{artwork.year}</p>
      <p className="text-sm text-gray-500">媒材：{artwork.medium}</p>
      <p className="text-sm text-gray-500">尺寸：{artwork.dimensions}</p>
    </div>
  );
}
