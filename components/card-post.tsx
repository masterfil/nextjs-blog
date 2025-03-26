import Link from "next/link";
import React from "react";
import Image from "next/image";
import { PostMetadata } from "@/lib/posts";

const CardPost = ({ post }: { post: PostMetadata }) => {
  return (
    <Link
      href={`/blog/${post.slug}`}
      key={post.slug}
      className="transition-transform hover:-translate-y-1"
    >
      <div className="flex h-full flex-col gap-4 overflow-hidden rounded-xl border p-0">
        <div className="relative h-50 w-full">
          <Image
            src={post.image || ""}
            alt={post.title || ""}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <p className="text-xl text-white absolute bottom-3 left-3 font-bold">{post.title}</p>
        </div>
      </div>
    </Link>
  );
};

export default CardPost;
