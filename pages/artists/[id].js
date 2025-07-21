import { useRouter } from 'next/router';
import artists from '../../data/artists';

export async function getStaticPaths() {
  const paths = artists.map((artist) => ({
    params: { id: artist.id.toString() },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const artist = artists.find((a) => a.id.toString() === params.id);
  return { props: { artist } };
}

export default function ArtistDetail({ artist }) {
  if (!artist) return <div>艺术家未找到</div>;
  return (
    <div className="p-6">
      <img src={artist.image} alt={artist.name} className="w-32 h-32 rounded-full mb-4" />
      <h1 className="text-3xl font-bold">{artist.name}</h1>
      <p className="text-gray-600">{artist.bio}</p>
    </div>
  );
}
