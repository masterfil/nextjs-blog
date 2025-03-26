import React from "react";
import CardPost from "./card-post";
import { PostMetadata } from "@/lib/posts";

const FeaturedPosts = ({ posts }: { posts: PostMetadata[] }) => {
  return (
    <div className="pb-6">
      <h2 className="text-2xl font-bold pb-4">Featured Posts</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <CardPost key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedPosts;
