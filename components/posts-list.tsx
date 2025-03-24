import { PostMetadata } from "@/lib/posts";
import { formatDate } from "@/lib/utils";
import Link from "next/link";
import React from "react";

export default function PostsList({ posts }: { posts: PostMetadata[] }) {
  return (
    <ul className="flex flex-col gap-8">
      {posts.map((post) => (
        <li key={post.slug}>
          <Link
            href={`/${post.slug}`}
            className="flex flex-col justify-between gap-x-4 gap-y-1"
          >
            <div className="max-w-lg">
              <p className="text-lg font-semibold">{post.title}</p>
              <p className="text-muted-foreground mt-1 line-clamp-2 text-sm font-light">
                {post.summary}
              </p>
            </div>
            {post.date && (
              <p className="mt-1 text-sm font-light">{formatDate(post.date)}</p>
            )}
          </Link>
        </li>
      ))}
    </ul>
  );
}
