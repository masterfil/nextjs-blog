import { PostMetadata } from "@/lib/posts";
import { formatDate } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Badge } from "./ui/badge";

const CardPost4 = ({ post }: { post: PostMetadata }) => {
  return (
    <li className="flex gap-4 overflow-hidden p-0">
      <Link href={`/blog/${post.slug}`} className="">
        <div className="flex gap-4">
          <div className="relative h-40 w-50 overflow-hidden rounded-lg border">
            <Image
              src={post.image || ""}
              alt={post.title || ""}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-2 max-w-lg">
            <p className="text-lg font-semibold hover:underline">
              {post.title}
            </p>
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
    </li>
  );
};

export default CardPost4;
