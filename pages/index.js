import HeroBanner from '../components/HeroBanner';
import ArtworkCard from '../components/ArtworkCard';
import ArtistCard from '../components/ArtistCard';
import artworks from '../data/artworks';
import artists from '../data/artists';
import news from '../data/news';

export default function Home() {
  return (
    <div className="p-6 space-y-10">
      <HeroBanner />

      <section>
        <h2 className="text-2xl font-bold mb-4">推荐艺术作品</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {artworks.map((art) => (
            <ArtworkCard key={art.id} artwork={art} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">推荐艺术家</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {artists.map((artist) => (
            <ArtistCard key={artist.id} artist={artist} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">新闻 / 展览</h2>
        <ul className="space-y-2">
          {news.map((n) => (
            <li key={n.id} className="border-b pb-2">
              <h3 className="text-lg font-semibold">{n.title}</h3>
              <p className="text-sm text-gray-600">{n.date}</p>
              <p className="text-sm">{n.summary}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
