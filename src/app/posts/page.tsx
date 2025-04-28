// app/page.tsx

import { getPosts } from "./api";

interface Post {
  id: number;
  title: string;
  body: string;
}

export const revalidate = 86400; // 24 часа

export default async function Home() {
  const posts: Post[] = await getPosts();

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Latest Posts</h1>

      <div className="space-y-6">
        {posts.map((post) => (
          <a
            key={post.id}
            href={`/posts/${post.id}`}
            className="block p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {post.title}
            </h2>
            <p className="text-gray-600 line-clamp-3">{post.body}</p>
            <div className="mt-3 text-sm text-blue-600 font-medium">
              Read more →
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
