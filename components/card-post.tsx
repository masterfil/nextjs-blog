import Link from "next/link";
import React from "react";
import Image from "next/image";
import { PostMetadata } from "@/lib/posts";

const CardPost = ({
  post,
  bigImage = false,
}: {
  post: PostMetadata;
  bigImage?: boolean;
}) => {
  return (
    <Link
      href={`/blog/${post.slug}`}
      key={post.slug}
      className="transition-transform hover:-translate-y-1"
    >
      <div className="flex h-full flex-col gap-4 overflow-hidden rounded-xl border p-0">
        <div className={`relative w-full ${bigImage ? "h-full" : "h-48"}`}>
          <Image
            src={post.image || ""}
            alt={post.title || ""}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <p className="absolute bottom-3 left-3 text-xl font-bold text-white hover:underline">
            {post.title}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CardPost;
