import { PostMetadata } from "@/lib/posts";
import React from "react";
import CardPost from "./card-post";

const Cards3 = ({ posts }: { posts: PostMetadata[] }) => {
  return (
    <div className="mb-4">
      <div className="grid grid-cols-2 grid-rows-2 gap-4">
        <div className="row-span-2">
          <CardPost key={posts[0].slug} post={posts[0]} bigImage/>
        </div>
        <div>
          <CardPost key={posts[1].slug} post={posts[1]} />
        </div>
        <div>
          <CardPost key={posts[2].slug} post={posts[2]} />
        </div>
      </div>
      {/* {posts.map((post) => (
            <CardPost key={post.slug} post={post} />
          ))} */}
    </div>
  );
};

export default Cards3;
