interface Post {
  id: number;
  title: string;
  body: string;
}

export const revalidate = 1200; // Ревалидация каждые 60 секунд
export const dynamicParams = true; // Разрешить генерацию новых путей

// Генерация статических путей во время сборки
export async function generateStaticParams() {
  const posts: Post[] = await fetch(
    "https://jsonplaceholder.typicode.com/posts",
  ).then((res) => res.json());

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

  const post: Post = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      next: { tags: ["posts"] }, // Теги для ручной ревалидации
    },
  ).then((res) => res.json());

  return (
    <article className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-600">{post.body}</p>
    </article>
  );
}
