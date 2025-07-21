import { useRouter } from 'next/router';

export default function ArtworkPage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold">艺术品详情页</h1>
      <p>当前艺术品ID：{id}</p>
    </div>
  );
}
