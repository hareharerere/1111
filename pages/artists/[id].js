import { useRouter } from 'next/router';

export default function ArtistPage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold">艺术家详情页</h1>
      <p>当前艺术家ID：{id}</p>
    </div>
  );
}
