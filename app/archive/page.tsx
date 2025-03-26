import CardGrid2 from "@/components/card-grid2";
import { getAllPosts } from "@/lib/posts";
import React from "react";

export default async function Archive() {
  const posts = await getAllPosts();

  return (
    <>
      <CardGrid2 posts={posts} title="All Posts"/>
    </>
  );
}
