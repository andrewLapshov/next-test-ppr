import { Post } from "../[id]/page";

export const getPosts = (): Promise<Post[]> => {
  return fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "force-cache",
    next: { tags: ["posts"], revalidate: 86400 }, // Тег для ручной ревалидации
  }).then((res) => res.json());
};

export const getPost = (id: string): Promise<Post> => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: "force-cache",
    next: { tags: ["posts"], revalidate: 86400 }, // Теги для ручной ревалидации
  }).then((res) => res.json());
};
