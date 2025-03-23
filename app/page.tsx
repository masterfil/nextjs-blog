import PostsList from "@/components/posts-list";
import { getAllPosts } from "@/lib/posts";

export default async function Home() {
  const posts = await getAllPosts();

  return (
    <>
      <PostsList posts={posts} />
    </>
  );
}
