import { getPost, getPosts } from "../api";

interface Post {
  id: number;
  title: string;
  body: string;
}

export const revalidate = 86400; // 24 часа
export const dynamicParams = true; // Разрешить генерацию новых путей

// Генерация статических путей во время сборки
export async function generateStaticParams() {
  const posts: Post[] = await getPosts();

  return posts.slice(0, 10).map((post) => ({
    id: String(post.id),
  }));
}

// Основной компонент страницы
export default async function PostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const post: Post = await getPost(id);

  return (
    <article className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-600">{post.body}</p>
    </article>
  );
}
