import CardList from "@/components/card-list";
import PostWithSearch from "@/components/posts-with-search";
import { getAllPosts } from "@/lib/posts";
import React from "react";

export default async function Blog() {
  const posts = await getAllPosts();

  return (
    <>
      {/* <CardList posts={posts} /> */}
      <PostWithSearch posts={posts} />
    </>
  );
}
