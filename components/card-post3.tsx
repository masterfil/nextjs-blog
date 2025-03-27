import { PostMetadata } from "@/lib/posts";
import { formatDate } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Badge } from "./ui/badge";

const CardPost3 = ({ post }: { post: PostMetadata }) => {
  return (
    <div className="flex flex-col gap-4 overflow-hidden p-0">
      <Link href={`/blog/${post.slug}`} className="">
        <div className="flex flex-col gap-2">
          <div className="relative h-40 w-full overflow-hidden rounded-lg border">
            <Image
              src={post.image || ""}
              alt={post.title || ""}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-md font-semibold hover:underline">
              {post.title}
            </p>
            <div className="flex">
              {post.categories?.map((category) => (
                <Badge
                  key={category}
                  variant="default"
                  className="mr-2 text-[10px]"
                >
                  {category}
                </Badge>
              ))}
            </div>
            {/* <p className="text-muted-foreground line-clamp-2 text-xs font-light">
              {post.summary}
            </p> */}
            {post.date && (
              <p className="text-xs font-light">{formatDate(post.date)}</p>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CardPost3;
