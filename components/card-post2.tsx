import { PostMetadata } from "@/lib/posts";
import Link from "next/link";
import React from "react";
import { Badge } from "./ui/badge";
import { formatDate } from "@/lib/utils";
import Image from "next/image";

const CardPost2 = ({ post }: { post: PostMetadata }) => {
  return (
    <Link
      href={`/${post.slug}`}
      className="flex flex-col justify-between gap-x-4 gap-y-1"
    >
      <div className="flex gap-2">
        <div className="relative h-40 w-50 overflow-hidden rounded-lg border">
          <Image
            src={post.image || ""}
            alt={post.title || ""}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-lg font-semibold hover:underline">{post.title}</p>
          <div className="flex">
            {post.categories?.map((category) => (
              <Badge
                key={category}
                variant="secondary"
                className="mr-2 text-xs"
              >
                {category}
              </Badge>
            ))}
          </div>
          <p className="text-muted-foreground line-clamp-2 text-sm font-light">
            {post.summary}
          </p>

          {post.date && (
            <p className="text-sm font-light">{formatDate(post.date)}</p>
          )}
        </div>
      </div>
    </Link>
  );
};

export default CardPost2;
