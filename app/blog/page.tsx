import PostsList from "@/components/posts-list";
import { getAllPosts } from "@/lib/posts";
import React from "react";

export default async function Blog() {
  const posts = await getAllPosts();

  return (
    <div>
      <PostsList posts={posts} />
    </div>
  );
}
